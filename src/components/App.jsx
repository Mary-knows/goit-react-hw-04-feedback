import React, { Component } from 'react';
import FeedbackClick from './FeedbackClick/FeedbackClick';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification'
import './App.css';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  incrementFeedback = evt => {
    this.setState(prevState => ({ [evt]: prevState[evt] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => total + value, 0);
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return Math.round((this.state.good * 100) / total) || 0;
  }


  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return <div className="container">
      <Section title='Please leave feedback'> 
        <FeedbackClick
        options={Object.keys(this.state)}
        onClickFeedback={this.incrementFeedback} />
      </Section>

      <Section title='Statistics'>
        {total > 0 ? 
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
            positiveFeedbackPercentage={positiveFeedbackPercentage} />
        : <Notification message="There is no feedback"></Notification> }
      </Section>
    </div>
} 
};