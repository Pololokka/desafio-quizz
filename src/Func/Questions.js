import axios from "axios";

export const getQuestion = async (amt, setState) => {
  try {
    const response = await axios.get(
      `https://opentdb.com/api.php?amount=${amt}`
    );

    const data = response.data.results;

    setState(data);
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
};

export const randomizeAnswers = (arr, current, setState) => {
  let correctAnswer = arr[current].correct_answer;
  let wrongAnswer = arr[current].incorrect_answers;
  let optionsList = wrongAnswer;

  optionsList.splice(
    Math.floor(Math.random() * (wrongAnswer.length + 1)),
    0,
    correctAnswer
  );

  setState(optionsList);
};
