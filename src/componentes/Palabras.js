import { ListaPalabras } from "./ListaPalabras";
import { Resultado } from "./Resultado";

export const Palabras = (props) => {
  const {
    listaPalabras,
    setListaPalabras,
    displayPalabras,
    setDisplayPalabras,
  } = props;
  return (
    <section className="palabras">
      <ul className="lista-palabras">
        {listaPalabras.map((palabra) => (
          <ListaPalabras
            palabra={palabra}
            key={palabra.id}
            listaPalabras={listaPalabras}
            setListaPalabras={setListaPalabras}
            setDisplayPalabras={setDisplayPalabras}
            displayPalabras={displayPalabras}
          />
        ))}
      </ul>
      <ul className="resultado">
        {displayPalabras.map((palabra) => (
          <Resultado palabra={palabra} key={palabra.id} />
        ))}
      </ul>
    </section>
  );
};
