import PropTypes from "prop-types";
import { useState } from "react";

export const CrearPalabras = (props) => {
  const { listaPalabras, setListaPalabras, idMasAlta } = props;
  const [nuevaPalabra, setNuevaPalabra] = useState("");
  const [esLenguaje, setEslenguaje] = useState(false);
  const [numVeces, setNumVeces] = useState(0);
  const crearPalabra = (e) => {
    e.preventDefault();
    setListaPalabras(
      [
        ...listaPalabras,
        {
          id: idMasAlta + 1,
          palabra: nuevaPalabra,
          numeroCaracteres: nuevaPalabra.length,
          lenguajeProgramacion: esLenguaje,
          maximoVeces: numVeces,
        },
      ],
      e.target.value
    );
  };
  return (
    <section className="crear-palabras">
      <form className="form-palabras" onSubmit={crearPalabra}>
        <div className="form-grupo">
          <input
            type="text"
            placeholder="Nueva palabra"
            onChange={(e) => setNuevaPalabra(e.target.value)}
            value={nuevaPalabra}
            required
          />
        </div>
        <div className="form-grupo">
          <select onChange={(e) => setNumVeces(e.target.value)} required>
            <option value="">Máximo de veces</option>
            <option value="0">Sin límite</option>
            <option value="1">1 vez</option>
            <option value="2">2 veces</option>
            <option value="3">3 veces</option>
          </select>
        </div>
        <div className="form-grupo">
          <label> Es un lenguaje de programación</label>
          <input
            type="checkbox"
            value={esLenguaje}
            onChange={(e) => setEslenguaje(e.target.checked)}
          />
        </div>
        <div className="form-grupo">
          <button type="submit" disabled={!nuevaPalabra}>
            Crear
          </button>
        </div>
      </form>
    </section>
  );
};

CrearPalabras.propTypes = {
  listaPalabras: PropTypes.array.isRequired,
  setListaPalabras: PropTypes.func.isRequired,
  idMasAlta: PropTypes.number.isRequired,
};
