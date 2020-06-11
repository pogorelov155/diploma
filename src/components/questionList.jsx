import React, { useState, useEffect} from 'react';
import getItem from '../utils/getItem';
import setItem from '../utils/setItem';
import Question from './Question';
import Checkbox from './question/Checkbox';
import Radio from './question/Radio';

const QuestionList = () => {
  const [arrQuestion, setArrQuestion] = useState(getItem());
  console.log(arrQuestion, 'main');

  useEffect(() => {setItem(arrQuestion)}, [arrQuestion]);

  const listArr = arrQuestion.map((question, i) => {
    return  (question.type === 'checkbox') ? 
      <Checkbox 
        key={i}
        question={question} 
        index={i}
        setArrQuestion={setArrQuestion}/> : 
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
