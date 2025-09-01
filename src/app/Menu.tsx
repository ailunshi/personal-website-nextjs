"use client"
import { useState } from "react";
import Link from "next/link";
{/* import pathName, if == href, then set color to gold */}

function Menu() {
    const [showMenu, setShowMenu] = useState(false);

    function handleMenu() {
        setShowMenu((menuSetting) => !menuSetting);
    }

    return (
      <header className="flex flex-row justify-between gap-20">
        
        {showMenu && (
          <div className={`flex flex-row raleway gap-10 text-[20px]`}>
            <Link href="/">HOME</Link>
            <Link href="/writing">WRITING</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/contact">CONTACT</Link>
         </div>
        
        )}

        <button
            onClick={ handleMenu }
          >
            --
        </button>

      </header>

    )
}

export default Menu;