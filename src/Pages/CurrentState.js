import ContentImgFirst from "../components/ContentImgFirst";
import ContentImgSecond from "../components/ContentImgSecond";
import videoImage from "../icons/videoselection.PNG";
import playerImage from "../icons/player.PNG";
import trackerImage from "../icons/tracker.PNG";
import scoreImage from "../icons/score.PNG";
import replayImage from "../icons/replay.png";
import settingsImage from "../icons/settings.PNG";
import displayImage from "../icons/display.PNG";
import birdseyeImage from "../icons/birdseye.PNG";
import "../css/CurrentState.css";

const CurrentState = () => {
  const videoImg = videoImage;
  const videoTitle = "Video Selection";
  const videoText = `For the input file selection, we added a bar that takes a path as an input, which also has a file browsing feature, to get the video path easily from the user. To access the file browser, we can use this button with three dots on it as shown in the figure. 

                    Then we navigate through the folders and select the desired video to use as the input and after clicking the select button that is residing at the bottom right corner, the frames of the video get loaded to the buffer.
                    `;

  const playerImg = playerImage;
  const playerTitle = "Video Player Features";
  const playerText = `Using the slider under the video, which also indicates how much of the video is shown, we are able to jump to any desired frame of the video. Clicking the button below the slider that reads “Start/Pause” starts or pauses the video.`;

  const trackingImg = trackerImage;
  const trackingTitle = "Tracking Control";
  const trackingText = `Users can choose to switch to one person tracking mode by clicking the button above the video that reads “One Person Track” and then choosing the player to track by clicking on the player in the video part of the window. To switch back to the default tracking mode, users can use the “Reset One Person Track” button residing at the right of the previous button that was used to activate the one person tracking mode.

                        Users can also choose to stop the tracker and to play the video without tracking features and visuals. To stop the tracker, users can uncheck the “Tracking” checkbox which is below the video. Also to activate the tracker again, similarly, users can check the same checkbox.
                       `;

  const scoreImg = scoreImage;
  const scoreTitle = "Score Detection";
  const scoreText = `
                    We used a heuristic approach for score detection. We use the ball position info from the tracker and the court line points taken from the user. Using the corner points of the court, we get the necessary data about the edges of the court. Since, as we mentioned, we have the coordinate information of the ball with a simple heuristic, we came up with a pretty good detection result. The heuristic works as follows; After getting the court information via user input, we define an area around the upper and lower court lines. As long as the ball stays in the area a counter is incremented and if that counter reaches a certain threshold, we detect it as a score and also here it is important to mention that if the ball gets out of the defined areas the counter is set to zero again.
                    
                    The areas for the upper and  the lower line and the court lines can be seen below.
                    `;

  const replayImg = replayImage;
  const replayTitle = "Replay Feature";
  const replayText = `When a score is detected, we can also replay it if it is desired by the user. A button placed on the GUI ıs originally disabled.

                      The same button becomes enabled when a score is detected.If the user presses that button the video will be rolled back and plays the goal sequence again.
                    `;

  const settingsImg = settingsImage;
  const settingsTitle = "Parameter Settings";
  const settingsText = `
  The goal detection is done according to a set of default parameters. Those parameters are :

  • Upper Line Upper Threshold
  • Upper Line Lower Threshold
  • Lower Line Upper Threshold
  • Lower Line Lower Threshold
  • Goal Counter Threshold

  The default values for the parameters are 35, 15, 35, 30, 60 respectively.
  
  • In addition to these default settings, we also implemented a settings screen so that users can configure these values as desired.

  • The input fields are configured to have only numeric values. After the user submits the desired parameter, the program starts to run according to these values.

                    `;

  const displayImg = displayImage;
  const displayTitle = "Statistic Displaying";
  const displayText = `
                    • One of our goals is to add text based statistics to our implementation and to display these stats to the user we have created a text area on the right side of the screen. 

                    • If one of the radios is selected by the user, the text area title is set automatically according to that mode and also other mode selection is disabled to the user.

                    • As the video rolls and the data is derived, the corresponding stats will be displayed in that area.                  
                    `;

  const birdseyeImg = birdseyeImage;
  const birdseyeTitle = "Bird's Eye";
  const birdseyeText = `
                                      • To be able make user observe and analyze any kind of movement in the game we wanted to add a birds eye view. 
                  
                                      • Players for different teams can be seen with blue and red dots and the ball with the white dot.
       
                                      `;

  window.scrollTo(0, 0);
  return (
    <div className="current-state-wrapper">
      <p id="page-title">CURRENT STATE</p>
      <ContentImgFirst
        imageCol={videoImg}
        title={videoTitle}
        text={videoText}
        color="#FFFFFF"
      />
      <ContentImgSecond
        imageCol={playerImg}
        title={playerTitle}
        text={playerText}
        color="#FFFFFF"
      />
      <ContentImgFirst
        imageCol={trackingImg}
        title={trackingTitle}
        text={trackingText}
        color="#FFFFFF"
      />
      <ContentImgSecond
        imageCol={scoreImg}
        title={scoreTitle}
        text={scoreText}
        color="#FFFFFF"
      />
      <ContentImgFirst
        imageCol={replayImg}
        title={replayTitle}
        text={replayText}
        color="#FFFFFF"
      />
      <ContentImgSecond
        imageCol={settingsImg}
        title={settingsTitle}
        text={settingsText}
        color="#FFFFFF"
      />
      <ContentImgFirst
        imageCol={displayImg}
        title={displayTitle}
        text={displayText}
        color="#FFFFFF"
      />
      <ContentImgSecond
        imageCol={birdseyeImg}
        title={birdseyeTitle}
        text={birdseyeText}
        color="#FFFFFF"
      />
    </div>
  );
};

export default CurrentState;
