import React, { Component } from 'react';
import update from 'react-addons-update';
import quizOptions from './api/quizOptions';
import quizQuestions from './api/quizQuestions';
import Horiz from './components/Horiz';
import Result from './components/Result';
import Section from './components/Section';
import Prio from './components/Prio';
import Info from './components/Info';

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

class App extends Component {

  constructor(props) {

    super(props);
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        RodGron: 0,
          Allians: 0,
        SD: 0,
        none: 0
      },
      result: '',
      optionsCounter: 0,
      area: '',
      areaId: '',
      description: '',
      options: [],
      isEnd: false
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.handleOptionSelected = this.handleOptionSelected.bind(this);
  }

  componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) => question.answers);
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0],

      // options
      area: quizOptions[0].area,
      areaId: quizOptions[0].areaId,
      description: quizOptions[0].description,
      options: quizOptions[0].options
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  handleAnswerSelected(event) {

    // Here
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
        setTimeout(() => this.setNextQuestion(), 300);
    } else {
        setTimeout(() => this.setResults(this.getResults()), 1500);
    }
  }

  setUserAnswer(answer) {

    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: {$apply: (currentValue) => currentValue + 1}
    });

    this.setState({
        answersCount: updatedAnswersCount,
        answer: answer
    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
        counter: counter,
        questionId: questionId,
        question: quizQuestions[counter].question,
        answerOptions: quizQuestions[counter].answers,
        answer: '',
        checked: false
    });
  }

  handleOptionSelected( values, e, formApi ) {

    const optionsCt = this.state.optionsCounter + 1;

    console.log(this.state.optionsCounter , quizOptions.length);

    if (optionsCt >= quizOptions.length) {
      console.log("END OF OPTIONS");
      // setTimeout(() => this.setResults(this.getResults()), 300);
      setTimeout(() => {
        // console.log("DO IT",quizOptions[optionsCt].area);
        this.setState({
          isEnd: true
        });

      }, 300);

    } else {
      console.log("handleOptionSelected",values, e, formApi);

      // TODO: When it's done
      setTimeout(() => {

        // console.log("DO IT",quizOptions[optionsCt].area);

        this.setState({
          optionsCounter: optionsCt,
          area: quizOptions[optionsCt].area,
          areaId: quizOptions[optionsCt].areaId,
          description: quizOptions[optionsCt].description,
          options: quizOptions[optionsCt].options
        });

      }, 300);

      setTimeout(() => formApi.resetAll(), 299);
    }




  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {

    console.log("setResults(result)",result)

    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  renderHoriz() {
    return (
      <Horiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderPrio() {

    if(!this.state.areaId){
      console.log("ENDED");
      return (
        <div><h2>SLUT PÅ PROTOTYP</h2></div>
      )
    }

    return (
      <Prio foo="bar" counter={this.state.optionsCounter} area={this.state.area} description={this.state.description} areaid={this.state.areaId} options={this.state.options} onSubmitOptions={this.handleOptionSelected} />
    );
  }

  renderInfo() {
    return (
      <Info />
    );
  }

  renderSection(isEnd) {
    return (
      <Section isend={isEnd} />
    );
  }

  renderResult() {
    return (
      <Result quizResultCount={this.state.answersCount} quizResult={this.state.result} />
    );
  }

  render() {

    let compToRender = this.renderInfo(); // this.renderQuiz();

    if(getUrlParameter('regular') === "true") {
      compToRender = this.renderHoriz();
    }


    if(getUrlParameter('prio') === "true") {
      if(!this.state.isEnd){
        compToRender = this.renderPrio();
      } else {
        compToRender = this.renderResult();
      }
    } else if (this.state.result) {
      compToRender = this.renderSection(false);
    }

    return (
      <div className="app">
        {
          compToRender
        }
      </div>
    );
  }

}

export default App;
