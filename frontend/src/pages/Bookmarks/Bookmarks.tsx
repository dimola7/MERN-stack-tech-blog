import BookmarksNav from "../../components/Welcome-Nav/WelcomeNav";
import BookmarksSidebar from "../../components/WelcomeSidebar/WelcomeSidebar";
import BookmarksBody from "../../components/BookmarksBody/BookmarksBody";
import Footer from "../../components/Footer/Footer";

interface Props {
    isOpen: boolean;
    toggle: () => void;
  }
const Bookmarks = (props: Props) => {
    return (
        <div>
            <BookmarksSidebar toggle={props.toggle} isOpen={props.isOpen}/>
            <BookmarksNav  toggle={props.toggle}/>
            <BookmarksBody />
            <Footer />
        </div>
    )
}

export default Bookmarks
