

function Header(){
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

function Temperory(){
    return (
        <div className="body-content">
            <Header />
        <h1>Fun Facts about HTML</h1>
        <ul className="points">
            <li>Was first released in 2013 </li>
            <li> Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub </li>
            <li>Is maintained by Facebook </li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        <footer>
           <small> © 20xx  development. All rights reserved.</small>
            </footer>
    </div>
    )
}

ReactDOM.render(<Temperory />,document.getElementById("root"))
