import Link from "next/link";
import { IconGift } from "@tabler/icons-react";

const navLinks = [
    { href: '/2023/day-1/part-1', title: 'Day 1 - Part 1' },
    { href: '/2023/day-1/part-2', title: 'Day 1 - Part 2' },
];
  
export default function SubNavbar() {
    return (
        <nav className="bg-green-500 text-zinc-200 flex justify-between px-5 items-center">
            <ul className="flex gap-2 py-2">
                {navLinks.map((link, index) => (
                <li key={index}>
                    <Link href={link.href} className="text-xs py-1 px-3 bg-red-500 rounded-full flex gap-1 items-center hover:bg-red-600 transition-colors">
                    <IconGift size={16} />
                    {link.title}
                    </Link>
                </li>
                ))}
            </ul>
        </nav>
    );
}
