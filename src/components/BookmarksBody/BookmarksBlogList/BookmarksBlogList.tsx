import { IconContext } from "react-icons";
import {useEffect, useState} from 'react';
import {BsBookmarksFill} from 'react-icons/bs'
import ReactHtmlParser from 'react-html-parser';
import picture1 from "../../../images/illus1.jpg";
import picture2 from "../../../images/illus2.jpg";
import picture3 from "../../../images/illus3.jpg";
import "./BookmarksBlogList.css";


interface Article {
  _id: string,
  title: string,
  content2: string,
  bookmarked: boolean,
}

const BookmarksBlogList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://decablog.herokuapp.com/bookmarked", {
     method: "GET",
    })
     .then((response) => response.json())
     .then((result) => setArticles(result))
     .catch((err) => console.log(err));
  }, []);

  console.log(articles)
  
  const picture: string[] = [picture1, picture2, picture3];

  const removeBlog = (id:string) => {
let copyArr = [...articles];
let filtered = copyArr.filter((x: Article)=> x._id !== id);
setArticles(filtered)
  }

    return (
        <>
        <h1 className="bookmarks-header">Bookmarks</h1>
        <p className="bookmarks-desc">All the posts you have bookmarked on TechBlog.</p>
         <div className="mobile-side">
            <h2>Write something...</h2>
            <button className="mobile-make-a-post">Make a post</button>
        </div>
        {articles.map((item:Article, index) => (        
        <div key={item._id} className="blog-list-grid">
           <div className="blog-card alt">
                <div className="meta">
                    <img className="photo" src={picture[index%picture.length]} alt=""/>
                </div>
                <div className="description">
                <h1 className="bookmarks-title">{item.title}</h1>
                {/* <h2 className="written-by">By Jaime Lannister</h2> */}
                <p className="bookmarks-blog-content">{ReactHtmlParser(item.content2)}</p>
                <div className="clicks">
                    <div>
                        <button className="read-more">Read more</button>
                    </div>
                    <div>
                    <IconContext.Provider
                  value={{
                    style: {
                      fontSize: "20px",
                      cursor: "pointer"
                    },
                  }}
                >
                  <div>
                        <BsBookmarksFill onClick={()=>{removeBlog(item._id)}}/>                      
                  </div>
                  </IconContext.Provider>
                    </div>
                </div>
                </div>
            </div>
           </div>  
        ))}
        </>
    )
}

export default BookmarksBlogList
