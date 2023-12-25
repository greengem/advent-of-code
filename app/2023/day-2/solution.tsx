import SolutionDisplay from '@/ui/SolutionDisplay';

interface CubeCounts {
  red: number;
  green: number;
  blue: number;
}

export default function CubeConundrumSolution({ input } : { input: string }) {
  
  // Solution for Part One
  const solveCubeConundrum = (inputData: string): number => {
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

    return sum;
  };

  // Solution for Part Two
  const solveCubeConundrumPartTwo = (inputData: string): number => {
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

    return totalPower;
  };

  const sumOfIds = input ? solveCubeConundrum(input) : 0;
  const totalPowerSum = input ? solveCubeConundrumPartTwo(input) : 0;

  return <SolutionDisplay part1Solution={sumOfIds} part2Solution={totalPowerSum} />;
}
