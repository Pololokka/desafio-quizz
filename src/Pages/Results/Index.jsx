import { useState } from "react";
import { QuizzConsumer } from "../../Contexts/Quizz";

function Results() {
  const [cont, setCont] = useState(0);

  const { question, answers } = QuizzConsumer();

  console.log(question);

  return (
    <>
      <p className="titulo titulo-hover">
        Parabéns, você concluiu mais um quizz!
      </p>
      <p className="subtitulo subtitulo-hover">Veja abaixo como você se saiu</p>

      {question.map((element, index) => {
        console.log(element);
        return (
          <div>
            <p className="subtitulo texto-hover">Questão {index + 1}</p>
            <p className="texto">Resposta Correta: {element.correct_answer}</p>
            <p className="texto">Sua Resposta: {answers[index]}</p>
          </div>
        );
      })}
    </>
  );
}

export default Results;
