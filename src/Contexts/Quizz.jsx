import React, { createContext, useContext, useState } from "react";

const QuizzContext = createContext();

const QuizzProvider = ({ children }) => {
  const [amt, setAmt] = useState();
  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState([]);
  const [cont, setCont] = useState(0);

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
      }}
    >
      {children}
    </QuizzContext.Provider>
  );
};

const QuizzConsumer = () => useContext(QuizzContext);
export { QuizzContext, QuizzProvider, QuizzConsumer };
