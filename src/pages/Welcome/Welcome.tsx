import WelcomeNav from "../../components/Welcome-Nav/WelcomeNav";
import Footer from "../../components/Footer/Footer";
import WelcomeHeader from "../../components/WelcomeHeader/WelcomeHeader";
import WelcomeBody from "../../components/WelcomeBody/WelcomeBody";
import WelcomeSidebar from "../../components/WelcomeSidebar/WelcomeSidebar";

// interface Props {
//   isOpen: boolean;
//   toggle: () => void;
// }
const Welcome = (props: any) => {
const {articles, setArticles, isOpen, toggle, searchBlog, setSearchBlog, handleChange} = props
//   return (
//     <div>
//       <WelcomeSidebar isOpen={props.isOpen} toggle={props.toggle} />
//       <WelcomeNav toggle={props.toggle}/>
// const Welcome = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => {
//     setIsOpen(!isOpen);
//   };
  return (
    <div>
      <WelcomeSidebar isOpen={isOpen} toggle={toggle} />
      <WelcomeNav toggle={toggle} searchBlog={searchBlog}
       setSearchBlog={setSearchBlog} handleChange={handleChange}/>
      <WelcomeHeader />
      <WelcomeBody 
      articles={articles} 
      setArticles={setArticles} 
      searchBlog={searchBlog}
       setSearchBlog={setSearchBlog}/>
       <Footer />
    </div>
  );
};

export default Welcome;
