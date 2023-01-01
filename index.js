// import React from "react";
// import App from "./App";
// import ReactDOM from "react-dom";
// import Navbar from "./Navbar";
// import Main from "./Main";

function Navbar(){
    return (
        <nav className="navbar">
            <img src="./react-logo.png" width="40px">
            </img>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
        
    )   
}

function Main(){
    return (
        <main>
            <h1>Fun Facts about React</h1>
        <ul>
        <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        </main>
        
    )   
}

function App(){
    return (
        <div className="components">
            <Navbar />
            <Main />
        </div>
    )
}

ReactDOM.render(<App /> ,document.getElementById("root"))
