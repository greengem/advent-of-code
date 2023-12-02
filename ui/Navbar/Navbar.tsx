import Link from "next/link";

export default function Navbar() {
    return(
        <nav className="bg-zinc-900 text-zinc-200 flex justify-between px-5 items-center">
            <p className="font-semibold text-lg">
                <Link href="/">Advent Of Code Solutions</Link>
            </p>
            <ul className="flex gap-5">
                <li><Link href="/2023" className="py-5 block">2023</Link></li>
            </ul>
        </nav>
    )
}
