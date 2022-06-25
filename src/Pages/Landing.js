import ContentImgFirst from "../components/ContentImgFirst";
import ContentImgSecond from "../components/ContentImgSecond";
import Filler from "../components/Filler";
import "../css/Landing.css";
import img from "../icons/landing.png";
import summaryImage from "../icons/goalballlanding.png";
import currentState from "../icons/gui.png";
import tools from "../icons/tools.png";
import linkedin from "../icons/linkedin.png";
import github from "../icons/github.png";
import gmail from "../icons/gmail.png";
import { Link } from "react-router-dom";

const Landing = () => {
  const summaryImg = summaryImage;
  const summaryTitle = "Project Summary";
  const summaryText =
    "Within the scope of the project, we want to provide data to the coaches and players by making inferences about the positions of the players we have identified and followed in the Goalball matches, the goals scored, the statistics about the game, and similar inferences through the artificial intelligence model. ";

  const goalTitle = "Project Goal";
  const goalText = `
                    • Our goal was to accomplish the analysis that we mentioned with a desktop application. Using that app, staff should be able to make any kind of operation they want. 
                    • Since it can be used by anyone, the GUI design and user experience is one of the most important topics in that project. Our plan is to keep it as simple as possible but useful at the same time.
                    `;

  const currentStateImg = currentState;
  const currentStateTitle = "Current State";
  const currentStateText = `We implemented the main structure of the GUI and several features;

                                • Video Selection  
                                • Button & Slider Group 
                                • Mode Selection Radio Group 
                                • Statistic Displaying Frame 
                                • Bird's Eye View 
                                • Settings Screen Button 
                                • Replay Button 
                            `;

  const toolsTitle = "Used Tools";
  const toolsText =
    "We have used multiple tools for implementation and achieve our goal.";

  const scrollToSection = () => {
    console.log(window.innerWidth)
    if (window.innerWidth > 1750) {
      let screenCoeff = 70000 / window.innerWidth
      window.scrollBy(0, 925 - (window.scrollY + screenCoeff));
    }
    else if(window.innerWidth > 1550){
      let screenCoeff = 100000 / window.innerWidth
      window.scrollBy(0, 875 - (window.scrollY + screenCoeff));
    }
    else{
      let screenCoeff = 100000 / window.innerWidth
      window.scrollBy(0, 775 - (window.scrollY + screenCoeff));
    }
    
  };

  return (
    <div className="landing-wrapper">
      <div className="landing-intro">
        <img className="landing-image" alt="landing" src={img} />
        <div className="button-group">
          <div className="social-button-group">
            <button class="btn">
              Burak Özüesen
              <span class="btn-content">
                <a href = "https://www.linkedin.com/in/burakozuesen/" target="_blank" style={{backgroundColor: '#8e8ed2'}}><img className="social-icon" src={linkedin}></img></a>
                <a href = "https://github.com/BurakOzuesen" target="_blank" style={{backgroundColor: '#8e8ed2'}}><img className="social-icon" src={github}></img></a>
                <a onClick={() => window.location = 'mailto:brk.ozuesen@gmail.com'} target="_blank" style={{backgroundColor: '#8e8ed2'}}><img className="social-icon" src={gmail}></img></a>
              </span>
            </button>
            <button class="btn">
              Berkay Emre Turhan
              <span class="btn-content">
                <a href = "https://www.linkedin.com/in/BerkayEmreTurhan/" target="_blank" style={{backgroundColor: '#8e8ed2'}}><img className="social-icon" src={linkedin}></img></a>
                <a href = "https://github.com/berkaytrhn" target="_blank" style={{backgroundColor: '#8e8ed2'}}><img className="social-icon" src={github}></img></a>
                <a onClick={() => window.location = 'mailto:berkaytrhn@gmail.com'} target="_blank" style={{backgroundColor: '#8e8ed2'}}><img className="social-icon" src={gmail}></img></a>
              </span>
            </button>
            <button class="btn">
              Ahmet Burak Temurer
              <span class="btn-content">
                <a href = "https://www.linkedin.com/in/ahmet-burak-temurer-b82570150/" target="_blank" style={{backgroundColor: '#8e8ed2'}}><img className="social-icon" src={linkedin}></img></a>
                <a href = "https://github.com/ahmetbt" target="_blank" style={{backgroundColor: '#8e8ed2'}} ><img className="social-icon" src={github}></img></a>
                <a onClick={() => window.location = 'mailto:b21727776@cs.hacettepe.edu.tr'} target="_blank"  style={{backgroundColor: '#8e8ed2'}}><img className="social-icon" src={gmail}></img></a>
              </span>
            </button>
            <button class="btn">
              Mustafa Emre Başar
              <span class="btn-content">
                <a href = "https://www.linkedin.com/in/mustafa-emre-ba%C5%9Far-1629701aa/" target="_blank" style={{backgroundColor: '#8e8ed2'}}><img className="social-icon" src={linkedin}></img></a>
                <a href = "https://github.com/EmreBasar98" style={{backgroundColor: '#8e8ed2'}} target="_blank"><img className="social-icon" src={github}></img></a>
                <a onClick={() => window.location = 'mailto:emre.basar.98@gmail.com'} target="_blank" style={{backgroundColor: '#8e8ed2'}}><img className="social-icon" src={gmail}></img></a>
              </span>
            </button>
          </div>

          <button className="landing-button" onClick={scrollToSection}>
            Get Started
          </button>
        </div>
      </div>
      {/* <img className="landing-image" alt="landing" src={img} />
      <div className="social-button-group">
        <button className="landing-button" onClick={scrollToSection}>
          Get Started
        </button>
      </div> */}
      {/* <button className="landing-button" onClick={scrollToSection}>
        Get Started
      </button> */}
      <ContentImgFirst
        imageCol={summaryImg}
        title={summaryTitle}
        text={summaryText}
        color="#FFFFFF"
      />
      <Filler title={goalTitle} text={goalText} />
      <ContentImgSecond
        imageCol={currentStateImg}
        title={currentStateTitle}
        text={currentStateText}
        buttonText="Learn More..."
        color="#FFFFFF"
      />
      <Filler
        title={toolsTitle}
        text={toolsText}
        buttonText="Learn More..."
        fillerImg={tools}
      />
    </div>
  );
};

export default Landing;
