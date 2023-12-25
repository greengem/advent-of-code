'use client'
import { useState } from "react";
import { Link } from "@nextui-org/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";

const menuItems = [
    { label: "Day 1: Trebuchet", href: "/2023/day-1" },
    { label: "Day 2: Cube Conundrum", href: "/2023/day-2" },
    { label: "Day 3: Gear Ratios", href: "/2023/day-3" },
];

export default function MainNavigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <Navbar 
            onMenuOpenChange={setIsMenuOpen}
            maxWidth="full" 
            className="bg-green-700 text-white mb-10"
        >
            <NavbarContent justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent justify="center">
                <NavbarBrand>
                    <Link className="font-bold text-white text-xl lg:text-4xl drop-shadow-lg" href="/">Advent Of Code 2023</Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <Link className="text-white drop-shadow-md text-xl" href="https://github.com/greengem/advent-of-code">Github</Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={index}>
                        <Link className="w-full text-2xl" color="foreground" href={item.href}>
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
