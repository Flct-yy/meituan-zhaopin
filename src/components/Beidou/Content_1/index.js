import React from "react";
import './Content_1.scss'

const ContentItem1 = (props) => {
  const {title,content,src} = props;
  
  
  return(
    <div className="content_1">
      <div className="title">
        {title}
      </div>
      <div className="paragraph" dangerouslySetInnerHTML={{__html:content}}></div>
      <img src={require(`../../../assets/beidouprogram/${src}`)} alt={title} className="pic" ></img>
    </div>
  )
}

export default ContentItem1;