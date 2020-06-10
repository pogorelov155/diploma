import React, {useState} from 'react';
import getItem from '../utils/getItem';
import Question from './Question';
import Checkbox from './question/Checkbox';
import Radio from './question/Radio';

const QuestionList = () => {
  const arrQuestion = getItem();
  console.log(arrQuestion);
  
  const listArr = arrQuestion.map((question, i) => {
    return  (question.type === 'checkbox') ? 
      <Checkbox 
        key={i}
        question={question}/> : 
        (question.type === 'radio') ? 
      <Radio
        key={i}
        question={question} /> :    
      <Question 
        key={i}
        question={question}/>;
  });
  
  return (
    <div>
      {listArr}
    </div>
  )
}

export default QuestionList
