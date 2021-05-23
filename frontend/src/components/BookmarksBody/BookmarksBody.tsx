import BookmarksSideSection from "../WecomeBody/WelcomeSideSection/WelcomeSideSection";
import BookmarksBlogList from "./BookmarksBlogList/BookmarksBlogList";
import "./BookmarksBody.css";

const BookmarksBody = () => {
    return (
        <>
          <div className="bookmarks-body-grid">
            <div>
            {/* <WelcomeBlogList /> */}
            <BookmarksBlogList /> 
            </div>
            <div>
            <BookmarksSideSection />
            </div>
          </div>  
        </>
    )
}

export default BookmarksBody
