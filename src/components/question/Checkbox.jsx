import React, {useState} from 'react';
import GeneralItems from '../GeneralItems';
import { CloseOutlined } from '@ant-design/icons';
import deleteOption from '../../utils/deleteOption';
import newOtherOption from '../../utils/newOtherOption';
import newOption from '../../utils/newOption';
import markSelectCheckbox from '../../utils/markSelectCheckbox';
import updateQuestion from '../../utils/updateQuestion';

const Checkbox = ({ question, setArrQuestion, index, setModalView, setIdDeleteItem, selectedQuestion, addOption, setAddOption}) => {
  
  const [changeOption, setChangeOption] = useState({ clicked: false, index: 99 });

  const showInputChangeOption = (index) => {
    changeOption.clicked = !changeOption.clicked;
    changeOption.index = index;
    setChangeOption(prev => ({ ...prev, clicked: changeOption.clicked, index: changeOption.index }))
  };

  const changeOptionText = (e, i) => {
    const newQuestion = { ...question };
    newQuestion.options[i] = e.target.value;
    setArrQuestion(prev => {
      return updateQuestion(prev, index, newQuestion)
    });
  }; 

  const showInputAddOption = () => {
    setAddOption(prev => ({ ...prev, clicked: true }))
  };

  const changeTextAddOption = (e) => {
    e.persist();
    setAddOption(prev => ({ ...prev, text: e.target.value }));
  };

  const listOptions = question.options.map((option, i) =>
    <li key={i}>
      <div>
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
        type="checkbox" 
        checked={question.selected.includes(i, 0) ? true : false} 
        onChange={() => markSelectCheckbox(question.selected, setArrQuestion, index, i)} 
        disabled={(index === selectedQuestion.index && selectedQuestion.isEdit === true) 
          ? false 
          : 
          true
        }
      />
    </div>
      {(index === selectedQuestion.index && selectedQuestion.isEdit === true) ? 
        <CloseOutlined 
          style={{margin: '0 auto',fontSize: '18px'}}
          onClick={() => deleteOption(question.options, i, index, setArrQuestion)}
        />
        :
        null
      } 
    </li>
  );

  return (
    <div>
      {(index === selectedQuestion.index && selectedQuestion.isEdit === true) ? 
        <div>
          <ul className='ulStyle'>
            {listOptions}
          </ul>
          {addOption.clicked ? 
            <form onSubmit={(e) => {
              newOption(question, index, setArrQuestion, addOption.text, e)
              setAddOption(prev => ({ ...prev, clicked: false }))
            }}>
            <input 
              type="text" 
              onChange={changeTextAddOption} 
            />
            <input 
              type="submit" 
            />
          </form> :
            <button onClick={showInputAddOption}>Add option</button>}
          <button onClick={() => newOtherOption(question, index, setArrQuestion)}>Add "Other"</button>
          <GeneralItems
            setModalView={setModalView}
            index={index}
            setIdDeleteItem={setIdDeleteItem} 
          />
        </div> : 
        <ul className='ulStyle'>
          {listOptions}
        </ul>}
    </div>
  )
};

export default Checkbox
