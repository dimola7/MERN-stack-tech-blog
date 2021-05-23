import AboutNav from "../../components/Welcome-Nav/WelcomeNav";
import AboutSidebar from "../../components/WelcomeSidebar/WelcomeSidebar";
import AboutSvg from "../../images/undraw_Dev_focus.svg";
import "./WelcomeAbout.css";

interface Props {
    isOpen: boolean;
    toggle: () => void;
  }

const WelcomeAbout = (props: Props) => {
    return (
        <>
            <AboutSidebar toggle={props.toggle} isOpen={props.isOpen}/>
            <AboutNav  toggle={props.toggle}/>
            <h1 className="about-header">About TekBlog</h1>
            <div className="about-grid-container">
                <div>
                    <img src={AboutSvg} alt="" />
                </div>
                <div>
                    <h2>What is TekBlog?</h2>
                    <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, dolores
                    sunt? Molestiae molestias quia ipsum quos!
                    </p>
                </div>
                <div>
                    <h2>Why TekBlog?</h2>
                    <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, dolores
                    sunt? Molestiae molestias quia ipsum quos!
                    </p>
                </div>
            </div>
        </>
    )
}

export default WelcomeAbout
