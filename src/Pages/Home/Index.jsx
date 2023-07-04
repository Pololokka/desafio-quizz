import { QuizzConsumer } from "../../Contexts/Quizz";

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
        <input
          type="number"
          name="amt"
          className="input__geral texto"
          max={50}
          onChange={(event) => setAmt(event.target.value)}
        />
      </main>
    </>
  );
}

export default Home;
