import { Nav } from "./NavBar.styles";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import fancyShape from "../../images/big-black-five-petal-flower.svg";

interface Props {
  toggle: () => void;
}

const navbar = (props: Props) => {
  return (
    <>
      <Nav>
        <div className="navbar-container">
          <div className="logo">
            <img
              src={fancyShape}
              alt="logo"
              style={{ width: "22px", margin: "auto", display: "inline-block" }}
            />
            TechBlog
          </div>
          <div className="nav-burger" onClick={props.toggle}>
            <FaBars />
          </div>
          <ul className="search">
            <Search />
          </ul>
          <ul className="hello">
            <li>
              <Link className="nav-links" to="about">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-links" to="signup">
                Sign Up
              </Link>
            </li>
          </ul>
          <nav className="nav-button">
            <Link className="nav-button-link" to="signin">
              Sign In
            </Link>
          </nav>
        </div>
      </Nav>
    </>
  );
};

export default navbar;
