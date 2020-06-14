const addQuestion = (arr, setArr, newArr ) => {
  arr.push(newArr);
  setArr ([...arr]) 
};

export default addQuestion
