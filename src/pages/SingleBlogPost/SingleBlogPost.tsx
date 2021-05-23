import Nav from "../../components/Welcome-Nav/WelcomeNav";
import Sidebar from "../../components/WelcomeSidebar/WelcomeSidebar";
import Footer from "../../components/Footer/Footer";

interface Props {
    isOpen: boolean;
    toggle: () => void;
  }

const SingleBlogPost = (props: Props) => {
    return (
        <div>
            <Sidebar toggle={props.toggle} isOpen={props.isOpen}/>
            <Nav  toggle={props.toggle}/>
            hey
            <Footer />
        </div>
    )
}

export default SingleBlogPost
