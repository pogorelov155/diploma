const changeQuestionType = (index, setArr, value) => {
  setArr(prev => {
    prev[index].type = value;
    return [...prev]
  });
}

export default changeQuestionType
