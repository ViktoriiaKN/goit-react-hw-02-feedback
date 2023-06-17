import React, { Component } from 'react';
import { Wrapper } from './App.styled';
import PropTypes from 'prop-types';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  incrementFeedbackCount = category => {
    this.setState(prevState => ({
      [category]: prevState[category] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = good + neutral;
    return totalFeedback > 0 ? (positiveFeedback / totalFeedback) * 100 : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <Wrapper>
        <section>
          <h1>Please leave feedback</h1>
          <button onClick={() => this.incrementFeedbackCount('good')}>
            Good
          </button>
          <button onClick={() => this.incrementFeedbackCount('neutral')}>
            Neutral
          </button>
          <button onClick={() => this.incrementFeedbackCount('bad')}>
            Bad
          </button>
          <h2>Statistics</h2>
          <ul className="stat-list">
            <li className="item">
              <span className="label">Total Feedback:</span>
              <span className="percentage">{totalFeedback}</span>
            </li>
            <li className="item">
              <span className="label">Positive Feedback Percentage:</span>
              <span className="percentage">{positiveFeedbackPercentage}</span>
            </li>
          </ul>
        </section>
      </Wrapper>
    );
  }
}
