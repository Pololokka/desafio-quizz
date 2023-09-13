import "./Style.css";

import { useEffect, useState } from "react";
import { QuizzConsumer } from "../../Contexts/Quizz";

function Quizz() {
  const [answers, setAnswers] = useState("");
  const { question, amt } = QuizzConsumer();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [possibleAnswers, setPossibleAnswers] = useState([]);

  console.log(question);

  useEffect(() => {
    randomizeAnswers(question, questionNumber);
  }, [questionNumber]);

  const randomizeAnswers = (arr, current) => {
    let correctAnswer = arr[current].correct_answer;
    let wrongAnswer = arr[current].incorrect_answers;
    let optionsList = wrongAnswer;

    optionsList.splice(
      Math.floor(Math.random() * (wrongAnswer.length + 1)),
      0,
      correctAnswer
    );

    setPossibleAnswers(optionsList);
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
          {possibleAnswers.map((element, index) => {
            return (
              <p key={index} className="texto">
                {element}
              </p>
            );
          })}
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
