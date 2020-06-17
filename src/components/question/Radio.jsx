import React, { useState} from 'react';
import GeneralItems from '../GeneralItems';
import { CloseOutlined } from '@ant-design/icons';
import deleteOption from '../../utils/deleteOption';
import newOtherOption from '../../utils/newOtherOption';
import newOption from '../../utils/newOption';
import markSelectRadio from '../../utils/markSelectRadio';
import updateQuestion from '../../utils/updateQuestion';

const Radio = ({ index, question, setModalView, setIdDeleteItem, setArrQuestion, selectedQuestion, addOption, setAddOption}) => {

  const [changeOption, setChangeOption] = useState({ clicked: false, index: 99 });

  const showInputAddOption  = () => {
    setAddOption(prev => ({...prev, clicked: true}))
  };

  const changeTextAddOption = (e) => {
    e.persist();
    setAddOption(prev => ({...prev, text: e.target.value}));
  };

  const showInputChangeOption = (index) => {
    changeOption.clicked = !changeOption.clicked;
    changeOption.index = index;
    setChangeOption(prev => ({ ...prev, clicked: changeOption.clicked, index: changeOption.index  }))
  };

  const changeOptionText = (e, i) => {
    const newQuestion = {...question};
    newQuestion.options[i] = e.target.value;
    setArrQuestion(prev => {
      return updateQuestion(prev, index, newQuestion)
    });
  }; 

  const listRadio = question.options.map((option, i) =>
    <li key={i}>
      <div >
        <div onClick={() => showInputChangeOption(i)}>
          {(changeOption.clicked && changeOption.index === i) ? 
          <input 
            type='text' 
            value={option} 
            onChange={(e) => changeOptionText(e, i)} 
            autoFocus
          /> 
          : option}
        </div>
          <input 
            type="radio" 
            value={option} 
            checked={question.selected[0] === i} 
            onChange={() => markSelectRadio(i, index, question.selected, setArrQuestion)} 
            disabled={(index === selectedQuestion.index && selectedQuestion.isEdit === true) 
            ? false : true } 
          />
      </div>
      {(index === selectedQuestion.index && selectedQuestion.isEdit === true) ? <CloseOutlined
        onClick={() => deleteOption(question.options, i, index, setArrQuestion)}
      />: null}
    </li>);
  
  return (  
    <div>
      {(index === selectedQuestion.index && selectedQuestion.isEdit === true) ?
        <div>
          <ul className='ulStyle'>
            {listRadio}
          </ul>
          {addOption.clicked ? 
          <form 
            onSubmit={(e) => {
              newOption(question, index, setArrQuestion, addOption.text, e)
              setAddOption(prev => ({...prev, clicked: false}))
            }}>
            <input type="text" onChange={changeTextAddOption}/>
            <input type="submit"/>
          </form> : 
            <button onClick={showInputAddOption}>Add option</button>}
            <button onClick={() => newOtherOption(question, index, setArrQuestion)}>Add "Other"</button>
          <GeneralItems 
            index={index}
            setIdDeleteItem={setIdDeleteItem}
            setModalView={setModalView} 
        />
        </div> : 
        <ul className='ulStyle'>
          {listRadio}
        </ul>}
    </div>
  )
};

export default Radio
