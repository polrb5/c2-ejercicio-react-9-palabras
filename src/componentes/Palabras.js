import { ListaPalabras } from "./ListaPalabras";
import { Resultado } from "./Resultado";

export const Palabras = (props) => {
  const { listaPalabras, setListaPalabras } = props;
  const onClickCopia = () => {};
  return (
    <section className="palabras">
      <ul className="lista-palabras">
        {listaPalabras.map((palabra) => (
          <ListaPalabras
            palabra={palabra}
            key={palabra.id}
            listaPalabras={listaPalabras}
            setListaPalabras={setListaPalabras}
          />
        ))}
      </ul>
      <Resultado />
    </section>
  );
};
