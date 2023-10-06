import "./Styles.css";

import { QuizzConsumer } from "../../Contexts/Quizz";
import { useEffect } from "react";
import { getQuestion } from "../../Func/Questions";
import { Link } from "react-router-dom";

function Home() {
  const {
    amt,
    setAmt,
    setQuestion,
    setAnswers,
    setCont,
    previousAnswers,
    handleDeleteHistory,
  } = QuizzConsumer();

  useEffect(() => {
    getQuestion(amt, setQuestion);
    setCont(0);
    setAnswers([]);
    console.log(previousAnswers);
  }, [amt]);

  return (
    <>
      <main>
        <h1 className="titulo titulo-hover">Bem Vindo ao Quizz!</h1>
        <h2 className="subtitulo subtitulo-hover">
          Insira abaixo quantas perguntas deseja responder, para que possamos
          começar!
        </h2>
        <section className="form__container">
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
        </section>

        <section>
          <input
            type="button"
            value="Apagar Histórico"
            className="texto btn__geral"
            onClick={handleDeleteHistory}
          />

          <div className="tries__grid">
            {previousAnswers.map((element, index) => {
              return (
                <div className="tries__card">
                  <p className="subtitulo subtitulo-hover">Tentativa {index}</p>
                  <p className="texto">Perguntas: {element.total}</p>
                  <p className="texto">Acertos: {element.correct}</p>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
