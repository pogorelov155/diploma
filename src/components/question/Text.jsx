import React, { useState }  from 'react';
import GeneralItems from '../GeneralItems';
import addTextQuestion from '../../utils/addTextQuestion';

const Text = ({ question, setModalView, index, setIdDeleteItem, selectedQuestion, setArrQuestion}) => {

  const [newText, setNewText] = useState('');

  const changeNewText = (e) => {
    setNewText(e.target.value);
  };
 
  return (
    <div>
      {index === selectedQuestion[0] ?
        <div>
          <form onSubmit={(e) => addTextQuestion(newText, question.text, setArrQuestion, index, e)}>
            <input type="text" onChange={changeNewText}/>
            <input type="submit"/>
          </form>
          <p>{question.text}</p>
          <GeneralItems 
          setModalView={setModalView}
          index={index}
          setIdDeleteItem={setIdDeleteItem}
          />
        </div> : null}
    </div>
  )
}

export default Text
