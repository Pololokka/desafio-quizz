import "./Style.css";

import { useEffect, useState } from "react";
import { QuizzConsumer } from "../../Contexts/Quizz";
import { Link } from "react-router-dom";

import { randomizeAnswers } from "../../Func/Questions";
import { saveAnswers } from "../../Func/Questions";

function Quizz() {
  const { question, amt, answers, setAnswers, cont, setCont } = QuizzConsumer();

  const [chosen, setChosen] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const [questionNumber, setQuestionNumber] = useState(0);
  const [possibleAnswers, setPossibleAnswers] = useState([]);

  useEffect(() => {
    randomizeAnswers(question, questionNumber, setPossibleAnswers);
  }, [questionNumber]);

  const handleShowAnswer = () => {
    if (chosen && !showAnswer) {
      setShowAnswer(true);
    }
  };

  const compareAnswer = () => {
    if (answers[questionNumber] == question[questionNumber].correct_answer) {
      setCont(cont + 1);
    }
  };

  const handleNext = () => {
    if (chosen) {
      if (questionNumber + 1 < amt) {
        setQuestionNumber(questionNumber + 1);
        setChosen(false);
        setShowAnswer(false);
        compareAnswer();
      }
    }
  };

  return (
    <>
      <main>
        <h1 className="titulo titulo-hover">QUIZZ</h1>
        <h2 className="subtitulo subtitulo-hover">
          Pergunta {questionNumber + 1}/{parseInt(amt)}
        </h2>
        <section className="card__quizz">
          <p className="subtitulo texto-hover">Categoria:</p>
          <p className="texto">{question[questionNumber].category}</p>
          <p className="subtitulo texto-hover">Pergunta:</p>
          <p className="texto">{question[questionNumber].question}</p>
          <p className="subtitulo texto-hover">Respostas:</p>
          <ul
            className="form__container"
            onChange={(event) =>
              saveAnswers(event, answers, setAnswers, showAnswer, setChosen)
            }
          >
            {possibleAnswers.map((element, index) => {
              return (
                <li key={index} className="btn__geral2 texto">
                  <input
                    type="radio"
                    name={questionNumber}
                    id={element}
                    value={element}
                  />
                  <label htmlFor={element} className="texto">
                    {element}
                  </label>
                </li>
              );
            })}
          </ul>
          <input
            type="button"
            value="Mostrar resposta!"
            className={chosen ? "btn__geral texto" : "btn__inactive texto"}
            disabled={chosen ? false : true}
            onClick={handleShowAnswer}
          />

          <p className="texto texto-hover">
            Sua resposta é: {answers[questionNumber]}
          </p>
          {showAnswer && (
            <p className="texto texto-hover">
              Resposta correta: {question[questionNumber].correct_answer}
            </p>
          )}

          {questionNumber + 1 < amt ? (
            <input
              type="button"
              value="Próxima Pergunta!"
              className={chosen ? "btn__geral texto" : "btn__inactive texto"}
              onClick={handleNext}
            />
          ) : (
            <Link
              className={chosen ? "btn__geral texto" : "btn__inactive texto"}
              to="/resultados"
              onClick={compareAnswer}
            >
              Finalizar
            </Link>
          )}
        </section>
      </main>
    </>
  );
}

export default Quizz;
