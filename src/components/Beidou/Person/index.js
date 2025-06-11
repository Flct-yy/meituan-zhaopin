import React,{useEffect, useRef, useState} from "react";
import './Person.scss'
import PictureZoom from "@/utils/PictureZoom";
const Person = (props) =>{
  const {name,experience,pic,oldW} = props;

  const [zoom,setZoom] = useState(1);
  const imgRef = useRef(null);
  useEffect(()=>{
    const handleResize = () => {
      if (imgRef.current) {
        setZoom(PictureZoom(imgRef.current.width, oldW));
      }
    };
    window.addEventListener('resize',handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    
  },[oldW])

    const handleOnLoad = () => {
      if (imgRef.current) {
        setZoom(PictureZoom(imgRef.current.width, oldW));
      }
    };

  return (
    <div className="person-item">
      <div className="pic">
        <img src={require(`../../../assets/beidouprogram/${pic}.png`)} style={{zoom:zoom}} ref={imgRef} alt='' onLoad={handleOnLoad}/>
      </div>
      <div className="content">
        <div className="content">{name}</div>
        <ul className="experience">
          {experience.map((item,index)=>
            <li key={index} className="experience-li">
              <div className="disc"></div>
              <p>{item}</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}


export default Person;