import React from 'react';
import './Button.scss'; // 引入CSS文件

const Button = (props) => {
  
  return (
    <a href="/" className="button">
      {props.data} →
    </a>
  );
};

export default Button;