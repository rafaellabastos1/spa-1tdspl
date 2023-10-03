import { Link } from "react-router-dom";
import classes from "./Produtos.module.css";
import { AiFillEdit as Editar } from "react-icons/ai";
import { RiDeleteBin2Fill as Excluir } from "react-icons/ri";
import { useEffect, useState } from "react";
import ModalInserir from "../components/ModalInserir/ModalInserir";

function Produtos() {
  document.title = "Lista de Produtos: ";

  const [listaProdutoExterno, setListaProdutoExterno] = useState([{}]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if(!open) {
    fetch("http://localhost:5000/produtos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setListaProdutoExterno(data))
      .catch((error) => console.log(error));
    }
  }, [open]);


  return (
    <div>
      <h1>Produtos de INFORMÁTICA - FIPAPI</h1>
      <p>Os Melhores Produtos do Mercado</p>

      {open ? <ModalInserir open={open} setOpen={setOpen}/> : ""}

      <Link onClick={()=> setOpen(true)}>Cadastro de Produtos</Link>

      <table className={classes.estilo}>
        <thead className={classes.tableHeaders}>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>DESCRIÇÃO</th>
            <th>PREÇO</th>
            <th>IMAGEM</th>
            <th>EDITAR</th>
          </tr>
        </thead>

        <tbody>
          {listaProdutoExterno.map((produto, indice) => (
            <tr key={indice} className={classes.tableLine}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.desc}</td>
              <td>{produto.preco}</td>
              <td>
                <img src={produto.img} alt={produto.desc} />
              </td>
              <td>
                <Link to={`/editar/produtos/${produto.id}`}>
                  {" "}
                  <Editar />
                </Link>{" "}
                
                |{" "}
                
                <Link to={`/excluir/produtos/${produto.id}`}>
                  {" "}
                  <Excluir />{" "}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot className={classes.tableFooter}>
          <tr>
            <td colSpan={6}>PRODUTOS</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Produtos;