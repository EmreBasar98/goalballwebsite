import logo from "../icons/GoalballAnalysisSystem.png";//goalball için logo ekle
import "../css/Header.css"
import { Link } from "react-router-dom";



const Header = () => {
    return ( 
    
        <div className="header">
            <Link className="logo" to="/">
                <img className="logo" src={logo} alt="logo" />
            </Link>
            {/* <Navbar/> */}
        </div> );
}
 
export default Header;