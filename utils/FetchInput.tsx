export default async function FetchInput({ inputFile }: { inputFile: string }) {
    const res = await fetch(inputFile);
    const input = await res.text();
    return input;
}
