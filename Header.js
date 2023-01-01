
import React  from "react"

export default function Header(){
    return(
        <header>
                <nav className="navbar">
                <img  src="./react-logo.png"  ></img>
                    <ul className="nav-items">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
        </header>
    )
}