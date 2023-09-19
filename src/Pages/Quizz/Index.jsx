import "./Style.css";

import { useEffect, useState } from "react";
import { QuizzConsumer } from "../../Contexts/Quizz";

import { randomizeAnswers } from "../../Func/Questions";
import { saveAnswers } from "../../Func/Questions";

function Quizz() {
  const [answers, setAnswers] = useState([]);
  const [answered, setAnswered] = useState(false);

  const { question, amt } = QuizzConsumer();

  const [questionNumber, setQuestionNumber] = useState(0);
  const [possibleAnswers, setPossibleAnswers] = useState([]);

  useEffect(() => {
    randomizeAnswers(question, questionNumber, setPossibleAnswers);
  }, [questionNumber]);

  const handleShowAnswer = () => {
    console.log(question[questionNumber].correct_answer);
    console.log(answers);
  };

  const handleNext = () => {
    if (answered) {
      if (questionNumber + 1 < amt) {
        setQuestionNumber(questionNumber + 1);
        setAnswered(false);
      } else {
        console.log("acabou as perguntas");
      }
    } else {
      console.log("responde essa porra");
    }
  };

  console.log(answered);

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
              saveAnswers(event, answers, setAnswers, answered, setAnswered)
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
            className={answered ? "btn__geral texto" : "btn__inactive texto"}
            disabled={answered ? false : true}
            onClick={handleShowAnswer}
          />

          <input
            type="button"
            value="Próxima Pergunta!"
            className={answered ? "btn__geral texto" : "btn__inactive texto"}
            onClick={handleNext}
          />
        </section>
      </main>
    </>
  );
}

export default Quizz;
