import { IconGift } from "@tabler/icons-react";

interface SolutionBlockProps {
    title: string;
    solution?: number;
}

const SolutionBlock: React.FC<SolutionBlockProps> = ({ title, solution }) => (
    <div className="text-center flex flex-col items-center justify-center bg-white text-green-700 p-5 rounded-2xl shadow-xl">
        <h4 className="text-4xl font-bold">{title}</h4>
        <div className="flex justify-center">
            <IconGift size={128} />
        </div>
        <p className="text-5xl font-bold">{solution !== undefined ? solution : "No answer yet"}</p>
    </div>
);

interface SolutionDisplayProps {
    part1Solution?: number; 
    part2Solution?: number;
}

const SolutionDisplay: React.FC<SolutionDisplayProps> = ({ part1Solution, part2Solution }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            <SolutionBlock title="Part 1 Answer" solution={part1Solution} />
            <SolutionBlock title="Part 2 Answer" solution={part2Solution} />
        </div>
    );
}

export default SolutionDisplay;
