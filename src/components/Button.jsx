import React from "react";
import './Button.css'
import { useEffect } from "react";


const Button = (props) => {
    const handleKeyDown = (event) => {
      if ((event.key === props.label) ||  (event.key === 'Enter' && props.label === '=')) {
        props.click(props.label);
      }
    };
    useEffect(() => {
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [props.label]);
    return (
      <button
        onClick={(e) => props.click(props.label)}
        onKeyDown={handleKeyDown}
        className={`
          button
          ${props.operation ? 'operation' : ''}
          ${props.double ? 'double' : ''}
          ${props.triple ? 'triple' : ''}
        `}
      >
        {props.label}
      </button>
    );
  };
  
  export default Button;