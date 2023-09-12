import { QuizzConsumer } from "../../Contexts/Quizz";
import { Link } from "react-router-dom";

function Home() {
  const { setAmt } = QuizzConsumer();

  return (
    <>
      <main>
        <h1 className="titulo titulo-hover">Bem Vindo ao Quizz!</h1>
        <h2 className="subtitulo subtitulo-hover">
          Insira abaixo quantas perguntas deseja responder, para que possamos
          começar!
        </h2>
        <div className="form__container">
          <input
            type="number"
            name="amt"
            className="input__geral texto"
            max={50}
            onChange={(event) => setAmt(event.target.value)}
          />

          <Link className="texto btn__geral" to="/quizz">
            Começar!
          </Link>
        </div>
      </main>
    </>
  );
}

export default Home;
