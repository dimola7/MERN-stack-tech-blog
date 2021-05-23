import { IconContext } from "react-icons";
import { FaBars } from "react-icons/fa";
import { BsFillBookmarksFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import '../Search/Search.css';
import {BiSearch} from 'react-icons/bi'
import Search from "../Search/Search";
import fancyShape from "../../images/big-black-five-petal-flower.svg";
import "./WelcomeNav.css";
import { useHistory } from "react-router-dom";
import { getCurrentUser } from "../../pages/signup/Login";

// interface Props {
//   toggle: () => void;
// }

const WelcomeNav = (props:any) => {
  const {toggle, signOut, searchBlog, setSearchBlog, handleChange} = props
  const history = useHistory();

  const showCreatePostPage = () => {
    history.push("create");
  }

  let username = getCurrentUser()?.displayName;
  if (username) {
   username = username.split(" ")[0];
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
       {/* <Search searchBlog={searchBlog} /> */}
       <div className="wrap">
               <div className="search">
                    <input type="text" onChange={handleChange}  className="searchTerm" placeholder="What are you looking for?"/>
                    {/* <button type="submit"  className="searchButton">
                        <BiSearch/>
                    </button> */}
                    {/* {results.length !== 0 && results.map((item: Article) => <div>{item.title}</div> )} */}
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
       <li>{username}</li>
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