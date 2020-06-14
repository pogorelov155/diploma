const newOption = (question, index, setQuestion) => {
  const arr = [...question.options];
  arr.push("smth");
  setQuestion(prev => {
    prev[index].options = arr;
    return [...prev]
  });
};

export default newOption
