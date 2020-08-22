import React from 'react';

export default function News(props){
   let date = new Date(props.info.datePublished)
   return(
      <a className="article" href={props.info.url} target="_blank" rel="noopener noreferrer">
            <div className="name">{props.info.name}</div>
            <div className="thumbnail"><img src={props.info.image.thumbnail.contentUrl} alt={props.info.name}/></div>
            <div className="description">{props.info.description}</div>
            <div className="publishedDate">Published At : {date.toLocaleTimeString()}</div>
      </a>
   )
}