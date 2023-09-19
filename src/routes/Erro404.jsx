import { Link } from "react-router-dom"

function Erro404() {
  return (
    <div>
        <h1>Essa página não existe</h1>
        <p>Retorne para o início <span> <Link to="/">INÍCIO</Link> </span></p>
    </div>
  )
}

export default Erro404