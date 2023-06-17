import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className="stat-list">
      <li className="item">
        <span className="label">Good:</span>
        <span className="value">{good}</span>
      </li>
      <li className="item">
        <span className="label">Neutral:</span>
        <span className="value">{neutral}</span>
      </li>
      <li className="item">
        <span className="label">Bad:</span>
        <span className="value">{bad}</span>
      </li>
      <li className="item">
        <span className="label">Total:</span>
        <span className="value">{total}</span>
      </li>
      <li className="item">
        <span className="label">Positive Feedback:</span>
        <span className="value">{positivePercentage}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
