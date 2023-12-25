import FetchInput from '@/utils/FetchInput';
import CubeConundrumSolution from './solution';
import FetchGist from '@/utils/FetchGist';
import PageHeading from '@/ui/PageHeading';

export default async function CubeConundrum() {
    const gist = 'https://raw.githubusercontent.com/greengem/advent-of-code/main/app/2023/day-2/page.tsx';
    const solution = await FetchGist({ gistUrl: gist});

    const host = process.env.HOST;
    const inputText = `${host}/2023/day-1.txt`;
    const input = await FetchInput({ inputFile: inputText });

    return (
        <>
            <PageHeading title="Day 2: Cube Conundrum" />
            <CubeConundrumSolution solution={solution} input={input} />
        </>
    )
}