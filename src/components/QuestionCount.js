import React from 'react';

function QuestionCount(props) {

  let pct = ( (props.counter - 1) / props.total ) * 100;

  let pctStyle = {
  width: '' + pct + '%'
};

  return (
    <div className="questionCount">
      <h3 className="areaName">Ideologi</h3>
      <div className="barWrapper">
        <div className="bar" style={pctStyle}></div>
      </div>
      <span className="counterNums">Fråga <span>{props.counter}</span> av <span>{props.total}</span></span>
    </div>
  );

}

QuestionCount.propTypes = {
  counter: React.PropTypes.number.isRequired,
  total: React.PropTypes.number.isRequired
};

export default QuestionCount;
