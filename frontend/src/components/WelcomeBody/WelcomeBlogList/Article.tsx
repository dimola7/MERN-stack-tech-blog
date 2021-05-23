import {useState, useEffect} from 'react';
import axios from 'axios'
import ReactHtmlParser from "react-html-parser";
import Nav from "../../Welcome-Nav/WelcomeNav";
import picture from "../../../images/illus2.jpg";
import "./Article.css";
import profileImg from "../../../images/photo.jpeg"

const Article = (props:any) =>{
  const [article, setArticle] = useState(
   {
    title: "",
    content1: "",
    content2: "",
   }
  );
  

  useEffect(() => {
   axios
    .get(
     `https://decablog.herokuapp.com/article/${props.match.params.id}`
    )
    .then((res: any) => {
     setArticle(res.data);
    })
    .catch((err) => console.log(err));
  });
 

  return (
   <>
    <Nav />
    <div className="article-container">
    <div className="card-container">
            <div className="card">
              <img className="card-img" src={picture} alt="" />
              <div className="card-details">
                <div className="blog-title">{article.title}</div>
                <p className="description">{ReactHtmlParser(article.content2)}</p>
              </div>
            </div>
          </div>
      <div>
      <div className="welcome-side-section">
        <div className="card-container ">
          <div className="card popular-tags">
            <div className="card-details">
              <img src={profileImg} alt="" className="profile-img" />
              <h4 className="post-owner">Ben Davies</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
   </>
  );
}

export default Article;