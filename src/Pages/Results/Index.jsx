import "./Styles.css";

import { QuizzConsumer } from "../../Contexts/Quizz";
import { useEffect } from "react";
import { setQuizzAnswer } from "../../Func/Questions";

function Results() {
  const {
    question,
    answers,
    cont,
    previousAnswers,
    setPreviousAnswers,
    saveQuizzAnswer,
  } = QuizzConsumer();

  useEffect(() => {
    setQuizzAnswer(question, cont, previousAnswers, setPreviousAnswers);
    console.log(previousAnswers);
    saveQuizzAnswer();
  }, []);

  return (
    <>
      <p className="titulo titulo-hover">
        Parabéns, você concluiu mais um quizz!
      </p>
      <p className="subtitulo subtitulo-hover">Veja abaixo como você se saiu</p>
      <p className="texto">Acertos: {cont}</p>

      <section className="results__grid">
        {question.map((element, index) => {
          return (
            <div className="results__card">
              <p className="subtitulo texto-hover">Questão {index + 1}</p>
              <p className="texto">
                Resposta Correta: {element.correct_answer}
              </p>
              <p className="texto">Sua Resposta: {answers[index]}</p>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Results;
