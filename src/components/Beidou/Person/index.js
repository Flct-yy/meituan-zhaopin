import React from "react";
import './Person.scss'
const Person = (props) =>{
  const {name,experience,pic} = props;
  
  return (
    <div className="person-item">
      <div className="pic">
        <img src={require(`../../../assets/beidouprogram/${pic}.png`)} alt=''/>
      </div>
      <div className="content">
        <div className="content">{name}</div>
        <ul className="experience">
          {experience.map((item)=>
            <li className="experience-li">
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