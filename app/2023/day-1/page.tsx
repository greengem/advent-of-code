'use client'
import { useState, useEffect } from 'react';
import FetchGist from '@/utils/FetchGist';

interface DigitMap {
  [key: string]: number;
}

const Trebuchet: React.FC = () => {
    const [sumPart1, setSumPart1] = useState<number>(0);
    const [sumPart2, setSumPart2] = useState<number>(0);

    useEffect(() => {
        fetch('/2023/day-1.txt')
            .then(response => response.text())
            .then(text => {
                processPart1(text);
                processPart2(text);
            });
    }, []);

    const processPart1 = (text: string) => {
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

        setSumPart1(totalSum);
    };

    const processPart2 = (text: string) => {
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

        setSumPart2(totalSum);
    };

    const findNum = (line: string, index: number, map: DigitMap): number => {
        if (Number.isInteger(+line[index])) {
            return +line[index];
        }
        for (const num of Object.keys(map)) {
            if (line.substring(index).startsWith(num)) {
                return map[num];
            }
        }
        return 0;
    };

    return (
        <>
        <div className='container'>
            <p>Sum of all calibration values (Part 1): {sumPart1}</p>
            <p>Sum of all calibration values (Part 2): {sumPart2}</p>
            <FetchGist gistUrl="https://raw.githubusercontent.com/greengem/advent-of-code/main/app/2023/day-1/part-1/page.tsx" />
        </div>
        </>
    );
};

export default Trebuchet;
