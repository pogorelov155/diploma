import React, {} from 'react';
import GeneralItems from '../GeneralItems';


const Checkbox = ({ question, setArrQuestion, index, setModalView, setIdDeleteItem}) => {
  
  const listOptions = question.options.map((item, i) => {
  return <li key={i}>{item}<input type="checkbox"/></li>
  });

  const newOption = (index) => {
    const arr = [...question.options];
    arr.push("smth");
    
    setArrQuestion(prev => {
      prev[index].options = arr; 
      return [...prev]
    });
  };
  //ToDo
 /*  const delArr = (index) => {
    const arr = [...question.options];
    console.log(arr, 'arr');
    arr.splice(index, 1);
    setArrQuestion(prev => {
      prev[index].options = arr;
      return [...prev]
    });
  }; */

  return (
    <div>
      <ul>{listOptions}</ul>
      <button onClick={() => newOption(index)}>add</button>
      <GeneralItems
      setModalView={setModalView}
      index={index}
      setIdDeleteItem={setIdDeleteItem}/>
    </div>
  )
};

export default Checkbox
