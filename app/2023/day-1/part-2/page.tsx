import React, { useState, useEffect } from 'react';

interface DigitMap {
  [key: string]: number;
}

const Trebuchet2: React.FC = () => {
    const [sum, setSum] = useState<number>(0);

    useEffect(() => {
        fetch('/2023/day-1/input.txt')
            .then(response => response.text())
            .then(text => {
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

                setSum(totalSum);
            });
    }, []);

    return (
        <div className='container'>
            <p>The sum of all calibration values is: {sum}</p>
        </div>
    );
};

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

export default Trebuchet2;
