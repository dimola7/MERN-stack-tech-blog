import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/signup/Login";
import Welcome from "./pages/Welcome/Welcome";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import Profile from "./pages/Profile/Profile";
import About from "./pages/WelcomeAbout/WelcomeAbout";
import Article from "./components/WecomeBody/WelcomeBlogList/Article"
import CreatePost from "./components/CreatePost/CreatePost";
import GetArticles from "./components/GetArticles/GetArticles";
import Footer from "./components/Footer/Footer";
import AuthRoute from "./AuthRoute/index";
import {getCurrentUser} from "./pages/signup/Login";

interface Article {
  title: string,
  content1: string,
  content2: string,
  bookmarked: boolean,
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchBlog, setSearchBlog] = useState("");
  const [articles, setArticles] = useState([])
  const [copyRes, setCopyRes] = useState([]);
 
    useEffect(() => {
        fetch("/articles").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes =>
           {
          let newRes = jsonRes.map((x:Article)=> {
            x.bookmarked = false;
            return x
          })
          setArticles(newRes);
          setCopyRes(newRes);
        }
        )
    }, [])
    console.log("hhg", articles)


  const toggle = () => {
    setIsOpen(!isOpen);
  };
let username = getCurrentUser()?.displayName;
if (username) {
 username = username.split(" ")[0];
} 

const handleChange = (event: any) => {
  setSearchBlog(event.target.value);
}

useEffect(() => {
  let copyArticles = [...copyRes];
  if(searchBlog){
    copyArticles = copyArticles.filter((blog: Article)=> {
      return (
        blog.title.toLowerCase().includes(searchBlog.toLowerCase()) ||
        blog.content2.toLowerCase().includes(searchBlog.toLowerCase())
      )
    })
  }
setArticles(copyArticles)
}, [searchBlog]);

     
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route exact path="/signin" component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/welcome" exact>
        <Welcome  toggle={toggle} isOpen ={isOpen} articles={articles} setArticles={setArticles} searchBlog={searchBlog} setSearchBlog={setSearchBlog} handleChange={handleChange}/>
        </Route>
        <Route path="/bookmarks" exact render ={() => <Bookmarks toggle={toggle} isOpen ={isOpen}  />} />
        <Route path="/about" exact render ={() => <About toggle={toggle} isOpen ={isOpen}  />} />
        <Route path="/profile" exact render ={() => <Profile toggle={toggle} isOpen ={isOpen}  />} />
        <Route path="/create" exact component={CreatePost}/>
        <Route path = "/articles/:id" exact component = {Article}/>
        <Route path="/articles" exact component={GetArticles}/>
        

        <AuthRoute>
          <Route
          path="/welcome"
          exact
          render={() => <Welcome toggle={toggle} isOpen={isOpen} />}
          />
        </AuthRoute>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
