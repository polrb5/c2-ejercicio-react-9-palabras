import PropTypes from "prop-types";

export const ListaPalabras = (props) => {
  const {
    palabra,
    setCopiaListadoPalabras,
    copiaListadoPalabras,
    idMasAltaResultado,
  } = props;
  const printPalabra = () => {
    setCopiaListadoPalabras([
      ...copiaListadoPalabras,
      { ...palabra, id: idMasAltaResultado + 1 },
    ]);
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
  copiaListadoPalabras: PropTypes.array.isRequired,
  setCopiaListadoPalabras: PropTypes.func.isRequired,
  idMasAltaResultado: PropTypes.number.isRequired,
};
