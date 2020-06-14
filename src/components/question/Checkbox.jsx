import React, {} from 'react';
import GeneralItems from '../GeneralItems';
import { CloseOutlined } from '@ant-design/icons';
import deleteOption from '../../utils/deleteOption';
import newOption from '../../utils/newOption';

const Checkbox = ({ question, setArrQuestion, index, setModalView, setIdDeleteItem}) => {
  
  const listOptions = question.options.map((item, i) => {
    return <li key={i}>{item}<input type="checkbox" />
    <CloseOutlined 
    style={{margin: '0 50px',fontSize: '18px'}}
    onClick={() => deleteOption(question.options, i, index, setArrQuestion)}
    /></li>
  });

  return (
    <div>
      <ul>{listOptions}</ul>
      <button onClick={() => newOption(question, index, setArrQuestion)}>Add new option</button>
      <GeneralItems
      setModalView={setModalView}
      index={index}
      setIdDeleteItem={setIdDeleteItem}/>
    </div>
  )
};

export default Checkbox
