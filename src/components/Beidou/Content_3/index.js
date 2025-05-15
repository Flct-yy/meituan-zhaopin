import React from "react";
import './Content_3.scss'

const ContentItem3 = (props) => {
  const {headline,contentArr} = props;
  
  return(
    <div className="content_3">
      <div className="headline">
        {headline}
      </div>
      {
        contentArr.map((item)=> {return (
            <div className="item">
              <div className="title">
                {item.title}
              </div>
              <div className="paragraph">
                {item.content}
              </div>
            </div>
          )}
        )
      }
    </div>
  )
}

export default ContentItem3;