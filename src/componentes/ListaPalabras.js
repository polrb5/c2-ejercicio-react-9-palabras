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
