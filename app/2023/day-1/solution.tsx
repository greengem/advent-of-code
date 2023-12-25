import SolutionDisplay from '@/ui/SolutionDisplay';

interface DigitMap {
  [key: string]: number;
}

export default function TrebuchetSolution({
    solution, input
} : {
    solution: string, input: string
}) {
    const sumPart1 = processPart1(input);
    const sumPart2 = processPart2(input);

    function processPart1(text: string): number {
        const lines = text.split('\n');
        let totalSum = 0;

        lines.forEach(line => {
            const firstDigitMatch = line.match(/\d/);
            const lastDigitMatch = line.match(/\d(?!.*\d)/);

            if (firstDigitMatch && lastDigitMatch) {
                const number = parseInt(firstDigitMatch[0] + lastDigitMatch[0]);
                totalSum += number;
            }
        });

        return totalSum;
    }

    function processPart2(text: string): number {
        const data = text.split('\n');
        const map: DigitMap = {
            "one": 1, "two": 2, "three": 3, "four": 4,
            "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9
        };

        let totalSum = 0;

        for (let line of data) {
            let num1 = 0, num2 = 0;

            for (let i = 0; i < line.length; i++) {
                num1 = findNum(line, i, map);
                if (num1 !== 0) break;
            }

            for (let i = line.length - 1; i >= 0; i--) {
                num2 = findNum(line, i, map);
                if (num2 !== 0) break;
            }

            totalSum += parseInt(`${num1}${num2}`);
        }

        return totalSum;
    }

    function findNum(line: string, index: number, map: DigitMap): number {
        if (Number.isInteger(+line[index])) {
            return +line[index];
        }
        for (const num of Object.keys(map)) {
            if (line.substring(index).startsWith(num)) {
                return map[num];
            }
        }
        return 0;
    }

    return <SolutionDisplay part1Solution={sumPart1} part2Solution={sumPart2} />;
}
