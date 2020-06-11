import React, { } from 'react';
import GeneralItems from '../GeneralItems';


const Radio = ({ index, question, setModalView, setIdDeleteItem}) => {
  const listRadio = question.options.map((options, i) => {
  return <li key={i}>{options} <input type="radio"/> </li>
  });

  return (  
    <div>
      <ul>{listRadio}</ul>
      <GeneralItems 
      index={index}
      setIdDeleteItem={setIdDeleteItem}
      setModalView={setModalView}/>
    </div>
  )
};

export default Radio
