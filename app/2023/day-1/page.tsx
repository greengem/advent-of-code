import FetchInput from '@/utils/FetchInput';
import TrebuchetSolution from "./solution";
import FetchGist from '@/utils/FetchGist';
import PageHeading from "@/ui/PageHeading";

export default async function Trebuchet() {
    const gist = 'https://raw.githubusercontent.com/greengem/advent-of-code/main/app/2023/day-1/page.tsx';
    const solution = await FetchGist({ gistUrl: gist});

    const host = process.env.HOST;
    const inputText = `${host}/2023/day-1.txt`;
    const input = await FetchInput({ inputFile: inputText });
    return (
        <>
            <PageHeading title="Day 1: Trebuchet" />
            <TrebuchetSolution solution={solution} input={input} />
        </>
    )
}