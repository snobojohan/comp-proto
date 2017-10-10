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
      <h2>Snyggt jobbat!</h2>

      <p>Efter dessa svar tror vi att vi kan räkna fram din partimatchning med 42 % träffsäkerhet</p>

      <ResultBar percent="42" color="blue" bgcolor="striped" type="progress" parties="" />
    </div>

      <div className="continue">
        <p>Uppnå högre träffsäkerhet genom att fortsätta</p>
        <button className="btnContinue">Fler frågor</button>
      </div>



      <div className="resultStatement">

        <h4>Preliminär blockmatchning</h4>

      </div>

      <div className="resultGraphs">
        <ResultBar count={props.quizResultCount.RodGron} color="red" parties="S, MP, V" />
        <ResultBar count={props.quizResultCount.Allians} color="blue" parties="M, L, KD, C" />
        <ResultBar count={props.quizResultCount.SD} color="yellow" parties="SD" />

        <p>Du matchar närmast <strong>{blockName(props.quizResult)}</strong></p>

        <div className="center">
        <button className="btnDefault">Hur svarade partierna?</button>
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
