import ProfileNav from "../../components/Welcome-Nav/WelcomeNav";
import ProfileSidebar from "../../components/WelcomeSidebar/WelcomeSidebar";
import profileHeader from "../../images/sandro-katalina-k1bO_VTiZSs-unsplash.jpg"
import Footer from "../../components/Footer/Footer";
import "./Profile.css";

interface Props {
    isOpen: boolean;
    toggle: () => void;
  }

const Profile = (props: Props) => {
    return (
        <>
            <ProfileSidebar toggle={props.toggle} isOpen={props.isOpen}/>
            <ProfileNav  toggle={props.toggle}/>
            <div className="profile-body">
                <div className="profile-header">
                    {/* <img src={profileHeader} className="profile-header-image" alt="" /> */}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Profile
