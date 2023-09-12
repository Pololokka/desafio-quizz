import { useEffect, useState } from "react";
import { QuizzConsumer } from "../../Contexts/Quizz";

function Quizz() {
  const [answers, setAnswers] = useState("");
  const { question } = QuizzConsumer();

  return (
    <>
      <main>
        <h1 className="titulo titulo-hover">QUIZZ</h1>
        <h2 className="subtitulo subtitulo-hover">QUIZZ</h2>
        {question?.map((element, index) => {
          return (
            <div key={index}>
              <p className="texto">Categoria: {element.category}</p>
              <p className="texto">Pergunta: {element.question}</p>
            </div>
          );
        })}
      </main>
    </>
  );
}

export default Quizz;
