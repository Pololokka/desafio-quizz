import React, { createContext, useContext, useState } from "react";

const QuizzContext = createContext();

const QuizzProvider = ({ children }) => {
  const [amt, setAmt] = useState();
  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState([]);
  const [previousAnswers, setPreviousAnswers] = useState(
    JSON.parse(localStorage.getItem("previousAnswers")) || []
  );
  const [cont, setCont] = useState(0);

  const saveQuizzAnswer = () => {
    const previousAnswersJSON = JSON.stringify(previousAnswers);
    localStorage.setItem("previousAnswers", previousAnswersJSON);
  };

  const handleDeleteHistory = () => {
    localStorage.clear();
    setPreviousAnswers([]);
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
        saveQuizzAnswer,
        handleDeleteHistory,
      }}
    >
      {children}
    </QuizzContext.Provider>
  );
};

const QuizzConsumer = () => useContext(QuizzContext);
export { QuizzContext, QuizzProvider, QuizzConsumer };
