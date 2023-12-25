import { promises as fs } from 'fs';
import CubeConundrumSolution from './solution';
import FetchGist from '@/utils/FetchGist';
import PageHeading from '@/ui/PageHeading';

export default async function CubeConundrum() {
    const input = await fs.readFile(process.cwd() + '/input/day-2.txt', 'utf8');

    const gist = 'https://raw.githubusercontent.com/greengem/advent-of-code/main/app/2023/day-2/page.tsx';
    const solution = await FetchGist({ gistUrl: gist});

    return (
        <>
            <PageHeading title="Day 2: Cube Conundrum" />
            <CubeConundrumSolution solution={solution} input={input} />
        </>
    )
}