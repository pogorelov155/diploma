const markSelectRadio = (i, index, arr, setArr) => {
  const select = [...arr];
  select.splice(0, 1);
  select.push(i);
  setArr(prev => {
    prev[index].selected = select;
    return [...prev]
  });

};

export default markSelectRadio
