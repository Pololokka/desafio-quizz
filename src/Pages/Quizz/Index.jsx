import "./Style.css";

import { useEffect, useState } from "react";
import { QuizzConsumer } from "../../Contexts/Quizz";

import { randomizeAnswers } from "../../Func/Questions";

function Quizz() {
  const [answers, setAnswers] = useState("");
  const { question, amt } = QuizzConsumer();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [possibleAnswers, setPossibleAnswers] = useState([]);

  useEffect(() => {
    randomizeAnswers(question, questionNumber, setPossibleAnswers);
  }, [questionNumber]);

  const handleChangeRadio = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
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
            onChange={(event) => handleChangeRadio(event)}
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
            value="Próxima Pergunta!"
            className="btn__geral texto"
            onClick={() => setQuestionNumber(questionNumber + 1)}
          />
        </section>
      </main>
    </>
  );
}

export default Quizz;
