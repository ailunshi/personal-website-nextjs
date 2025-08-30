"use client"
import { useState } from "react";
import Link from "next/link";

function Menu() {
    const [showMenu, setShowMenu] = useState(false);

    function handleMenu() {
        setShowMenu((menuSetting) => !menuSetting);
    }

    return (
      <header>
        <button
            onClick={ handleMenu }
          >
            thingy
        </button>
        {showMenu && (
          <ul>
            <Link href="/">HOME</Link>
            <Link href="/writing">WRITING</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/contact">CONTACT</Link>
         </ul>
        )}

      </header>

    )
}

export default Menu;