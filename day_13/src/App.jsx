import React, { useState } from 'react';
import questions from "../public/questions.json";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const checkAnswer = (option) => {
    if (option === questions[currentIndex].correct_answer) {
      setScore(score + 1);
    }
    
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert(`Quiz finished! Your score is ${score}`);
    }
  };

  return (
    <div>
      <h1>Quiz App</h1>
      <p>Question {currentIndex + 1} of {questions.length}</p>
      <p>{questions[currentIndex].question}</p>
      
      <div className='options'>
        {questions[currentIndex].options.map((option, index) => (
          <button key={index} onClick={() => checkAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;