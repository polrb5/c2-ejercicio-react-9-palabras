import PropTypes from "prop-types";

export const Resultado = (props) => {
  const { palabra, setDisplayPalabras, displayPalabras } = props;
  const clearPalabara = () =>
    setDisplayPalabras(
      displayPalabras.filter((element) => element.id !== palabra.id)
    );
  return <li onClick={clearPalabara}>{palabra.palabra}</li>;
};

Resultado.propTypes = {
  palabra: PropTypes.shape({
    palabra: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    numeroCaracteres: PropTypes.number.isRequired,
    lenguajeProgramacion: PropTypes.bool.isRequired,
    maximoVeces: PropTypes.string.isRequired,
  }).isRequired,
  displayPalabras: PropTypes.array.isRequired,
  setDisplayPalabras: PropTypes.func.isRequired,
};
