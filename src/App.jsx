import React, { useState, useRef } from 'react';
import ButtonsGroup from './components/ButtonsGroup';
import './App.css';

const App = () => {
  const [isFinalAnswer, setIsFinalAnswer] = useState(false);
  const [textareaFocused, setTextareaFocused] = useState(false);
  const textareaRef = useRef(null);  // Use ref for the textarea

  const handleTextareaFocus = () => {
    setTextareaFocused(true);
    if (textareaRef.current) {
      textareaRef.current.focus();  // Explicitly focus the textarea
    }
  };

  const handleFinalAnswerChange = (event) => {
    setIsFinalAnswer(event.target.value === 'true');
  };

  return (
    <div className="container">
      <h1>Say the vocabulary words</h1>
      <ButtonsGroup onStop={handleTextareaFocus} />

      <textarea
        ref={textareaRef}  // Attach ref to the textarea
        className={textareaFocused ? 'focused' : ''}
        placeholder="Enter your answer here"
        aria-label="Enter your answer"
      ></textarea>

      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="finalAnswer"
            value="true"
            onChange={handleFinalAnswerChange}
            aria-label="True answer"
          />
          True
        </label>
        <label>
          <input
            type="radio"
            name="finalAnswer"
            value="false"
            onChange={handleFinalAnswerChange}
            aria-label="False answer"
          />
          False
        </label>
      </div>

      <button
        className="submit-button"
        disabled={!isFinalAnswer}
        aria-disabled={!isFinalAnswer}
      >
        Submit
      </button>
    </div>
  );
};

export default App;
