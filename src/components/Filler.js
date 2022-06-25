import '../css/Filler.css';
import { Link } from "react-router-dom";

const Filler = ({title, text, buttonText, fillerImg}) => {

    return ( 
        <div className = "filler-wrapper">
            <p className='text-title'>{title}</p>
            <p className='text-content display-linebreak'>{text}</p>
            {fillerImg != null && <img className='filler-image' src = {fillerImg}/>}
            {buttonText != null && <Link to={"/tools"}><button className="filler-button">{buttonText}</button></Link>}
        </div>
     );
}
 
export default Filler;