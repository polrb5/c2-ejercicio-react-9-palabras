import PropTypes from "prop-types";

export const ListaPalabras = (props) => {
  const { palabra, setDisplayPalabras, displayPalabras } = props;
  const printPalabra = () => {
    setDisplayPalabras([...displayPalabras, palabra]);
  };
  return <li onClick={printPalabra}>{palabra.palabra}</li>;
};
{
  /* <li data-lenguaje="si">Java</li>; */
}

ListaPalabras.propTypes = {
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
