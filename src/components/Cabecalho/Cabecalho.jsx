import { Link, useNavigate } from "react-router-dom";
import "./Cabecalho.scss";

function Cabecalho(props) {
  const navigation = useNavigate();

  console.log(useNavigate().prototype);

  return (
    <>
      <header className="cabecalho">
        <ul>
          <li>
           <Link to='/'>Home</Link>
          </li>
          <li>
           <Link to='/produtos'>Produtos</Link>
          </li>
          <li>
           <Link to='/cadastrar'>Cadastrar produtos</Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Cabecalho