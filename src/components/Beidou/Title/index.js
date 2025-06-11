import React from "react";
import './Tile.scss'// 引入CSS文件
import Star from '@/assets/beidouprogram/image-xx.svg'

const Tile = (props) => {
  const starArr = [];
  for (let i = 0; i < props.id; i++) {
    starArr.push(<img key={i} src={Star} alt=""></img>);
  }


  return (
    <div className="topic">
      <div className="number">
        {starArr}
        / {props.id<10?'0'+props.id:props.id}
      </div>
      <div className="title">
        {props.content}
      </div>
    </div>
  );
};

export default Tile;