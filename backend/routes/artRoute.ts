import express, { Request, Response, NextFunction } from "express";
import Article from "../models/artModel";
// import Bookmarks from "../models/bookmarksModel";

const router = express.Router();

router.route("/create").post((req: Request, res: Response) => {
  const title = req.body.title;
  const content2 = req.body.content2;
  const newArticle = new Article({
    title,
    content2,
  });

  newArticle.save();
});

router.route("/articles").get((req: Request, res: Response) => {
  Article.find().then((foundArticles: any) => res.json(foundArticles));
});



router.route("/article/:id").get((req:Request, res:Response)=>{
  Article.findById(req.params.id)
    .then((article:any)=> res.status(200).json(article))
    .catch((error:any)=> res.status(404).json(error.message))
})

router.route("/article/:id").put( (req:Request, res:Response)=>{
  const article =  Article.findByIdAndUpdate({
   title:req.body.title,
   content1:req.body.content1,
   content2:req.body.content2
  }, {
    new:true
  })
  .then((res:any)=>res.status(200).json({message:"article found"}))
  .catch((error:any) =>res.status(404).json({error:"Post not found"}))

   article.save()
   .then((res:any)=>res.status(200).json({message:"Update successful"}))
   .catch((error:any)=> res.status(404).json({message:"Error updating article"}))

})

router.route("/article/:id").delete((req:Request, res:Response)=>{
  Article.findByIdAndDelete(req.params.id)
  .then((res:any)=>res.status(201).json({message:"Post deleted"}))
  .catch((error:any) => res.status(400).json({message:"Error occurred"}))
})

router.put('/updatebookmark/:id', async (req, res) => {
  let id = req.params.id;

  let singleArticle = await Article.findById(id);
  singleArticle.bookmark = !singleArticle.bookmark;
  await singleArticle.save();
})


// router.delete("/removebookmark/:id", async (req, res) => {
//   let id = req.params.id;

//   let article = await Article.findByIdAndDelete(id);
//   await article.save()
// })

module.exports = router;