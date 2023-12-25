export default function SyntaxHighlight( {
    solution
} : {
    solution: string
}) {

    return (
        <div className='flex justify-center my-10'>
            <div className='bg-green-800 text-white max-w-2xl rounded-2xl shadow-xl px-6 py-4'>
            <pre className='text-xs font-semibold overflow-x-scroll'>{solution}</pre>
            </div>
        </div>
    );
}
