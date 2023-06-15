import React, { Component } from 'components/Component/Component';

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
    function handleClick(evt) {
      console.log(evt);
    }
    return (
      <div>
        <section>
          <h1>Please leave feedback</h1>
          <button onClick={handleClick}>Good</button>
          <button onClick={handleClick}>Neutral</button>
          <button onClick={handleClick}>Bad</button>
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
