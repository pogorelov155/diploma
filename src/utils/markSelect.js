const markSelect = (arr, index, setArr) =>{
  arr.splice(0, 1, index);
  setArr([...arr]);
}

export default markSelect
