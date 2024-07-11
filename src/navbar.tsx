import { useState } from "react";
import './navbar.scss';

interface NavBarProps{
    pages: string[];
    setTab(value: string): void;
}

function NavBar({pages, setTab}: NavBarProps){

    return (
        <div className="navbar">
            <div className="tabs">
                {pages.map((page, i) => 
                    <button
                        key={i}
                        onClick={() => {setTab(page)}}
                    >
                        {page}
                    </button>
                )}
            </div>
        </div>
    )
}

export default NavBar