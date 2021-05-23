import picture1 from "../../../images/illus1.jpg";
import picture2 from "../../../images/illus2.jpg";
import picture3 from "../../../images/illus3.jpg";
import { useHistory } from "react-router-dom";
import "./WelcomeBlogList.css";
import WelcomeContent from "./WelcomeContent";

interface Article {
  title: string,
  content1: string,
  content2: string,
  bookmarked: boolean,
}

const WelcomeBlogList = ({articles, setArticles, searchBlog, setSearchBlog}: any) => {
  const history = useHistory();
  const showCreatePostPage = () => {
    history.push("create");
  }
  console.log("articles")


    const arr = [...articles]

  const picture: string[] = [picture1, picture2, picture3];

    return (
        <>
        <div className="mobile-side">
            <h2>Write something...</h2>
            <button className="mobile-make-a-post" onClick={showCreatePostPage}>Make a post</button>
        </div>
        <div className="blog-list-grid">
          <h1 className="trending-header">Trending on TechBlog</h1>
          {arr.reverse().map((article:Article, i:number) =>(
            <div>
          <WelcomeContent article={article} id={i}  key={i} title={article.title} content2={article.content2} 
          picture={picture[i%picture.length]} bookmarked={article.bookmarked}  
      />  
      {/* <EachArticle  article = {article} key = {i}/> */}
          </div>
          ))}
          
           
        </div>
        </>
    )
}
export default WelcomeBlogList