import React, { useState, useEffect} from 'react';
import getItem from '../utils/getItem';
import setItem from '../utils/setItem';
import Question from './Question';
import Checkbox from './question/Checkbox';
import Radio from './question/Radio';
import { Modal, Button } from 'antd';
import deleteQuestion from '../utils/deleteQuestion';

const QuestionList = () => {
  const [arrQuestion, setArrQuestion] = useState(getItem());
  
  const [modalView, setModalView] = useState(false);  

  const [idDeleteItem, setIdDeleteItem] = useState(null);

  useEffect(() => {setItem(arrQuestion)}, [arrQuestion]);
  
  return (
    <div>
      <div>
        {arrQuestion.map((question, i) => {
         return <div key={i}>
            <div>{question.title}</div> 
            {(question.type === 'checkbox') ?
          <Checkbox
            key={i}
            question={question}
            index={i}
            setArrQuestion={setArrQuestion}
            setModalView={setModalView}
            setIdDeleteItem={setIdDeleteItem}
          /> :
          (question.type === 'radio') ?
            <Radio
              key={i}
              index={i}
              question={question}
              setIdDeleteItem={setIdDeleteItem}
              setModalView={setModalView}
          /> :
            <Question
              key={i}
              index={i}
              question={question}
              setModalView={setModalView}
              setIdDeleteItem={setIdDeleteItem}
          />}
      </div>
          })} 
    </div>
      <Modal
        title="Confirm delete?"
        visible={modalView}
        onOk={() => {
          deleteQuestion(arrQuestion, idDeleteItem, setArrQuestion)
          setModalView(false)
        }}
        onCancel={() => setModalView(false)}
      >
        <p>TETETET</p>
        </Modal>
    </div>
  )
}

export default QuestionList
