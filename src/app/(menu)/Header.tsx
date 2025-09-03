"use client"
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const titles: Record<string, string> = {
        "/": "home",
        "/about": "about",
        "/contact": "contact",
        "/writing": "writing",
    };

    const title = titles[pathname]

    return (
        <>
            {title}
        </>
    )
}