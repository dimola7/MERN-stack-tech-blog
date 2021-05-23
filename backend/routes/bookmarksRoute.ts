import express, { Request, Response, NextFunction } from "express";
import Articles from "../models/artModel";

const router = express.Router();

router.get('/bookmarked', async (req, res) => {
    let articles = await Articles.find({ bookmark: true });
    res.send(articles);
})

module.exports = router;