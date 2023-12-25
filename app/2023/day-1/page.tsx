import { promises as fs } from 'fs';
import TrebuchetSolution from "./solution";
import FetchGist from '@/utils/FetchGist';
import PageHeading from "@/ui/PageHeading";

export default async function Trebuchet() {
    const input = await fs.readFile(process.cwd() + '/input/day-1.txt', 'utf8');

    const gist = 'https://raw.githubusercontent.com/greengem/advent-of-code/main/app/2023/day-1/solution.tsx';
    const solution = await FetchGist({ gistUrl: gist});

    return (
        <>
            <PageHeading title="Day 1: Trebuchet" />
            <TrebuchetSolution solution={solution} input={input} />
        </>
    );
}
