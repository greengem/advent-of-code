import { promises as fs } from 'fs';
import TrebuchetSolution from "./solution";
import FetchGist from '@/utils/FetchGist';
import PageHeading from "@/ui/PageHeading";
import SyntaxHighlight from '@/ui/Highlight';

export default async function GearRatios() {
    const input = await fs.readFile(process.cwd() + '/input/day-3.txt', 'utf8');

    const gist = 'https://raw.githubusercontent.com/greengem/advent-of-code/main/app/2023/day-1/page.tsx';
    const solution = await FetchGist({ gistUrl: gist});

    return (
        <>
            <PageHeading title="Day 3: Gear Ratios" />
            <SyntaxHighlight solution={solution} />
            <TrebuchetSolution input={input} />
        </>
    );
}
