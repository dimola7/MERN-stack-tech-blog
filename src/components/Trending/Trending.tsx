import "./Trending.css";
import { useEffect, useState } from "react";
import ReactHtmlParser from 'react-html-parser';
import picture1 from "../../images/illus1.jpg";
import picture2 from "../../images/illus2.jpg";
import picture3 from "../../images/illus3.jpg";
import { useHistory } from "react-router-dom";

const Trending = () => {

  const history = useHistory();

  const showSigninPage = () => {
    history.push("signin");
  }

    const [articles, setArticles] = useState([{
      title: '',
      content: ''
    }])

    useEffect(() => {
        fetch("https://decablog.herokuapp.com/articles").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setArticles(jsonRes));
    })
  
  const arr = [...articles]
  const picture: string[] = [picture1, picture2, picture3];
  return (
    <>
    <div className="trending">
      <h3 className="trending-title">Trending on TekBlog</h3>
      <div className="trending-container">

       {arr.reverse().slice(0,3).map((article, i) =>

        <div className="card-container">
          <div className="card">
            <img className="card-img" src={picture[i%picture.length]} alt="" />
            <div className="card-details">
              <div className="blog-title">{article.title}</div>
              <p className="description">{ReactHtmlParser(article.content)}</p>
              <button className="card-button" onClick={showSigninPage}>Read more</button>
            </div>
          </div>
            </div>
            )}
        </div>
      </div>
    </>
  );
};

export default Trending;
