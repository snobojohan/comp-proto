import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';
import Important from '../components/Important';

function Horiz(props) {

  function renderAnswerOptions(key) {
    /*

    <AnswerOption
      key={key.content}
      answerContent={key.content}
      answerType={key.type}
      answer={props.answer}
      questionId={props.questionId}
      onAnswerSelected={props.onAnswerSelected}
    />
    */
    return (
      <li className="x-answerOption">
        <input
          type="radio"
          className="radioCustomButton"
          name="radioGroup"
          checked={key.type === props.answer}
          id={key.type}
          value={key.type}
          disabled={props.answer}
          onChange={props.onAnswerSelected}
        />
        <label className="horizLabel radioCustomLabel" htmlFor={key.type}>
          {key.content}
        </label>
      </li>
    );
  }

  return (
    <div className="container-wrapper">
      <ReactCSSTransitionGroup
        className="container"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
      >
        <div className="container__grid-parent" key={props.questionId}>

          <div className="container__grid-child">

            <QuestionCount
              counter={props.questionId}
              total={props.questionTotal}
            />

            <Question content={props.question} />

            <div class="horizImportantBox">
              <form>
                <input type="checkbox" id="superImportant" name="superImportant" value="newsletter" />
                <label for="superImportant">Extra viktig fråga</label>
              </form>
            </div>

          </div>

          <div className="container__grid-child container__grid-child--2">

            <ul className="grid-container x-answerOptions">
              {props.answerOptions.map(renderAnswerOptions)}
              <li><span className="tangent">esc</span><span className="swipe">Svajpa</span> <a href="#" className="linkRegular">Hoppa över frågan</a></li>
            </ul>

          </div>

        </div>
      </ReactCSSTransitionGroup>
    </div>
  );
}

Horiz.propTypes = {
  answer: React.PropTypes.string.isRequired,
  answerOptions: React.PropTypes.array.isRequired,
  question: React.PropTypes.string.isRequired,
  questionId: React.PropTypes.number.isRequired,
  questionTotal: React.PropTypes.number.isRequired,
  onAnswerSelected: React.PropTypes.func.isRequired
};

export default Horiz;
