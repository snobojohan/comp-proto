import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function blockName(bName){

  switch (bName) {
    case "RodGron":
        return "de Rödgröna"
      break;
    case "Allians":
        return "Alliansen"
      break;
    case "SD":
        return "Sverigedemokraterna"
      break;
    case "none":
        return "det som ingen tycker"
      break;
    default:
      return "flera block"
  }
}

function ResultBar(props) {

  let pct = 0;

  if(props.percent){
    pct = props.percent;
  } else {
    pct = ( props.count / 5 ) * 100;
  }

  let wrapClasses = "barWrapper barWrapper--block barWrapper--block-bg-" + props.bgcolor;
  let barClasses = "bar bar--block bar--block-" + props.color;
  let percentClasses = "resultPercent resultPercent--" + props.type;

  let pctStyle = {
  width: '' + pct + '%'
};

  return (
    <div className="resultGraphics">
      <span className={percentClasses}>{pct}%</span> <span className="resultParties">{props.parties}</span>
      <div className={wrapClasses}>
        <div className={barClasses} style={pctStyle}></div>
      </div>
    </div>
  );

}

function Result(props) {

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
      <div className="partResult">

        <div className="continue">
          <p>Byte av prototypgränssnitt</p>
          <a href="https://snobojohan.typeform.com/to/nov3i2" className="btnContinue">Fler frågor</a>
        </div>
        
      </div>
    </ReactCSSTransitionGroup>
  );

}

Result.propTypes = {
  quizResult: React.PropTypes.string.isRequired,
  quizResultCount: React.PropTypes.object.isRequired
};

export default Result;
