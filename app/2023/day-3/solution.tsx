import SolutionDisplay from '@/ui/SolutionDisplay';

export default function GearRatiosSolution({ input }: { input: string }) {
    const isSymbol = (char: string): boolean => char !== '.' && isNaN(parseInt(char, 10));

    const calculatePartNumbersSum = (schematic: string): number => {
        const lines = schematic.trim().split('\n');
        let sum = 0;

        for (let i = 0; i < lines.length; i++) {
            for (let j = 0; j < lines[i].length; j++) {
                if (!isNaN(parseInt(lines[i][j], 10)) && isSymbolAdjacent(lines, i, j)) {
                    let [numStr, length] = extractNumber(lines, i, j);
                    sum += parseInt(numStr, 10);
                    j += length - 1;
                }
            }
        }

        return sum;
    };

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

    const extractNumber = (lines: string[], i: number, j: number): [string, number] => {
        let numStr = '';
        let length = 0;
        while (j + length < lines[i].length && !isNaN(parseInt(lines[i][j + length], 10))) {
            numStr += lines[i][j + length];
            length++;
        }
        return [numStr, length];
    };

    const part1Solution = calculatePartNumbersSum(input);

    return <SolutionDisplay part1Solution={part1Solution} part2Solution={0} />;
}
