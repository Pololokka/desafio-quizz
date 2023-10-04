import React, { createContext, useContext, useState } from "react";

const QuizzContext = createContext();

const QuizzProvider = ({ children }) => {
  const [amt, setAmt] = useState();
  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState([]);
  const [previousAnswers, setPreviousAnswers] = useState([]);
  const [cont, setCont] = useState(0);

  const saveQuizzAnswer = () => {
    console.log("teste");
  };

  return (
    <QuizzContext.Provider
      value={{
        amt,
        setAmt,
        question,
        setQuestion,
        answers,
        setAnswers,
        cont,
        setCont,
        previousAnswers,
        setPreviousAnswers,
      }}
    >
      {children}
    </QuizzContext.Provider>
  );
};

const QuizzConsumer = () => useContext(QuizzContext);
export { QuizzContext, QuizzProvider, QuizzConsumer };
