import PropTypes from "prop-types";
import { ListaPalabras } from "./ListaPalabras";
import { Resultado } from "./Resultado";

export const Palabras = (props) => {
  const {
    listaPalabras,
    setListaPalabras,
    copiaListadoPalabras,
    setCopiaListadoPalabras,
    idMasAlta,
    idMasAltaResultado,
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
            setCopiaListadoPalabras={setCopiaListadoPalabras}
            copiaListadoPalabras={copiaListadoPalabras}
            idMasAltaResultado={idMasAltaResultado}
          />
        ))}
      </ul>
      <ul className="resultado">
        {copiaListadoPalabras.map((palabra) => (
          <Resultado
            palabra={palabra}
            key={palabra.id}
            setcopiaListadoPalabras={setCopiaListadoPalabras}
            copiaListadoPalabras={copiaListadoPalabras}
          />
        ))}
      </ul>
    </section>
  );
};

Palabras.propTypes = {
  listaPalabras: PropTypes.array.isRequired,
  copiaListadoPalabras: PropTypes.array.isRequired,
  setListaPalabras: PropTypes.func.isRequired,
  setCopiaListadoPalabras: PropTypes.func.isRequired,
  idMasAlta: PropTypes.number.isRequired,
  idMasAltaResultado: PropTypes.number.isRequired,
};
