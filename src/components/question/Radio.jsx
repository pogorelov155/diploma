import React, { } from 'react';

const Radio = ({question}) => {
  const listRadio = question.options.map((options, i) => {
  return <li key={i}>{options} <input type="radio"/> </li>
  });
  
  return (  
    <div>
      {question.title}
      {listRadio}
    </div>
  )
};

export default Radio
