import {useEffect, useState} from "react"
import './Search.css';
import {BiSearch} from 'react-icons/bi'

interface Article {
    title: string,
    // content1: string,
    content2: string,
    bookmarked: boolean,
  }
const Search = () => {
    const [articles, setArticles] = useState([])
    const [inputVal, setInputVal] = useState("booy")
    useEffect(() => {
        fetch("/articles").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes =>
           {
          let newRes = jsonRes.map((x:Article)=> {
            x.bookmarked = false;
            return x
          })
          setArticles(newRes);
        }
        )
    }, [])

    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     setInputVal(e.target.value);
    //     const searchResults = articles.filter((art: Article) => art.title.toLowerCase().indexOf(inputVal.toLowerCase()) !== -1 || art.content2.toLowerCase().indexOf(inputVal.toLowerCase()) !== -1)
    //     setResults(searchResults)

    // }
    // onChange={handleSearch}
    return (
        <>
           <div className="wrap">
               <div className="search">
                    <input type="text"  value={inputVal} className="searchTerm" placeholder="What are you looking for?"/>
                    <button type="submit"  className="searchButton">
                        <BiSearch/>
                    </button>
                    {/* {results.length !== 0 && results.map((item: Article) => <div>{item.title}</div> )} */}
               </div>
           </div>   
        </>
    )
}

export default Search
