import React, { useEffect, useState } from "react";
import ReactHtmlParser from 'react-html-parser';

function GetArticles() {
    const [articles, setArticles] = useState([{
        title: '',
        content1: '',
        content2: ''
    }])

    useEffect(() => {
        fetch("https://decablog.herokuapp.com/articles")
         .then((res) => {
          if (res.ok) {
           return res.json();
          }
         })
         .then((jsonRes) => setArticles(jsonRes));
    })



    return <div className='container'>
        <h1>Articles page</h1>
        {articles.map((article, i) =>
            <div key={i}>
                <h1>{article.title}</h1>
                <p>{article.content1}</p>
                <div>{ReactHtmlParser(article.content2)}</div>
            </div>
            )}

    </div>
}
export default GetArticles;