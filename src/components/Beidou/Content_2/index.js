import React from "react";
import './Content_2.scss'

const ContentItem2= (props) => {
  const {title,content,src} = props;
  
  
  return(
    <div className="content_2">
      <img src={require(`../../../assets/beidouprogram/${src}`)} alt={title} className="pic" ></img>
      <div className="title">
        {title}
      </div>
      <div className="paragraph" dangerouslySetInnerHTML={{__html:content}}></div>
    </div>
  )
}

export default ContentItem2;