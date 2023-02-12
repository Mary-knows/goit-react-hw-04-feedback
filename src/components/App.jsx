// import React, { Component } from 'react';
import { useState } from "react";
import FeedbackClick from './FeedbackClick/FeedbackClick';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification'
import './App.css';


export function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedbackGood = () => {
    setGood(prevState => prevState + 1)
  }

   const addFeedbackNeutral = () => {
    setNeutral(prevState => prevState + 1)
  }

   const addFeedbackBad = () => {
    setBad(prevState => prevState + 1)
  }

  const countTotalFeedback = () => {
    return [good, neutral, bad].reduce((total, val) => total + val, 0);
  };

  const positiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good * 100) / total) || 0;
  };

  const incrementFeedback = e => {
    switch (e) {
      case 'good':
        addFeedbackGood();
        break;
      
      case 'neutral':
        addFeedbackNeutral();
        break;
      
      case 'bad':
        addFeedbackBad();
        break;
      
      default:
        return;
    }
  };
  
  const total = countTotalFeedback();
  const positivePercentage = positiveFeedbackPercentage();

  return (
    <div className="container">
      <Section title='Please leave feedback'> 
        <FeedbackClick
        options={Object.keys({ good, neutral, bad })}
        onClickFeedback={incrementFeedback} />
      </Section>

      <Section title='Statistics'>
        {total > 0 ? 
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positiveFeedbackPercentage={positivePercentage} />
        : <Notification message="There is no feedback"></Notification> }
      </Section>
    </div>
  );
};