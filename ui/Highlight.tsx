export default function SyntaxHighlight( {
    solution
} : {
    solution: string
}) {

    return (
        <div className='bg-white text-black rounded-2xl shadow-xl px-6 py-4'>
            <pre className='text-sm font-semibold overflow-x-scroll'>{solution}</pre>
        </div>
    );
}
