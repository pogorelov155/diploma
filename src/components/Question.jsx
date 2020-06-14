import React, {  }  from 'react';
import GeneralItems from './GeneralItems';

const Question = ({ question, setModalView, index, setIdDeleteItem, selectedQuestion}) => {

  return (
    <div>
      {index === selectedQuestion[0] ?
        <div>
          <GeneralItems 
          setModalView={setModalView}
          index={index}
          setIdDeleteItem={setIdDeleteItem}
          />
        </div> : null}
    </div>
  )
}

export default Question
