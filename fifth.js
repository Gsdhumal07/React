function Header(){
    return(
        <header>
                <nav>
                <img  src="./react-logo.png" width="40px" ></img>
                </nav>
        </header>
    )
}


function Temperory(){
    return (
        <div>
            <Header />
        <h1>Fun Facts about HTML</h1>
        <ul>
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
