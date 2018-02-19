import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';
import Important from '../components/Important';

import emojVb from '../svg/emoj-vb.svg';
import emojPb from '../svg/emoj-pb.svg';

import emojPg from '../svg/emoj-pg.svg';
import emojVg from '../svg/emoj-vg.svg';

import MdClose from 'react-icons/lib/md/close';
import MdArrowDown from 'react-icons/lib/md/keyboard-arrow-down';
// import {MdClose} from 'react-icons/md';

function Horiz(props) {

  function renderAnswerOptions(key) {

    return (
      <div className="likert__option">
        <input
          type="radio"
          className="likert__radio"
          name="likertGroup"
          checked={key.type === props.answer}
          id={key.type}
          value={key.type}
          disabled={props.answer}
          onChange={props.onAnswerSelected}
        />
        <label className="likert__label" htmlFor={key.type}>
          <span className="likert__label__text" dangerouslySetInnerHTML={{__html: key.content}} />
        </label>
      </div>
    );
  }

  return (




    <div className="layout-main">


    <div className="layout-main-child--one sublayout-head">
      <div className="head-bwd">
        <a className="bwd-area" href="#">&larr;</a>
      </div>
      <div className="head-label">
        <span className="label-area">ekonomi</span>
      </div>
      <div className="head-count">
        <span className="counter-area">3 av 15 frågor</span>
      </div>

      <div className="sublayout-head__progress">
        <div className="progbar">
          <div className="progbar__inner">
          </div>
        </div>
      </div>
    </div>

    <div className="layout-main-child--two">

      <ReactCSSTransitionGroup

        className="container"

        component="div"

        transitionName="woho"

        transitionEnterTimeout={1000}

        transitionLeaveTimeout={1000}

      >

      <div className="container__child" key={props.questionId + '-cc'}>

        <div className="sublayout-main" key={props.questionId}>

          <div className="sublayout-main-child--one sublayout-main__upper">

            <h2 className="question">{props.question}</h2>

          </div>

          <div className="sublayout-main-child--two sublayout-main__jumper">
            <div className="parties">

              <div className="parties__row">
                <a href="#">Vad tycker partierna?</a>

                <div className="parties__row__interact">
                  <MdClose />
                </div>
              </div>
              <div className="parties__row">
                <div className="parties__row__figure">
                  <img src={emojVb} alt="Väldigt missnöjd emoji" />
                </div>
                <h2>Mycket dåligt förslag</h2>
              </div>

              <div className="parties__row">
                <div className="parties__row__figure party party-l">
                  L
                </div>
                <span className="party-longname">Moderaterna</span>
                <p>"Vi tycker att det är självklart att Sverige..."</p>
                <div className="parties__row__interact">
                  <MdArrowDown />
                </div>
              </div>

              <div className="parties__row">
                <div className="parties__row__figure party party-m">
                  <span>M</span>
                </div>
                <span className="party-longname">Moderaterna</span>
              </div>



            </div>
          </div>



          <div className="sublayout-main-child--three">

            <div className="extra">
              <span className="important-area">
                <input type="checkbox" id="superImportant" name="superImportant" value="newsletter" />
                <label for="superImportant">Extra viktig fråga</label>
              </span>
            </div>


            <div className="likert">

              {props.answerOptions.map(renderAnswerOptions)}

            </div>

            <div className="footer-skip">
                <a href="#">Hoppa över frågan </a>
            </div>
          </div>

        </div>


        </div>
      </ReactCSSTransitionGroup>
      </div>
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
