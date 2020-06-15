const addTextQuestion = (newText, text, setArr, index, e) => {
    e.preventDefault();
    const newArr = [text];
    newArr.push(newText);
    setArr(prev => {
      prev[index].text = newText;
      return [...prev]
    });
  };

export default addTextQuestion
