import "../css/Content.css";
import { Link } from "react-router-dom";

const ContentImgFirst = ({imageCol, title, text, buttonText, color}) => {

  return (
    <div className="content-wrapper-first" style={{backgroundColor: color}}>
      <div class="polaroid col-elem">
        <img className="content-image" alt="content" src={imageCol} />
      </div>
      <div className="content-text col-elem">
        <p className="text-title">{title}</p>
        <p className="text-content display-linebreak">{text}</p>
        {buttonText != null && <Link to={"/current"}><button className="button-content">{buttonText}</button></Link>}
      </div>
    </div>
  );
};

export default ContentImgFirst;
