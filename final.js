function Profile(){
    return(        
            <img className="profilepic"  src="./image.jpg"  ></img>
    )
}

function Btn(){
    return(
        <div className="btn">
            <button className="btn01"><i class="fa fa-envelope"></i>  Email</button>
            <button className="btn02"><i class='fa fa-linkedin'></i>  Linkedin</button>
        </div>
        
    )
}
function About(){
    return(
        <div className="about">
            <h2>About</h2>
            <p> I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
    )
}
function Interest(){
    return(
        <div className="intrest">
            <h2>interest</h2>
            <p> Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
    )
}

function Footer(){
    return(
        <div className="footer">
            <ul>
                <li><a href="#"><i class="fa fa-twitter-square"></i></a></li>
                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                <li><a href="#"><i class="fa fa-facebook-square"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin-square" ></i></a></li>
                <li><a href="#"><i class="fa fa-github-square" ></i></a></li>
            </ul>   
        </div>
    )
}

function Main(){
    return(
        <div>
            <div className="body-content" >
            <Profile />
            <h1>Ramdev Baba</h1>
            <h4>Front-End Developer</h4>
            <Btn />
            <About />
            <Interest />
        </div>
        <Footer />
        </div>
        
        
    )
}


ReactDOM.render(<Main />,document.getElementById("root"))
