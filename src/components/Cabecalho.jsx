import { createElement } from "react";

function Cabecalho(props) {
  return (
    <>
      <header>
        <h1>Vite + React / coded by Technobike</h1>
        <ul>
          {props.children.map((item, indice) => {
            createElement("li", { key: indice }, item);
            return item;
          })}
        </ul>
      </header>
    </>
  );
}

export default Cabecalho