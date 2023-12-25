export default function PageHeading({
    title
} : {
    title: string
}) {
    return (
        <h1 className="text-7xl font-bold tracking-tight mb-10 text-center drop-shadow-xl">{title}</h1>
    )
}