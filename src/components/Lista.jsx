import { Link } from "react-router-dom";
import Cabecalho from "./Cabecalho";

function Lista() {
  return (
    <>
      <Cabecalho>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/produtos">Produtos</Link>
        </li>
      </Cabecalho>
    </>
  );
}

export default Lista