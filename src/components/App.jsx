import React, { Component } from 'react';

export const App = () => {
  return <div></div>;
};

class Amount extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {}
  countPositiveFeedbackPercentage() {}

  render() {
    const { good, neutral, bad } = this.props;

    return (
      <div>
        <section>
          <h1>Please leave feedback</h1>
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button>
          <h2>Statistics</h2>
          <ul class="stat-list">
            <li class="item">
              <span class="label">.docx</span>
              <span class="percentage">4%</span>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}
