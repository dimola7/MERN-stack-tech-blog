import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();

app.use(cors());
app.use(express.json());

// connect to mongoose
mongoose.connect("mongodb+srv://groupA:groupa1234@cluster0.1d2vr.mongodb.net/dbgroupA", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// require route
app.use("/", require("./routes/artRoute"))
app.use("/", require("./routes/bookmarksRoute"))

const port = process.env.PORT || 3500
app.listen(port)