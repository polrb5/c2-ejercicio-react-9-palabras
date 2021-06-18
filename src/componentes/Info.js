import PropTypes from "prop-types";

export const Info = (props) => {
  const { copiaListadoPalabras } = props;
  const nLenguajesProgramacion = copiaListadoPalabras.filter(
    (palabra) => palabra.lenguajeProgramacion
  ).length;
  const palabraLenguaje = copiaListadoPalabras
    .filter((palabra) => palabra.lenguajeProgramacion)
    .map((palabra) => <li key={palabra}>{palabra.palabra}</li>);

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
            {copiaListadoPalabras.length === 0
              ? "0"
              : (
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
          <ul>{palabraLenguaje}</ul>
        </li>
      </ul>
    </section>
  );
};

Info.propTypes = {
  copiaListadoPalabras: PropTypes.array.isRequired,
};
