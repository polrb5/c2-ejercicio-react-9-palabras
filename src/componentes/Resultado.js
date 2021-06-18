import PropTypes from "prop-types";

export const Resultado = (props) => {
  const { palabra, setCopiaListadoPalabras, copiaListadoPalabras } = props;

  const clearPalabara = () =>
    setCopiaListadoPalabras(
      copiaListadoPalabras.filter((element) => element.id !== palabra.id)
    );
  return (
    <li onClick={clearPalabara}>
      {copiaListadoPalabras.indexOf(palabra) === 0
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
    maximoVeces: PropTypes.number.isRequired,
  }).isRequired,
  copiaListadoPalabras: PropTypes.array.isRequired,
  setCopiaListadoPalabras: PropTypes.func.isRequired,
};
