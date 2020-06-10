import React, {} from 'react';

const Checkbox = ({question}) => {
  const listOptions = question.options.map((item, i) => {
  return <li key={i}>{item}<input type="checkbox"/></li>
  });

  return (
    <div>
      {question.title}
      {listOptions}
      <button>ad</button>
    </div>
  )
};

export default Checkbox
