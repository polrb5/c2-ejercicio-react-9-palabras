import PropTypes from "prop-types";

export const ListaPalabras = (props) => {
  const {
    palabra,
    setCopiaListadoPalabras,
    copiaListadoPalabras,
    idMasAltaResultado,
    listaPalabras,
    setListaPalabras,
  } = props;
  const printPalabra = () => {
    palabra.maximoVeces = parseInt(palabra.maximoVeces) - 1;
    if (palabra.maximoVeces === 0) {
      setListaPalabras(
        listaPalabras.filter((element) => element.id !== palabra.id)
      );
    }

    setCopiaListadoPalabras([
      ...copiaListadoPalabras,
      { ...palabra, id: idMasAltaResultado + 1 },
    ]);
  };
  return (
    <li
      data-lenguaje={palabra.lenguajeProgramacion ? "si" : ""}
      onClick={printPalabra}
    >
      {palabra.palabra}
    </li>
  );
};

ListaPalabras.propTypes = {
  palabra: PropTypes.shape({
    palabra: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    numeroCaracteres: PropTypes.number.isRequired,
    lenguajeProgramacion: PropTypes.bool.isRequired,
  }).isRequired,
  copiaListadoPalabras: PropTypes.array.isRequired,
  setCopiaListadoPalabras: PropTypes.func.isRequired,
  idMasAltaResultado: PropTypes.number.isRequired,
  listaPalabras: PropTypes.array.isRequired,
  setListaPalabras: PropTypes.func.isRequired,
};
