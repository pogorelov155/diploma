const setItem = (array) => {
  const date = JSON.stringify(array);
  localStorage.setItem('questionList', date);
};

export default setItem
