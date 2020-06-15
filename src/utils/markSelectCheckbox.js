const markSelectCheckbox = (arr, setArr, index, i ) => {
  const select = [...arr];  
  if (select.includes(i, 0)){
    let delOne = arr.indexOf(i);
    select.splice(delOne, 1);
  }else { 
    select.push(i);
  };
  setArr(prev => {
    prev[index].selected = select;
    return [...prev]
  });
  
};

export default markSelectCheckbox
