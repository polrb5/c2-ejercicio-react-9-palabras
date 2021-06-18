import { useState } from "react";
import { CrearPalabras } from "./componentes/CrearPalabras";
import { Info } from "./componentes/Info";
import { Palabras } from "./componentes/Palabras";

function App() {
  const [listaPalabras, setListaPalabras] = useState([
    "me",
    "Javascript",
    "el",
    "la",
    "gusta",
    "odio",
    "no",
    "muy",
    "y",
    "Java",
    "mucho",
    "de",
    "poco",
    "programador",
    "amigo",
    "programadora",
    "amiga",
    "soy",
    "también",
    "pero",
    "gustan",
    "gatos",
    "los",
    "perros",
  ]);
  return (
    <>
      <Palabras
        listaPalabras={listaPalabras}
        setListaPalabras={setListaPalabras}
      />
      <CrearPalabras />
      <Info />
    </>
  );
}

export default App;
