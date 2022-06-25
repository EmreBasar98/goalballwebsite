import { Link } from "react-router-dom";
import "../css/Navbar.css"


const Navbar = () => {


    return (
        <div className="navbar">
            <Link className="navbar-element">Home</Link>
            <Link className="navbar-element" >Topics</Link>
            <Link className="navbar-element" to="/">Images</Link>
            <Link className="navbar-element" to="/">About Me</Link>
        </div>
    );
}

export default Navbar;