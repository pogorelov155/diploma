import React, {} from 'react';
import GeneralItems from '../GeneralItems';
import { CloseOutlined } from '@ant-design/icons';
import deleteOption from '../../utils/deleteOption';
import newOtherOption from '../../utils/newOtherOption';
import newOption from '../../utils/newOption';
import markSelectCheckbox from '../../utils/markSelectCheckbox';

const Checkbox = ({ question, setArrQuestion, index, setModalView, setIdDeleteItem, selectedQuestion, addOption, setAddOption}) => {
  
  const showInputAddOption = () => {
    setAddOption(prev => ({ ...prev, clicked: true }))
  };

  const changeTextAddOption = (e) => {
    e.persist();
    setAddOption(prev => ({ ...prev, text: e.target.value }));
  };

//ToDo
/*   onClick = {() => markChoosedOption(i)}
updateOption.choosed === i ? <input type='text' /> : */

  const listOptions = question.options.map((item, i) => {
    return <li key={i} style={{ padding: '15px', }}>{item}
    <div>
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
          style={{margin: '0 50px',fontSize: '18px'}}
          onClick={() => deleteOption(question.options, i, index, setArrQuestion)}
        />
        :
        null
      } 
    </li>
  });

  return (
    <div>
      {(index === selectedQuestion.index && selectedQuestion.isEdit === true) ? 
        <div>
          <ul style={{
            display: 'flex',
            justifyCcontent: 'space-between',
            flexWrap: 'wrap',
            flexDirection: 'row',}}
          >
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
        <ul
          style={{
            display: 'flex',
            justifyCcontent: 'space-between',
            flexWrap: 'wrap',
            flexDirection: 'row',
          }}
        >
          {listOptions}
        </ul>}
    </div>
  )
};

export default Checkbox
