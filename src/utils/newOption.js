const newOption = (question, index, setQuestion, newOption, e) => {
  const arr = [...question.options];
  arr.push(newOption);
  setQuestion(prev => {
    prev[index].options = arr;
    return [...prev]
  });
  e.preventDefault();
};

export default newOption
