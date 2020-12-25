import React,{ useState, useEffect } from 'react';
import Axios from 'axios';
import News from './News';

export default function Business(){
   const [ news, setNews ] = useState([]);

   useEffect(()=>{
      async function getNews(){
         let news = await Axios.get("https://bing-news-search1.p.rapidapi.com/news?market=en-IN&category=business",{
            "headers" : {
               'x-rapidapi-key':'9bb796ccbcmsh8b394709dfdff58p18f395jsne607230d625c'
            }
         })
         setNews(news.data.value)
      }
      getNews();
   },[])

   return(
      <div className="headlinesContainer">
         {news.map(article=><News key={article.name} info={article}/>)}
      </div>
   )
}