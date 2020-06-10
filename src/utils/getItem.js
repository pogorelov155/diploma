const getItem = () => {
  const storage = localStorage.getItem('questionList');
  const date = JSON.parse(storage);
  return date;
};

export default getItem
