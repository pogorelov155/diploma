import React, {} from 'react';
import GeneralItems from '../GeneralItems';

const Checkbox = ({question, setArrQuestion, index}) => {
  
  const listOptions = question.options.map((item, i) => {
  return <li key={i}>{item}<input type="checkbox"/></li>
  });

  const newArr = (index) => {
    const arr = [...question.options];
    console.log(arr, 'arr');
    arr.push("smth");
    setArrQuestion(prev => {
      prev[index].options = arr; 
      return [...prev]
    });
  };
 
  return (
    <div>
      {question.title}
      <ul>{listOptions}</ul>
      <button onClick={() => newArr(index)}>add</button>
      <GeneralItems/>
    </div>
  )
};

export default Checkbox
