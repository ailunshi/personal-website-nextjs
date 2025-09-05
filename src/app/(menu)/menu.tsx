"use client"
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import icons from "./socials";


function Menu() {
    const [showMenu, setShowMenu] = useState(false);
    const pathname = usePathname();
    
    function handleMenu() {
      setShowMenu((menuSetting) => !menuSetting);
    }

    function getHeaderStyle(path: string) {
      return (pathname == path) ? "text-moon-yellow font-bold" : "text-white font-bold"
    }

    function DeskTopMenu() {
      return (
        <div className="flex flex-row raleway gap-10 text-[16px] z-50">
          <Link onClick={ handleMenu } href="/" className={ `${getHeaderStyle("/")} link `}>HOME</Link>
          <Link onClick={ handleMenu } href="/writing" className={ getHeaderStyle("/writing") }>WRITING</Link>
          <Link onClick={ handleMenu } href="/about" className={ getHeaderStyle("/about") }>ABOUT</Link>
          <Link onClick={ handleMenu } href="/contact" className={ getHeaderStyle("/contact") }>CONTACT</Link>
        </div>
      )
    }

    function MobileMenu() {
      return (
        <div className="fixed inset-0 h-screen flex flex-col justify-center text-center raleway gap-10 text-[16px] z-50 bg-[var(--color-purple-haze)]">
          <button onClick={handleMenu}>
                X
          </button>
          <Link onClick={ handleMenu } href="/" className={ `${getHeaderStyle("/")} link `}>HOME</Link>
          <Link onClick={ handleMenu} href="/writing" className={ getHeaderStyle("/writing") }>WRITING</Link>
          <Link onClick={ handleMenu} href="/about" className={ getHeaderStyle("/about") }>ABOUT</Link>
          <Link onClick={ handleMenu } href="/contact" className={ getHeaderStyle("/contact") }>CONTACT</Link>
          <p>{ icons.instagram } <a href="https://www.instagram.com/ailunshii/" target="_blank">@ailunshii</a></p>
          
        </div>
      )
    }

    return (
      <header className="flex flex-row justify-between gap-20">
        
        {showMenu && (
          <>
            <div className="hidden md:block relative z-50">
            {<DeskTopMenu />}
            </div>
            
            <div className="block md:hidden">
              {<MobileMenu />}
            </div>
          </>
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