'use client'
import React, { useState, useEffect } from 'react';

const Trebuchet1: React.FC = () => {
    const [sum, setSum] = useState<number>(0);

    useEffect(() => {
        fetch('/2023/day-1/input.txt')
            .then(response => response.text())
            .then(text => {
                // Split the text into lines
                const lines = text.split('\n');
                // Variable to hold the sum of the calibration values
                let totalSum = 0;

                // Iterate over each line
                lines.forEach(line => {
                    // Find the first digit in the line
                    const firstDigitMatch = line.match(/\d/);
                    // Find the last digit in the line
                    const lastDigitMatch = line.match(/\d(?!.*\d)/);

                    // Check if both first and last digits are found
                    if (firstDigitMatch && lastDigitMatch) {
                        // Combine the first and last digits to form a number
                        const number = parseInt(firstDigitMatch[0] + lastDigitMatch[0]);
                        // Add the number to the total sum
                        totalSum += number;
                    }
                });
                setSum(totalSum);
            });
    }, []);

    return (
        <div className='container'>
            <p>The sum of all calibration values is: {sum}</p>
        </div>
    );
};

export default Trebuchet1;