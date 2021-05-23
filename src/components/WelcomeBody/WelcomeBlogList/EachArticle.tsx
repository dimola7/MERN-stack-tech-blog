import React, {useState} from 'react'
import ReactHtmlParser from "react-html-parser";
import { IconContext } from "react-icons";
import { BsBookmarks } from 'react-icons/bs';
import { BsBookmarksFill } from 'react-icons/bs';

import {useHistory} from "react-router-dom"
import picture1 from "../../../images/illus1.jpg";
import picture2 from "../../../images/illus2.jpg";
import picture3 from "../../../images/illus3.jpg";
import "./WelcomeBlogList.css";
// import { getCurrentUser } from "../../pages/signup/Login";
const EachArticle = ({article, i}:any) =>{
//  let username = getCurrentUser()?.displayName;
//  if (username) {
//   username = username.split(" ")[0];
//  }

 
  const showPost = () =>{
    window.location.pathname = `/articles/${article._id}`
    
  }
  

   
    const [Bookmark, setBookmark] = useState(true);

    const addToBookmarks = () => {
        setBookmark(!Bookmark)
    }

  const picture: string[] = [picture1, picture2, picture3];

    return (
     
      
       
        <div className="blog-card alt" >
         <div className="meta">
          <img className="photo" src={picture[i % picture.length]} alt="" />
         </div>
         <div className="description">
          <h1 className="trending-title">{article.title}</h1>
          <h2 className="written-by">By Jaime Lannister</h2>
          <div className="trending-blog-content">
           {ReactHtmlParser(article.content2)}
          </div>
          <div className="clicks">
           <div>
            <button className="read-more" onClick={showPost}>
             Read more
            </button>
           </div>
           <div>
            <IconContext.Provider
             value={{
              style: {
               fontSize: "20px",
               cursor: "pointer",
              },
             }}
            >
             <div onClick={addToBookmarks}>
              {Bookmark ? <BsBookmarks /> : <BsBookmarksFill />}
             </div>
            </IconContext.Provider>
           </div>
          </div>
         </div>
        </div>
       
    
    );
}

export default EachArticle