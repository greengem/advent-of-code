export default async function FetchGist({ gistUrl }: { gistUrl: string }) {
    const res = await fetch(gistUrl);
    const code = await res.text();
    return code;
}
