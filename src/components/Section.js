import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Section(props) {

  // TODO: fix this to be last

  return (
    <ReactCSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >

      <div key="foo">
        <div className="sectionResult">

        <div className="wrapper">

            <ol className="ProgressBar">
              <li className="ProgressBar-step is-complete">
                <svg className="ProgressBar-icon">
                  <svg id="checkmark-bold" viewBox="0 0 24 24" width="100%" height="100%">
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>
                </svg>
                <span className="ProgressBar-stepLabel">Ideologi</span>
              </li>
              <li className="ProgressBar-step is-current">
                <svg className="ProgressBar-icon">
                  <svg id="checkmark-bold" viewBox="0 0 24 24" width="100%" height="100%">
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>
                </svg>
                <span className="ProgressBar-stepLabel">Ekonomi</span>
              </li>
              <li className="ProgressBar-step">
                <svg className="ProgressBar-icon">
                  <svg id="checkmark-bold" viewBox="0 0 24 24" width="100%" height="100%">
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>
                </svg>
                <span className="ProgressBar-stepLabel">Jobb</span>
              </li>
              <li className="ProgressBar-step">
              <svg className="ProgressBar-icon">
                <svg id="checkmark-bold" viewBox="0 0 24 24" width="100%" height="100%">
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
              </svg>
                <span className="ProgressBar-stepLabel">Miljö</span>
              </li>
              <li className="ProgressBar-step">
              <svg className="ProgressBar-icon">
                <svg id="checkmark-bold" viewBox="0 0 24 24" width="100%" height="100%">
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
              </svg>
                <span className="ProgressBar-stepLabel">Invandring</span>
              </li>
              <li className="ProgressBar-step">
              <svg className="ProgressBar-icon">
                <svg id="checkmark-bold" viewBox="0 0 24 24" width="100%" height="100%">
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
              </svg>
                <span className="ProgressBar-stepLabel">Skola</span>
              </li>
            </ol>
          </div>


          <h2>Snyggt jobbat!</h2>

          <p>Du har klarat av ideologifrågorna</p>

          <p>Nu följer ekonomiska frågor där du kan välja att prioritera 1 till 3 alternativ</p>

        </div>

        <div className="continue">
          <a href="?prio=true" className="btnContinue">Fortsätt: Ekonomi</a>
        </div>

      </div>

    </ReactCSSTransitionGroup>
  );

}

export default Section;
