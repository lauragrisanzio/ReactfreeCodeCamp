import React from "react";
import "../stylesheets/boton.css"
//usando la palabra props
// function Boton(props) {
//   return (
    
//     <button
//     className="">
//       {props.texto}
//     </button>
//   )
// }
// como destructuring:
function Boton({ texto, esBotonDeClick, manejarClicks }) {
  return (
    //asignar una clase condicionada de acuerdo al boton que se presiona si es contador o reiniciar
    <button
      className={esBotonDeClick ? "boton-click" : "boton-reiniciar"}
      //como un eventListener -manejarClicks es una funcion que va ocurrir cuando se hace click
    onClick={manejarClicks}>
      {texto}
    </button>
    
  );
}

export default Boton;