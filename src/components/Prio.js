import React from 'react';
import { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { Form, Checkbox } from 'react-form';
import classNames from 'classnames';

let gDisabled = false;
let gValues = {};

class Prio extends Component {

  constructor( props ) {
    super( props );
    // this.state = {};
  }


  handleChange(theForm) {

    let counter = 0;

    Object.keys(theForm.values).map(function(keyName, keyIndex) {
      if(theForm.values[keyName]) {
        counter += 1;
      }

    })

    gValues = theForm.values;
    gDisabled = counter >= 3;
    return;

  }

  renderOptions(key,index,array) {

      let ident = "opt" + array.length + "Y" + array[0].option.length +  "X" + array[1].option.length + "Z" + index;
      let isThisDisabled = gDisabled && !gValues[ident];

      var wrapClass = classNames({
        'cbx-wrapper': true,
        'cbx-wrapper--disabled': isThisDisabled,
        'cbx-wrapper--checked': gValues[ident],
      });



      return (
        <div className={wrapClass} key={index}>
          <Checkbox field={ident} id={ident} className="cbox"  disabled={ isThisDisabled }/>
          <label htmlFor={ident} className="lbl">{key.option}</label>
        </div>

      );
  }

  renderButtons() {

    var strValues = JSON.stringify(gValues);

    console.log("--->>> ",strValues,strValues.indexOf("true"));



    var sendClass = classNames({
      'btn': true,
      'btn--full': true,
      'btn--primary': true,
      'btn--hidden': strValues.indexOf("true") < 0,
    });

    var jumpClass = classNames({
      'btn': true,
      'btn--full': true,
      'btn--primary': false,
      'btn--hidden': strValues.indexOf("true") > -1,
    });

    return (
      <div>
        <button type="submit" className={sendClass}>Skicka</button>
        <button type="submit" className={jumpClass}>Ingen åsikt! Hoppa över frågan</button>
      </div>
    )

  }

  render() {

    return (
      <ReactCSSTransitionGroup
        className="container"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
        transitionAppear
        transitionAppearTimeout={300}
      >
        <div key={this.props.areaid}>

        <div className="questionCount">
          <h3 className="areaName">
            Ekonomi
          </h3>
          <span className="counterNums">Fråga {this.props.counter + 1} av 2</span>
        </div>

        <div className="padder">

          <h2 className="hed">{this.props.area}</h2>

          <p className="ntro">{this.props.description}</p>

          <Form formDidUpdate={this.handleChange} onSubmit={this.props.onSubmitOptions}>
              { formApi => (
                <div>
                  <form className="frm"
                   onSubmit={formApi.submitForm}
                   name={this.props.areaId}
                   id={this.props.areaId}
                   >
                   <div className="frm__options">
                    {this.props.options.map(this.renderOptions)}
                   </div>
                   <span>
                   {this.renderButtons()}
                   </span>
                  </form>
                </div>
              )}
            </Form>
          </div>
          </div>
      </ReactCSSTransitionGroup>
      );
    }
  }

  export default Prio;

/*

Kommunen:

Förskola och barnomsorg
Skola och utbildning
Äldreomsorg och funktionshindrade
Ekonomiskt bistånd till behövande
Gator, vägar och parker
Miljö, natur och återvinning
Idrott och fritidsverksamhet
Kulturverksamhet och bibliotek
Sänkt kommunalskatt

Landsting:
Vårdcentraler och primärvård
Specialistvård och sjukhus
Psykiatri
Tandvård
Läkemedel
Kollektivtrafik
Regional utveckling
Sänkt landstingsskatt

Riksdagsnivå:
Utbildning och forskning
Polis och rättsväsende
Försvar
Infrastruktursatsningar
Barnbidrag och föräldraförsäkring
Stöd till arbetslösa och sjuka
Integration och flyktingar
Pensioner och stöd till äldre
Internationellt bistånd
Kultur och fritid
Sänkt skatt

*/
