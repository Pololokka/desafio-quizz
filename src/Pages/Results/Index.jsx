import { useState, useEffect } from "react";
import { QuizzConsumer } from "../../Contexts/Quizz";

function Results() {
  const { question, answers, cont } = QuizzConsumer();

  // useEffect(() => {
  //   contCorrect();
  // }, []);

  // const contCorrect = () => {
  //   // question.forEach((element, index) => {
  //   //   if (answers[index] == element.correct_answer) {
  //   //     setCont(cont + 1);
  //   //     console.log("teste do if");
  //   //   }
  //   //   console.log("teste fora do if");
  //   // });

  //   question.diff = function (answers) {
  //     var ret = [];
  //     for (var i in this) {
  //       if (answers.indexOf(this[i]) > -1) {
  //         setCont(cont + 1);
  //       }
  //     }
  //   };
  // };

  return (
    <>
      <p className="titulo titulo-hover">
        Parabéns, você concluiu mais um quizz!
      </p>
      <p className="subtitulo subtitulo-hover">Veja abaixo como você se saiu</p>
      <p className="texto">Acertos: {cont}</p>

      {question.map((element, index) => {
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
