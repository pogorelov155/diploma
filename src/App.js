import React from 'react';
import './App.css';
import Header from './components/Header';
import QuestionList from './components/questionList';

 /* localStorage.setItem('questionList', `[{ "_id": "5ed76fdcacd0631d07c05ac6", "title": "Where do you live?", "type": "text", "options": [], "selected": [], "text": null, "__typename": "Question" }, { "_id": "5ed7700aacd0631d07c05ace", "title": "What is your favorite fruits?", "type": "checkbox", "options": ["bananas", "apple", "pear", "cherry"], "selected": [], "text": null, "__typename": "Question" }, { "_id": "5ed77012acd0631d07c05ad0", "title": "A wedding is a ceremony where two people are united in marriage", "type": "header", "options": [], "selected": [], "text": null, "__typename": "Question" }, { "_id": "5ed7701eacd0631d07c05ad2", "title": "What is your animal", "type": "radio", "options": ["dog", "frog", "cat"], "selected": [], "text": null, "__typename": "Question" }, { "_id": "5edf715e3177b66ba5f97322", "title": "New Question", "type": "text", "options": [], "selected": [], "text": null, "__typename": "Question" }, { "_id": "5edf86a602d42a7d77580cae", "title": "New Question", "type": "text", "options": [], "selected": [], "text": null, "__typename": "Question" }, { "_id": "5edf87a802d42a7d77580cb3", "title": "New Question", "type": "text", "options": [], "selected": [], "text": null, "__typename": "Question" }]`);  */

function App() {
  return (
    <div className="App">
      <Header/>
      <QuestionList/>
    </div>
  );
}

export default App;
