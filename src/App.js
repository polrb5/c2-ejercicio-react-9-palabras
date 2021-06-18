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
  const [copiaListadoPalabras, setCopiaListadoPalabras] = useState([]);
  const idMasAlta = listaPalabras
    .map((palabra) => palabra.id)
    .reduce((acumulador, id) => (id > acumulador ? id : acumulador), 0);
  const idMasAltaResultado = copiaListadoPalabras
    .map((palabra) => palabra.id)
    .reduce((acumulador, id) => (id > acumulador ? id : acumulador), 0);
  return (
    <>
      <Palabras
        listaPalabras={listaPalabras}
        setListaPalabras={setListaPalabras}
        copiaListadoPalabras={copiaListadoPalabras}
        setCopiaListadoPalabras={setCopiaListadoPalabras}
        idMasAlta={idMasAlta}
        idMasAltaResultado={idMasAltaResultado}
      />
      <CrearPalabras
        listaPalabras={listaPalabras}
        setListaPalabras={setListaPalabras}
        idMasAlta={idMasAlta}
      />
      <Info copiaListadoPalabras={copiaListadoPalabras} />
    </>
  );
}

export default App;
