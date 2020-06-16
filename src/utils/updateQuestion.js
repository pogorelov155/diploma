const updateQuestion = (arr, i, question) => {
  const firstPart = arr.slice(0, i);
  const newQuestion = firstPart.concat(question);
  const secondPart = arr.slice(i + 1, arr.length);
  const fullArr = newQuestion.concat(secondPart);
  return fullArr; 
};

export default updateQuestion
