import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as StopIcon } from '../assets/icons/icon-stop.svg';
import { ReactComponent as RecordIcon } from '../assets/icons/icon-record.svg';
import { ReactComponent as PlayIcon } from '../assets/icons/icon-play.svg';

const ButtonsGroup = ({ onStop }) => {
  const [activeButton, setActiveButton] = useState(null);
  const timerId = useRef(null);

  const stopButtonRef = useRef(null);
  const recordButtonRef = useRef(null);
  const reviewButtonRef = useRef(null);

  useEffect(() => {
    if (timerId.current) {
      clearTimeout(timerId.current);
    }

    if (activeButton === 'record' || activeButton === 'review') {
      timerId.current = setTimeout(() => {
        setActiveButton(null);

        if (activeButton === 'record') {
          recordButtonRef.current.blur();
        } else if (activeButton === 'review') {
          reviewButtonRef.current.blur();
        }

      }, 5000);
    }

    return () => {
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
    };
  }, [activeButton]);


  const handleButtonClick = (buttonType) => {
    if (buttonType === 'stop') {
      setActiveButton(null);
      onStop();
      stopButtonRef.current.blur();
    } else {
      setActiveButton(buttonType);
    }
  };

  return (
    <div className="buttons-group">
      <div className="button-wrapper">
        <button
          ref={stopButtonRef}
          className={`round-button stop ${activeButton === 'stop' ? 'active' : ''}`}
          onClick={() => handleButtonClick('stop')}
          aria-label="Stop"
        >
          <StopIcon />
        </button>
        <span className="button-label">Stop</span>
      </div>

      <div className="button-wrapper">
        <button
          ref={recordButtonRef}
          className={`round-button record ${activeButton === 'record' ? 'active' : ''}`}
          onClick={() => handleButtonClick('record')}
          aria-label="Record"
        >
          <RecordIcon />
        </button>
        <span className="button-label">Record</span>
      </div>

      <div className="button-wrapper">
        <button
          ref={reviewButtonRef}
          className={`round-button review ${activeButton === 'review' ? 'active' : ''}`}
          onClick={() => handleButtonClick('review')}
          aria-label="Review your recording"
        >
          <PlayIcon />
        </button>
        <span className="button-label">Review</span>
      </div>
    </div>
  );
};

export default ButtonsGroup;
