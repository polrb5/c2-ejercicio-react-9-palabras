import PropTypes from "prop-types";

export const Info = (props) => {
  const { copiaListadoPalabras } = props;
  const nLenguajesProgramacion = copiaListadoPalabras.filter(
    (palabra) => palabra.lenguajeProgramacion
  ).length;
  return (
    <section className="info">
      <ul>
        <li>
          Nº de palabras <span>{copiaListadoPalabras.length}</span>
        </li>
        <li>
          Nº de caracteres{" "}
          <span>
            {copiaListadoPalabras.reduce(
              (acumulador, { numeroCaracteres }) =>
                acumulador + numeroCaracteres,
              0
            )}
          </span>
        </li>
        <li>
          Longitud media{" "}
          <span>
            {(
              copiaListadoPalabras.reduce(
                (acumulador, { numeroCaracteres }) =>
                  acumulador + numeroCaracteres,
                0
              ) / copiaListadoPalabras.length
            ).toFixed(2)}
          </span>
        </li>
        <li>
          Contiene <span>{nLenguajesProgramacion}</span> lenguaje/s de
          programación
          <ul>
            {copiaListadoPalabras
              .filter((palabra) => palabra.lenguajeProgramacion)
              .map((palabra) => (
                <li>{palabra.palabra}</li>
              ))}
          </ul>
        </li>
      </ul>
    </section>
  );
};

Info.propTypes = {
  copiaListadoPalabras: PropTypes.array.isRequired,
};
