'use client'
import { useState, useEffect } from "react";

interface CubeCounts {
  red: number;
  green: number;
  blue: number;
}

export default function CubeConundrum() {
  const [sumOfIds, setSumOfIds] = useState<number>(0);
  const [totalPowerSum, setTotalPowerSum] = useState<number>(0);

  useEffect(() => {
    fetchInputData();
  }, []);

  const fetchInputData = async () => {
    try {
      const response = await fetch('/2023/day-2.txt');
      const data = await response.text();
      solveCubeConundrum(data);
      solveCubeConundrumPartTwo(data);
    } catch (error) {
      console.error('Error fetching input data:', error);
    }
  };
  

  // Solution for Part One
  const solveCubeConundrum = (inputData: string) => {
    const games = inputData.split('\n');
    let sum = 0;

    games.forEach(game => {
      const [id, draws] = game.split(': ');
      const sets = draws.split('; ');
      let isPossible = true;

      sets.forEach(set => {
        const counts: CubeCounts = { red: 0, green: 0, blue: 0 };
        set.split(', ').forEach(cube => {
          const [number, color] = cube.split(' ');
          if (color in counts) {
            counts[color as keyof CubeCounts] += parseInt(number, 10);
          }
        });

        if (counts.red > 12 || counts.green > 13 || counts.blue > 14) {
          isPossible = false;
        }
      });

      if (isPossible) {
        sum += parseInt(id.split(' ')[1], 10);
      }
    });

    setSumOfIds(sum);
  };


  // Solution for Part Two
  const solveCubeConundrumPartTwo = (inputData: string) => {
    const games = inputData.split('\n');
    let totalPower = 0;

    games.forEach(game => {
      const [, draws] = game.split(': ');
      const sets = draws.split('; ');
      const minCounts: CubeCounts = { red: 0, green: 0, blue: 0 };

      sets.forEach(set => {
        const counts: CubeCounts = { red: 0, green: 0, blue: 0 };
        set.split(', ').forEach(cube => {
          const [number, color] = cube.split(' ');
          counts[color as keyof CubeCounts] += parseInt(number, 10);
        });

        // Updating the minimum counts for the game
        minCounts.red = Math.max(minCounts.red, counts.red);
        minCounts.green = Math.max(minCounts.green, counts.green);
        minCounts.blue = Math.max(minCounts.blue, counts.blue);
      });

      // Calculate the power of the set and add to the total sum
      const power = minCounts.red * minCounts.green * minCounts.blue;
      totalPower += power;
    });

    setTotalPowerSum(totalPower);
  };

  

  return (
    <div>
      <p>Sum of IDs for possible games (Part One): {sumOfIds}</p>
      <p>Sum of the power of the sets (Part Two): {totalPowerSum}</p>
    </div>
  );
}
