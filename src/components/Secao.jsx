import Rodape from './Rodape'

function Secao(props) {
  return(
    <>
      <section>
        <div>
          <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quam a
              vel dolore! Eveniet nesciunt sit repudiandae voluptas, aspernatur
              reiciendis maiores cum neque assumenda fugit! Laboriosam, vitae veniam!
              Magni, doloribus?
          </p>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, aliquid
              illo sapiente assumenda quae odit, dolor officia provident magni enim
              perferendis molestias beatae. Nulla nisi nihil reprehenderit, aspernatur
              ducimus excepturi?
          </p>
    
          <div>
            <h2>Lista de nomes</h2>
        
            <ul>
              {props.nomesProps.map((nome,indice) => (
                <li key={indice}>{nome}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Secao;