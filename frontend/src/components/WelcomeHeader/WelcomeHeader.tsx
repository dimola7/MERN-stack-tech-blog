import "./WelcomeHeader.css";
import WelcomeHeaderSvg from "../../images/undraw_personal_file_222m.svg";
import { getCurrentUser } from "../../pages/signup/Login";

const WelcomeHeader = () => {
   let username = getCurrentUser()?.displayName;
   if (username) {
    username = username.split(" ")[0];
   }
  return (
    <div className="welcome-header">
      <div className="welcome-gridContainer">
        <div>
          <h1 className="welcome-text">
            Hello <span className="user-name">{username}</span>, <br /> Welcome to TechBlog
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
