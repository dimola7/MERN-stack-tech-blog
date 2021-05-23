import WelcomeBlogList from "./WelcomeBlogList/WelcomeBlogList";
import WelcomeSideSection from "./WelcomeSideSection/WelcomeSideSection";
import "./WelcomeBody.css";

const WelcomeBody = ({articles, setArticles, searchBlog, setSearchBlog}: any) => {
  return (
    <>
      <div className="welcome-body-grid">
        <div>
          <WelcomeBlogList articles={articles} setArticles={setArticles}  searchBlog={searchBlog}
       setSearchBlog={setSearchBlog}/>
        </div>
        <div>
          <WelcomeSideSection />
        </div>
      </div>
    </>
  );
};

export default WelcomeBody;
