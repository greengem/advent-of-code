import SolutionDisplay from '@/ui/SolutionDisplay';

export default function GearRatiosSolution({ input }: { input: string }) {
    // Check if the character is a symbol
    const isSymbol = (char: string): boolean => char !== '.' && isNaN(parseInt(char, 10));

    // Extract the number starting at position (i, j)
    const extractNumber = (lines: string[], i: number, j: number): [string, number] => {
        let numStr = '';
        let length = 0;
        while (j + length < lines[i].length && !isNaN(parseInt(lines[i][j + length], 10))) {
            numStr += lines[i][j + length];
            length++;
        }
        return [numStr, length];
    };

    // Check if any of the eight neighboring cells is a symbol
    const isSymbolAdjacent = (lines: string[], i: number, j: number): boolean => {
        for (let di = -1; di <= 1; di++) {
            for (let dj = -1; dj <= 1; dj++) {
                if (di === 0 && dj === 0) continue;
                const x = i + di, y = j + dj;
                if (x >= 0 && x < lines.length && y >= 0 && y < lines[i].length && isSymbol(lines[x][y])) {
                    return true;
                }
            }
        }
        return false;
    };

    // Calculate gear ratios
    const calculateGearRatios = (lines: string[], numbers: { num: number; x: number; y: number }[]): number => {
        let gearRatioSum = 0;

        for (let i = 0; i < lines.length; i++) {
            for (let j = 0; j < lines[i].length; j++) {
                if (lines[i][j] === '*') {
                    const adjacentParts = [];
                    for (let di = -1; di <= 1; di++) {
                        for (let dj = -1; dj <= 1; dj++) {
                            if (di === 0 && dj === 0) continue;
                            const x = j + dj, y = i + di;
                            if (x >= 0 && x < lines[i].length && y >= 0 && y < lines.length) {
                                const part = numbers.find(n => n.x === x && n.y === y);
                                if (part && isAdjacentToNumber(lines, part.num, x, y)) {
                                    adjacentParts.push(part.num);
                                }
                            }
                        }
                    }
                    if (adjacentParts.length === 2) {
                        gearRatioSum += adjacentParts[0] * adjacentParts[1];
                    }
                }
            }
        }

        return gearRatioSum;
    };

    // Check if a cell is adjacent to a specific number
    const isAdjacentToNumber = (lines: string[], num: number, x: number, y: number): boolean => {
        const numStr = String(num);
        for (let i = 0; i < numStr.length; i++) {
            if (lines[y][x + i] === numStr[i]) {
                return true;
            }
        }
        return false;
    };


    // Calculate the sum of part numbers
    const calculatePartNumbersSum = (schematic: string): number => {
        const lines = schematic.trim().split('\n');
        let sum = 0;

        // Track all numbers and their starting positions
        const numbers = [];
        for (let i = 0; i < lines.length; i++) {
            for (let j = 0; j < lines[i].length; j++) {
                if (!isNaN(parseInt(lines[i][j], 10))) {
                    const [numStr, length] = extractNumber(lines, i, j);
                    numbers.push({ num: parseInt(numStr, 10), x: j, y: i });
                    j += length - 1;
                }
            }
        }

        // Sum numbers that have at least one digit adjacent to a symbol
        for (const { num, x, y } of numbers) {
            for (let i = 0; i < String(num).length; i++) {
                if (isSymbolAdjacent(lines, y, x + i)) {
                    sum += num;
                    break;
                }
            }
        }

        return sum;
    };

    const lines = input.trim().split('\n');
    const numbers = [];

    const part1Solution = calculatePartNumbersSum(input);

    // Extract numbers and their positions
    for (let i = 0; i < lines.length; i++) {
        for (let j = 0; j < lines[i].length; j++) {
            if (!isNaN(parseInt(lines[i][j], 10))) {
                const [numStr, length] = extractNumber(lines, i, j);
                numbers.push({ num: parseInt(numStr, 10), x: j, y: i });
                j += length - 1;
            }
        }
    }

    const part2Solution = calculateGearRatios(lines, numbers);

    return <SolutionDisplay part1Solution={part1Solution} part2Solution={part2Solution} />;
}
