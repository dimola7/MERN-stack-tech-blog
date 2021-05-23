import { IconContext } from "react-icons";
import { FaBars } from "react-icons/fa";
import { BsFillBookmarksFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import fancyShape from "../../images/big-black-five-petal-flower.svg";
import "./WelcomeNav.css";
import { useHistory } from "react-router-dom";

const WelcomeNav = (props:any) => {
  const {toggle, signOut, searchBlog, setSearchBlog, handleChange} = props
  const history = useHistory();

  const showCreatePostPage = () => {
    history.push("create");
  }

  return (
   <>
    <div className="welcome-nav">
     <div className="navbar-container">
     <div className="logo">
          <img
              src={fancyShape}
              alt="logo"
              style={{ width: "22px", margin: "auto", display: "inline-block" }}
            />
            <Link to="/welcome" className="back-home">
              TechBlog
            </Link>
          </div>
      <div className="nav-burger" onClick={toggle}>
       <FaBars />
      </div>
      <ul className="search">
       <div className="wrap">
               <div className="search">
                    <input type="text" onChange={handleChange}  className="searchTerm" placeholder="What are you looking for?"/>
               </div>
           </div>  
      </ul>
      <ul className="hello">
       <li>
        <Link className="nav-links" to="/about">
         About
        </Link>
       </li>
       <li>
        <Link className="nav-links" to="/bookmarks">
         <IconContext.Provider
          value={{
           style: {
            fontSize: "20px",
            color: "#fff",
           },
          }}
         >
          <div>
           <BsFillBookmarksFill />
          </div>
         </IconContext.Provider>
        </Link>
       </li>
       <li>
        <IconContext.Provider
         value={{ style: { fontSize: "30px", color: "#fff" } }}
        >
         <div className="profile-icon">
          <CgProfile />
         </div>
        </IconContext.Provider>
       </li>
       <li>Dimola</li>
       <Dropdown>
        <Dropdown.Toggle id="dropdown-basic"></Dropdown.Toggle>

        <Dropdown.Menu>
        <Dropdown.Item className={"dropdown-link"} onClick={showCreatePostPage}>Write a post</Dropdown.Item>
         <Dropdown.Item><Link to="/profile" className="drop-down-link">View profile</Link></Dropdown.Item>
         <Dropdown.Item href="/" onClick={signOut}>
          Sign out
         </Dropdown.Item>
        </Dropdown.Menu>
       </Dropdown>
      </ul>
     </div>
    </div>
   </>
  );
};

export default WelcomeNav;