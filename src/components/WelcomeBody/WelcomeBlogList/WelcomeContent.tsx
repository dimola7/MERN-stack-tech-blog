import {useState} from 'react'
import { IconContext } from "react-icons";
import { BsBookmarks } from 'react-icons/bs';
import { BsBookmarksFill } from 'react-icons/bs';
import ReactHtmlParser from 'react-html-parser';

const WelcomeContent = ({title, content2, picture, id, article}:any) => {
   
      const [ Bookmark, setBookmark] = useState(true);

      const addToBookmarks = () => { 

        setBookmark(!Bookmark)

       let newArticle = {...article, bookmark: !article.bookmark} 

    fetch(`https://decablog.herokuapp.com/updatebookmark/${article._id}`, {
     method: "PUT",
     body: newArticle,
    })
     .then(() => console.log("updated"))
     .catch((err) => console.log(err));
          
        console.log(article)
    
      }
      const showPost = () =>{
        window.location.pathname = `/articles/${article._id}`
        
      }
    return (
     <div id={id}>
      <div className="blog-card alt">
       <div className="meta">
        <img className="photo" src={picture} alt="" />
       </div>
       <div className="description">
        <h1 className="trending-title">{title}</h1>
        <h2 className="written-by">By Arya Stark</h2>
        <div className="trending-blog-content">{ReactHtmlParser(content2)}</div>
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
           <div id={id} onClick={addToBookmarks}>
            {article.bookmark ? <BsBookmarksFill /> : <BsBookmarks />}
           </div>
          </IconContext.Provider>
         </div>
        </div>
       </div>
      </div>
     </div>
    );
}

export default WelcomeContent;