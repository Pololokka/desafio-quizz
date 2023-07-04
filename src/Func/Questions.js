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
