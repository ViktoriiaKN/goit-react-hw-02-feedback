import React, { Component } from 'react';
import { Wrapper } from './App.styled';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  componentDidMount() {
    this.resetFeedbackCounts();
  }

  resetFeedbackCounts = () => {
    this.setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

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
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.incrementFeedbackCount}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        </Section>
      </Wrapper>
    );
  }
}
