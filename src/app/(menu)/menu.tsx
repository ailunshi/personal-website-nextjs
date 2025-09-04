"use client"
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Menu() {
    const [showMenu, setShowMenu] = useState(false);
    const pathname = usePathname();

    function handleMenu() {
        setShowMenu((menuSetting) => !menuSetting);
    }

    function getHeaderStyle(path: string) {
      return (pathname == path) ? "text-moon-yellow font-bold" : "text-white font-bold"
    }

    return (
      <header className="flex flex-row justify-between gap-20">
        
        {showMenu && (
          <div className="flex flex-row raleway gap-10 text-[16px] z-50">
            <Link href="/" className={ `${getHeaderStyle("/")} link `}>HOME</Link>
            <Link href="/writing" className={ getHeaderStyle("/writing") }>WRITING</Link>
            <Link href="/about" className={ getHeaderStyle("/about") }>ABOUT</Link>
            <Link href="/contact" className={ getHeaderStyle("/contact") }>CONTACT</Link>
         </div>
        
        )}

        <button
            onClick={ handleMenu }
          >
            { showMenu ? <p>&gt;</p> : <p>&lt;</p> }
        </button>

      </header>

    )
}

export default Menu;