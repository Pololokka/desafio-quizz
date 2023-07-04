import { useEffect, useState } from "react";
import axios from "axios";

function Quizz() {
  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState("");
  const [amt, setAmt] = useState(2);

  const getQuestion = async () => {
    try {
      const response = await axios.get(
        `https://opentdb.com/api.php?amount=${amt}`
      );

      const data = response.data.results;

      setQuestion(data);
      console.log(question);
      console.log(data);
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  };

  useEffect(() => {
    getQuestion();
    console.log(question);
  }, []);

  return (
    <>
      <main>
        <h1 className="titulo titulo-hover">QUIZZ</h1>
        <h2 className="subtitulo subtitulo-hover">QUIZZ</h2>
        {question?.map((element, index) => {
          return (
            <>
              <p key={index} className="texto">
                Categoria: {element.category}
              </p>
              <p key={index} className="texto">
                Pergunta: {element.question}
              </p>
            </>
          );
        })}
      </main>
    </>
  );
}

export default Quizz;
