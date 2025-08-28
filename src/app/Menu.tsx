"use client"
import { useState } from "react";

function Menu() {
    const [showMenu, setShowMenu] = useState(false);

    function handleMenu() {
        setShowMenu((menuSetting) => !menuSetting);
    }

    return (
        <button
            onClick={ handleMenu }
          >
            thingy
          </button>
    )

}

export default Menu;