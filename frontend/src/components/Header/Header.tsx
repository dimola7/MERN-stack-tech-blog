import { Link } from "react-router-dom";
import "./Header.css";
import HeaderSvg from "../../images/undraw_authentication.svg";

const Header = () => {
  return (
    <>
      <div className="gridContainer">
        <div>
          <h1 className="bold-header-text">
            Where good ideas <br /> find you
          </h1>
          <p>
            Read and share new perspectives on just about any topic. Everyone’s
            welcome. Learn more.
          </p>
          <Link to="/signup">
            <button className="button">Get Started</button>
          </Link>
        </div>
        <div>
          <img src={HeaderSvg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
