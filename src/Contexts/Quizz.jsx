import React, { createContext, useContext, useEffect, useState } from "react";
import { getQuestion } from "../Func/Questions";

const QuizzContext = createContext();

const QuizzProvider = ({ children }) => {
  const [amt, setAmt] = useState();
  const [question, setQuestion] = useState();

  useEffect(() => {
    getQuestion(amt, setQuestion);
  }, [amt]);

  return (
    <QuizzContext.Provider
      value={{
        amt,
        setAmt,
        question,
        setQuestion,
      }}
    >
      {children}
    </QuizzContext.Provider>
  );
};

const QuizzConsumer = () => useContext(QuizzContext);
export { QuizzContext, QuizzProvider, QuizzConsumer };
