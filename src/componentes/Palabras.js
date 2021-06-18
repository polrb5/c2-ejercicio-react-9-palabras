import PropTypes from "prop-types";
import { ListaPalabras } from "./ListaPalabras";
import { Resultado } from "./Resultado";

export const Palabras = (props) => {
  const {
    listaPalabras,
    setListaPalabras,
    copiaListadoPalabras,
    setCopiaListadoPalabras,
    idMasAltaResultado,
    getLongitudMedia,
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
            getLongitudMedia={getLongitudMedia}
          />
        ))}
      </ul>
      <ul className="resultado">
        {copiaListadoPalabras.map((palabra) => (
          <Resultado
            palabra={palabra}
            key={palabra.id}
            setCopiaListadoPalabras={setCopiaListadoPalabras}
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
  idMasAltaResultado: PropTypes.number.isRequired,
};
