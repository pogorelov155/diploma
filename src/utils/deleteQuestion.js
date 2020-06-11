
const deleteQuestion = (array, id, setArray) => {
  array.splice(id, 1);
  setArray([...array]);
};

export default deleteQuestion
