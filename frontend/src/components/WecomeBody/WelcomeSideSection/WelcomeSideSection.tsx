// import { IconContext } from "react-icons";
import { CgProfile } from "react-icons/cg";
import { useHistory } from "react-router-dom";
import "./WelcomeSideSection.css";

const WelcomeSideSection = () => {
  
  const history = useHistory();

  const showCreatePostPage = () => {
    history.push("create");
  }
  return (
    <>
      <div className="welcome-side-section">
        <div className="card-container ">
          <div className="card popular-tags">
            <div className="card-details">
              <div className="card-title">Write something...</div>
              <button className="make-a-post" onClick={showCreatePostPage}>Make a post</button>
            </div>
          </div>
        </div>
        <div className="card-container ">
          <div className="card popular-tags">
            <div className="card-details">
              <div className="card-title">Popular tags</div>
              <span className="tag">data science</span>
              <span className="tag">python</span>
              <span className="tag">javascript</span>
              <span className="tag">python</span>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="card-title">Top bloggers</div>
            <div className="card-details">
              <CgProfile />
              <div className="top-blogger">
                <h4 className="top-blogger-name">Jon Snow</h4>
              </div>
              <br />
              <CgProfile />
              <div className="top-blogger">
                <h4 className="top-blogger-name">Arya Stark</h4>
              </div>
              <br />
              <CgProfile />
              <div className="top-blogger">
                <h4 className="top-blogger-name">Jon Snow</h4>
              </div>
              <br />
              <CgProfile />
              <div className="top-blogger">
                <h4 className="top-blogger-name">Jon Snow</h4>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeSideSection;
