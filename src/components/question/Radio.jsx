import React, { useState } from 'react';
import GeneralItems from '../GeneralItems';
import { CloseOutlined } from '@ant-design/icons';
import deleteOption from '../../utils/deleteOption';
import newOtherOption from '../../utils/newOtherOption';
import newOption from '../../utils/newOption';
import markSelectRadio from '../../utils/markSelectRadio';

const Radio = ({ index, question, setModalView, setIdDeleteItem, setArrQuestion, selectedQuestion, addOption, setAddOption}) => {

  const showInput  = () => {
    setAddOption(prev => ({...prev, clicked: true}))
  };

  const changeTextAddOption = (e) => {
    e.persist();
    setAddOption(prev => ({...prev, text: e.target.value}));
  };

  const listRadio = question.options.map((option, i) => {
    return <li key={i}>{option} 
    <input type="radio" 
    value={option} checked={question.selected[0] === i} 
    onChange={() => markSelectRadio(i, index, question.selected, setArrQuestion)} 
    disabled={index === selectedQuestion[0] ? false : true}
  />
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
          {addOption.clicked ? <form onSubmit={(e) => {
            newOption(question, index, setArrQuestion, addOption.text, e)
            setAddOption(prev => ({...prev, clicked: false}))
          }}>
              <input type="text" onChange={changeTextAddOption}/>
              <input type="submit"/>
            </form> : 
            <button onClick={showInput}>Add option</button>}
          <button onClick={() => newOtherOption(question, index, setArrQuestion)}>Add "Other"</button>
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
