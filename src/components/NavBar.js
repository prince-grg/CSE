import react from "react";
import '../App.css'
import { Link ,Switch , Route, BrowserRouter as Router} from "react-router-dom";
const NavBar = ()=>{
    return (
        <>
        <Router>        
        <div className="navBar">
        <div className="container">
            <img src="./images/logo.png" alt="NIT Jalandhar" width="80px"/>
            <h2 id="d-name">Department Of <span>Computer Science and Engineering</span></h2>
            <ul className="nav">
            
                <li> <Link to="/"> Home</Link></li>
                <li> <Link to="/department"> Department </Link></li>
                <li>  People</li>
                <li>About</li>
            </ul>
        </div>
    </div>
    </Router>


    <div className="line">
    
    </div>
    </>
    )
}
export default NavBar;