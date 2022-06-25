import ContentImgFirst from "../components/ContentImgFirst";
import ContentImgSecond from "../components/ContentImgSecond";

import yoloImage from "../icons/yolo.png";
import deepsortImage from "../icons/deepsort.PNG";
import pyqtImage from "../icons/pyqt.png";
import opencvImage from "../icons/opencv.png";
import roboflowImage from "../icons/roboflow.png";
import "../css/CurrentState.css";

const UsedTools = () => {
  const yoloImg = yoloImage;
  const yoloTitle = "YOLO";
  const yoloText = `The main tool for our implementation is the tracker and this tracker runs over object detection. The object detection tool we used in our implementation is YOLO.
  
                        At the beginning, we used default YOLO models but they were not correct enough so we tuned our own YOLO model for players and the ball. 
                      `;

  const deepsortImg = deepsortImage;
  const deepsortTitle = "DeepSort";
  const deepsortText = `
                        As it was mentioned before the tracker is the backbone of our project and for tracker implementation we used DeepSort tracker. This tracker uses a YOLO model and makes detections on frames and tracks objects accordingly.
                        
                        Tracker gives IDs to the objects if more than one object detected for one class and for that process a model called osnet is used.

                        We used the frames with the bounding boxes returned from the tracker and displayed them in our interface so that the user can experience it in real-time.

                        The tracker and the GUI are two different applications actually and because of that we had to make adjustments about the tracker so that it can work properly with the GUI. Originally the tracker was running in its own loop and displaying frames in that loop and also before tracking it makes its initializations and creates necessary variables. We had to configure it so that it runs in a loop that is controlled by the GUI. First we created a class based structure so that necessary initialization was done only once when the program starts. Later created a function for processing the frame so that it can be called and controlled from outside. These two main configurations made these two applications work properly together.
                        `;

  const pyqtImg = pyqtImage;
  const pyqtTitle = "PyQt5";
  const pyqtText = `The user interface of our project is done by using PyQT library. It really eased the process and kept us from spending too much time on it.

                    We also used QtCreator, which is a tool for designing the interface and managing the relations between elements. It really helped us during the first steps and fastened the process.
                     `;

  const opencvImg = opencvImage;
  const opencvTitle = "OpenCV";
  const opencvText = `
                        OpenCV is one of the main libraries for our project. The object detection and tracker implementations use OpenCV frames. Also we used OpenCV to convert video into frames so that they can be used in necessary tools.
                      `;

  const roboflowImg = roboflowImage;
  const roboflowTitle = "Custom Annotation Tool and RoboFlow API";
  const roboflowText = `As it was said before, when we first started using YOLO, we used default models and saw that they were not sufficient for our task. We needed to train our own model. For that purpose, we first created our annotations. We gathered frames from different game videos and labeled the necessary object in those frames and had our own dataset.
  
                          After the dataset preparation, we used RoboFlow to transfer that dataset to detection implementation. RoboFlow is an api service where you can do any kind of adjustment about the dataset such as declaring classes, shuffling, some type of data augmentation, splitting. It also helped us to load the dataset to a colab project again using its api. It really helped us from wasting a huge amount of time for uploading dataset from one place to another.
                      `;
  window.scrollTo(0,0);
  return (
    <div className="current-state-wrapper">
      <p id="page-title">USED TOOLS</p>
      <ContentImgFirst
        imageCol={yoloImg}
        title={yoloTitle}
        text={yoloText}
        color="#FFFFFF"
      />
      <ContentImgSecond
        imageCol={deepsortImg}
        title={deepsortTitle}
        text={deepsortText}
        color="#FFFFFF"
      />
      <ContentImgFirst
        imageCol={pyqtImg}
        title={pyqtTitle}
        text={pyqtText}
        color="#FFFFFF"
      />
      <ContentImgSecond
        imageCol={opencvImg}
        title={opencvTitle}
        text={opencvText}
        color="#FFFFFF"
      />
      <ContentImgFirst
        imageCol={roboflowImg}
        title={roboflowTitle}
        text={roboflowText}
        color="#FFFFFF"
      />
    </div>
  );
};

export default UsedTools;
