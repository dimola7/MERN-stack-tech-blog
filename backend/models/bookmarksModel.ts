import mongoose from "mongoose";

const bookmarkSchema = new mongoose.Schema({
    title: String,
    content2: String,
    bookmark: {
        type: Boolean,
        default: true
    }
});

const Bookmarks = mongoose.model("Bookmarks", bookmarkSchema);

export default Bookmarks;