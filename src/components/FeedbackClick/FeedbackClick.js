import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackClick.css';

const FeedbackClick = ({ options, onClickFeedback }) => {
    return <div className="feedback_btns">
        {options.map((option) => (
            <button className="btn" type='button' key={option} onClick={() => onClickFeedback(option)}>{option}</button>
        )
        )}
    </div>
}

FeedbackClick.propTypes = {
  options: PropTypes.array.isRequired,
  onClickFeedback: PropTypes.func.isRequired,
};

export default FeedbackClick;
