const deleteOption = (question, i, index, setQuestion) => {
    const arr = [...question];
    arr.splice(i, 1);
    setQuestion(prev => {
      prev[index].options = arr;
      return [...prev]
    });
}

export default deleteOption
