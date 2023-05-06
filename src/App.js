import './App.css';
//otra forma de importar y poder usar imagenes
import Boton from './componentes/boton.js';
import Contador from './componentes/contador.js';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import { useState } from "react"


function App() {
const [numClicks, setLaura] = useState(0) //usestate= 0, es el n° inicial del numClicks
  const manejarClicks = () => {
    setLaura(numClicks + 1);
  }

  const reiniciarContador = () =>{
    setLaura(0);
  }
  return (
    <div className="App">
      <div className="freecodecamp-logo-comtenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de FreeCodeCamp"
        />
      </div>
      <div className="contenedor-principal-contador">
        <Contador numClicks={numClicks}
        />
        <Boton
          texto="Clickea para contar"
          esBotondeClick={true}
          manejarClicks={manejarClicks} />
        <Boton
          texto="Reiniciar el contador"
          esBotondeClick={false}
          manejarClicks={reiniciarContador } />
      </div>
    </div>
  );
}

export default App;
