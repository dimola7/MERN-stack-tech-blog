"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var mongoose_1 = __importDefault(require("mongoose"));
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
// connect to mongoose
mongoose_1.default.connect("mongodb+srv://groupA:groupa1234@cluster0.1d2vr.mongodb.net/dbgroupA", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// require route
app.use("/", require("./routes/artRoute"));
app.use("/", require("./routes/bookmarksRoute"));
var port = process.env.PORT || 3500;
app.listen(port);
