import React, { useState, useEffect} from 'react';
import getItem from '../utils/getItem';
import setItem from '../utils/setItem';
import Question from './Question';
import Checkbox from './question/Checkbox';
import Description from './question/Description';
import Radio from './question/Radio';
import { Modal, Select, Button } from 'antd';
import deleteQuestion from '../utils/deleteQuestion';
import updateQuestion from '../utils/updateQuestion';
import { optionTypeList, selectedQuestion} from '../utils/constants';
import { PlusOutlined } from '@ant-design/icons';
import addQuestion from '../utils/addQuestion';
import markSelect from './../utils/markSelect';

const { Option } = Select;

const QuestionList = () => {
  const [arrQuestion, setArrQuestion] = useState(getItem());
  console.log(arrQuestion, 'main');
  
  const [modalView, setModalView] = useState(false);  

  const [modalView1, setModalView1] = useState(false);  

  const [idDeleteItem, setIdDeleteItem] = useState(null);
  
  useEffect(() => {setItem(arrQuestion)}, [arrQuestion]);

  const [selectedQuestion, setSelectedQuestion] = useState([9]);

  const [newQuestion, setNewQuestion] = useState({ _id: "5ed76fdcacd0631d07c05ac23", options: [], selected: [], text: null, title: 'New question', type: 'text', __typename: 'Question' });

  const changeNewQuestionTitle = (e) => {
    e.persist();
    setNewQuestion(prev => ({...prev, title: e.target.value}));
  };

  const changeNewQuestionType = (value) => {
    setNewQuestion(prev => ({...prev, type: value}));
  };

  return (
    <div>
      <div >
        {arrQuestion.map((question, i) => 
          <div className= 'mainBody' key={i}>
            {i === selectedQuestion[0] ? 
            <div>
              <Select value={question.type} style={{ width: 150 }} onChange={(value) => updateQuestion(i, setArrQuestion, value)}>
                {optionTypeList.map((option, i) => {
                  return <Option key={i} value={option.toLowerCase()}>{option} </Option>
                })}
              </Select> 
            </div> : null}
            <div style={{cursor: 'pointer'}} onClick={() => markSelect(selectedQuestion, i, setSelectedQuestion)}>{question.title}</div> 
              {(question.type === 'checkbox') ?
            <Checkbox
              key={i}
              question={question}
              index={i}
              setArrQuestion={setArrQuestion}
              setModalView={setModalView}
              setIdDeleteItem={setIdDeleteItem}
              selectedQuestion={selectedQuestion}
            /> :
            (question.type === 'radio') ?
              <Radio
                key={i}
                index={i}
                question={question}
                setArrQuestion={setArrQuestion}
                setIdDeleteItem={setIdDeleteItem}
                setModalView={setModalView}
                selectedQuestion={selectedQuestion}
            /> :
            (question.type === 'text') ?
              <Question
                key={i}
                index={i}
                question={question}
                setModalView={setModalView}
                setIdDeleteItem={setIdDeleteItem}
                selectedQuestion={selectedQuestion}
                /> :
                <Description
                key={i}
                index={i}
                question={question}
                setModalView={setModalView}
                setIdDeleteItem={setIdDeleteItem}
                selectedQuestion={selectedQuestion}
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
        title="New question"
        visible={modalView1}
        onOk={() => {
          addQuestion(arrQuestion, setArrQuestion, newQuestion )
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
      <Button style={{position: 'fixed', top: '90%', left: '49%'}} type="primary" shape="circle" icon={<PlusOutlined />} size={"large"} onClick={() => setModalView1(true)}/>
    </div>
  )
}

export default QuestionList
