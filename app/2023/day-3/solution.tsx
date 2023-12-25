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

    const part1Solution = calculatePartNumbersSum(input);

    return <SolutionDisplay part1Solution={part1Solution} part2Solution={0} />;
}
