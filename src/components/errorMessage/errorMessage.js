import React from "react";
import './errorMessage.css';
import img from './warning.png';

const ErrorMessage = () => {
  return (
    <>
      <img src={img} alt='error'></img>
      <span>Something goes wrong</span>
    </>
  )
}

export default ErrorMessage;