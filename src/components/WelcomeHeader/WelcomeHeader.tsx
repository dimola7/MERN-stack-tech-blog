import "./WelcomeHeader.css";
import WelcomeHeaderSvg from "../../images/undraw_personal_file_222m.svg";

const WelcomeHeader = () => {
  return (
    <div className="welcome-header">
      <div className="welcome-gridContainer">
        <div>
          <h1 className="welcome-text">
            Hello <span className="user-name">Dimola</span>, <br /> Welcome to TekBlog
          </h1>
          <p>
            Read and share new perspectives on just about any topic. Everyone’s
            welcome. Learn more.
          </p>
        </div>
        <div>
          <img src={WelcomeHeaderSvg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeHeader;
