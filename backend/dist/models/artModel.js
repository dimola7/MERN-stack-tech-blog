"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var articleSchema = new mongoose_1.default.Schema({
    title: String,
    content2: String,
    bookmark: {
        type: Boolean,
        default: false
    }
});
var Article = mongoose_1.default.model("Article", articleSchema);
exports.default = Article;
