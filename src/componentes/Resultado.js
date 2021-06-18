import PropTypes from "prop-types";

export const Resultado = (props) => {
  const { palabra, setCopiaListadoPalabras, copiaListadoPalabras } = props;
  const palabraMayusculua = palabra.id === 1;
  const clearPalabara = () =>
    setCopiaListadoPalabras(
      copiaListadoPalabras.filter((element) => element.id !== palabra.id)
    );
  return (
    <li onClick={clearPalabara}>
      {palabraMayusculua
        ? palabra.palabra[0].toUpperCase() + palabra.palabra.slice(1)
        : palabra.palabra}
    </li>
  );
};

Resultado.propTypes = {
  palabra: PropTypes.shape({
    palabra: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    numeroCaracteres: PropTypes.number.isRequired,
    lenguajeProgramacion: PropTypes.bool.isRequired,
    maximoVeces: PropTypes.string.isRequired,
  }).isRequired,
  copiaListadoPalabras: PropTypes.array.isRequired,
  setCopiaListadoPalabras: PropTypes.func.isRequired,
};
