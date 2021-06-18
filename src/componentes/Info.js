import PropTypes from "prop-types";

export const Info = (props) => {
  const { copiaListadoPalabras } = props;
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
          Contiene 2 lenguaje/s de programación
          <ul>
            <li>JavaScript</li>
            <li>Java</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

Info.propTypes = {
  copiaListadoPalabras: PropTypes.array.isRequired,
};
