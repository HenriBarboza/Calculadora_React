import React from "react";
import './Display.css';

const Display = (props) => {
  // Limitar o número de dígitos exibidos a 23
  const displayValue = props.value.toString().slice(0, 23);

  // Determinar a classe de tamanho da fonte com base na quantidade de dígitos
  let fontSizeClass = '';
  if (props.value.toString().length >= 11) {
    fontSizeClass = 'small-font';
  }

  return (
    <div className={`display ${fontSizeClass}`}>
      {displayValue}
    </div>
  );
};

export default Display;