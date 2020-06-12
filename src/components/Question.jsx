import React, {  }  from 'react';
import GeneralItems from './GeneralItems';


const Question = ({ question, setModalView, index, setIdDeleteItem}) => {

  return (
    <div>
      <GeneralItems 
      setModalView={setModalView}
      index={index}
      setIdDeleteItem={setIdDeleteItem}
      />
    </div>
  )
}

export default Question
