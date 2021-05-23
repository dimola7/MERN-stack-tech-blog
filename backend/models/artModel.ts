import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    title: String,
    content2: String,
    bookmark: {
        type: Boolean,
        default: false
    }
});

const Article = mongoose.model("Article", articleSchema);

export default Article;