import React, { useState, useEffect} from 'react';
import getItem from '../utils/getItem';
import setItem from '../utils/setItem';
import Question from './Question';
import Checkbox from './question/Checkbox';
import Radio from './question/Radio';
import { Modal, Select, Button  } from 'antd';
import deleteQuestion from '../utils/deleteQuestion';
import updateQuestion from '../utils/updateQuestion';
import {optionTypeList} from '../utils/constants';
import { PlusOutlined } from '@ant-design/icons';
import addQuestion from '../utils/addQuestion';

const { Option } = Select;

const QuestionList = () => {
  const [arrQuestion, setArrQuestion] = useState(getItem());
  console.log(arrQuestion, 'main');
  
  const [modalView, setModalView] = useState(false);  

  const [modalView1, setModalView1] = useState(false);  

  const [idDeleteItem, setIdDeleteItem] = useState(null);
  
  useEffect(() => {setItem(arrQuestion)}, [arrQuestion]);

  const [newQuestion, setNewQuestion] = useState({_id: "5ed76fdcacd0631d07c05ac23", options: [], selected: [], text: null, title: 'smth', type: 'text', __typename: 'Question'});

  const changeNewQuestionTitle = (e) => {
    e.persist();
    console.log(newQuestion);
    setNewQuestion(prev => ({...prev, title: e.target.value}));
  };

  const changeNewQuestionType = (value) => {
    console.log(newQuestion);
    setNewQuestion(prev => ({...prev, type: value}));
  };

  return (
    <div>
      <div>
        {arrQuestion.map((question, i) => <div key={i}>
           <div>
            <Select value={question.type} style={{ width: 150 }} onChange={(value) => updateQuestion(i, setArrQuestion, value)}>
               {optionTypeList.map((option, i) => {
                 return <Option key={i} value={option.toLowerCase()}>{option} </Option>
              })}
            </Select>
            </div>
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
              setArrQuestion={setArrQuestion}
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
          
      </div>)}
      <Modal
        title="Confirm delete?"
        visible={modalView}
        onOk={() => {
          deleteQuestion(arrQuestion, idDeleteItem, setArrQuestion)
          setModalView(false)
        }}
        onCancel={() => setModalView(false)}
      >
        <p>Are you sure you want to delete this question?</p>
        </Modal>
    </div>
      <Modal
        title="Confirm delete?"
        visible={modalView1}
        onOk={() => {
          addQuestion(arrQuestion, setArrQuestion, newQuestion)
          setModalView1(false)
        }}
        onCancel={() => setModalView1(false)}
      >
        <p>Title:</p><input type="text" onChange={changeNewQuestionTitle}/>
        <p>Question type:</p>
        <Select style={{ width: 150 }} onChange={(value) => changeNewQuestionType(value)}> 
          {optionTypeList.map((option, i) => <Option key={i} value={option.toLowerCase()}>{option} </Option>)}
        </Select>
      </Modal>
      <Button className="Button-center" type="primary" shape="circle" icon={<PlusOutlined />} size={"large"} onClick={() => setModalView1(true)}/>
    </div>
  )
}

export default QuestionList
