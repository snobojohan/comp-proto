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
              <li><span className="tangent">esc</span>
              <span className="swipe">

              <span dangerouslySetInnerHTML={{__html: "<svg viewBox='0 0 100 100' enable-background='new 0 0 100 100' xml:space='preserve'><path class='svgpath' class='svgpath' d='M66.281,29.17c0,0-9.642-1.875-16.874-1.875s-13.66,1.607-13.66,1.607v4.821l-9.642-8.035l9.91-7.767v4.285  C53.96,22.206,66.281,29.17,66.281,29.17z M33.203,22.252c-1.971,0-3.569,1.598-3.569,3.569s1.598,3.569,3.569,3.569  c1.971,0,3.569-1.598,3.569-3.569S35.174,22.252,33.203,22.252z'/><g><path class='svgpath' d='M71.102,68.809c-0.268-0.804-0.804-6.696-1.339-9.374c-0.536-2.678-2.41-8.839-3.482-12.053   c-1.071-3.214-3.214-5.625-4.018-6.16c-0.803-0.536-2.563-0.536-2.563-0.536l1.136,2.143h-1.251c0,0-0.804-2.678-1.607-3.75   c-0.803-1.071-2.41-2.143-3.75-2.411c-1.339-0.268-1.342,0-1.342,0l1.514,4.285h-0.976c0,0-1.071-4.285-2.411-5.625   c-1.339-1.339-3.75-2.678-5.357-2.678s-2.198,1.037-2.678,1.875c-0.314,0.549-0.272,0.811-0.314,0.927c0,0,0.757-0.757,1.136,0   c0.33,0.66,1.049,3.947,1.09,5.383l0.231,0.386l-0.268,0.268c0,0-4.018-6.428-4.821-7.767c-0.804-1.339-1.607-2.411-2.143-2.946   c-0.536-0.536-1.607-2.946-2.143-4.018c-0.536-1.071-1.607-2.946-2.411-2.946c-1.339,0-2.411,1.071-2.411,2.678   s0.536,5.089,1.339,7.232c0.803,2.143,4.821,9.642,5.357,12.856c0.536,3.214,0.804,8.303,0.804,10.713c0,2.411,0,3.482-0.268,3.214   c-0.268-0.268-2.143-2.946-2.143-3.214c0-0.268-0.536-4.821-2.411-6.16c-1.875-1.339-2.411-0.804-2.678-0.536   c-0.268,0.268-0.268,3.214-0.536,4.018c-0.268,0.804-1.339,2.946-1.339,4.553c0,1.607,0.803,2.678,1.339,3.75   c0.536,1.071,2.411,4.821,2.946,5.892c0.536,1.071,7.767,5.089,10.446,5.892c2.678,0.804,5.892,1.607,6.428,3.214   c0.536,1.607,0.536,3.214,2.411,3.75c1.875,0.536,5.944,0.73,9.91-0.536c3.47-1.108,7.14-2.857,8.839-6.428   C72.572,72.175,71.37,69.613,71.102,68.809z'/></g></svg>"}} />

              </span>

              <a href="#" className="linkRegular">Hoppa över frågan</a></li>
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
