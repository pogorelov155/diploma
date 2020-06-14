import React, { } from 'react';
import GeneralItems from '../GeneralItems';
import { CloseOutlined } from '@ant-design/icons';
import deleteOption from '../../utils/deleteOption';
import newOption from '../../utils/newOption';

const Radio = ({ index, question, setModalView, setIdDeleteItem, setArrQuestion, selectedQuestion}) => {

  const listRadio = question.options.map((options, i) => {
    return <li key={i}>{options} <input type="radio" disabled={index === selectedQuestion[0] ? false : true}/>
    {index === selectedQuestion[0] ? <CloseOutlined
      style={{ margin: '0 50px', fontSize: '18px' }}
      onClick={() => deleteOption(question.options, i, index, setArrQuestion)}
    />: null}</li>
  });

  return (  
    <div>
      {index === selectedQuestion[0] ? 
        <div>
          <ul>{listRadio}</ul>
          <button onClick={() => newOption(question, index, setArrQuestion)}>Add new option</button>
          <GeneralItems 
          index={index}
          setIdDeleteItem={setIdDeleteItem}
          setModalView={setModalView} 
        />
        </div> : <ul>{listRadio}</ul>}
    </div>
  )
};

export default Radio
