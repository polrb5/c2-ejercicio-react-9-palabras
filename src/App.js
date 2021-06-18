import { useState } from "react";
import { CrearPalabras } from "./componentes/CrearPalabras";
import { Info } from "./componentes/Info";
import { Palabras } from "./componentes/Palabras";

function App() {
  const [listaPalabras, setListaPalabras] = useState([
    {
      id: 1,
      palabra: "me",
      numeroCaracteres: 2,
      lenguajeProgramacion: false,
      maximoVeces: "sin límite",
    },
    {
      id: 2,
      palabra: "JavaScript",
      numeroCaracteres: 10,
      lenguajeProgramacion: false,
      maximoVeces: "sin límite",
    },
    {
      id: 3,
      palabra: "el",
      numeroCaracteres: 2,
      lenguajeProgramacion: false,
      maximoVeces: "sin límite",
    },
  ]);
  const [displayPalabras, setDisplayPalabras] = useState([]);
  const idMasAlta = listaPalabras
    .map((palabra) => palabra.id)
    .reduce((acumulador, id) => (id > acumulador ? id : acumulador), 0);
  return (
    <>
      <Palabras
        listaPalabras={listaPalabras}
        setListaPalabras={setListaPalabras}
        displayPalabras={displayPalabras}
        setDisplayPalabras={setDisplayPalabras}
      />
      <CrearPalabras
        listaPalabras={listaPalabras}
        setListaPalabras={setListaPalabras}
        idMasAlta={idMasAlta}
      />
      <Info />
    </>
  );
}

export default App;
