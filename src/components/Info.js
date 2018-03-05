import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import graph from '../graph-mandat-sthlm.png';
import bars from '../graph-results.png';


function Info(props) {

  return (
    <div className="card-main layout-main">

      <div className="layout-main-child--one">
        <h1 className="typo-page-head"><span className="typo-svt-slash">/</span>Valkompassen</h1>
      </div>

      <div className="layout-main-child--two">
        <ReactCSSTransitionGroup
          className="container result"
          component="div"
          transitionName="fade"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={500}
          transitionAppear
          transitionAppearTimeout={500}
        >
          <div className="partInfo">

            <h1 className="typo-h1">Testa vilka partier du matchar bäst i Stockholms kommunalval</h1>
            <p>Söndagen den 9 september 2018 är det dags att välja. Se vilka partiers åsikter som matchar dig bäst i det kommunala valet.</p>
          </div>

            <div className="makeMeSticky">
                <a href="/?regular=true" className="btnStart">STARTA KOMPASSEN<span>Det tar 5 - 10 minuter</span></a>
            </div>

            <div className="partInfo">


              <h3>Så styrs Stockholm nu</h3>

              <img src={graph} alt="Mandat i sthlm" className="crisp halfImage" />
              <p><strong>Socialdemokraterna</strong>, <strong>Miljöpartiet</strong>, <strong>Vänsterpartiet</strong> och <strong>Feministiskt initiativ</strong> är de partier som bildar majoritetsstyret med sammanlagt 53%.</p>


              <h3>Valresultat kommunalval Stockholm 2014</h3>
              <img src={bars} alt="Resultat" className="crisp halfImage" />
              <p><strong>Moderaterna</strong> blev största parti med 28%.</p>

            </div>


            <div className="partInfo">
            <h3>Så styrs en kommun</h3>

            <p>Staten bestämmer vad kommunen skall göra men inte hur det skall ske. Kommunen måste ansvara för barnomsorgen, skolan, äldreomsorgen, räddningstjänsten, socialtjänsten, osv.</p>
            <p>Men exakt hur den gör, hur stor kommunalskatten ska vara och hur pengarna ska fördelas är upp till varje kommun.</p>


            </div>



        </ReactCSSTransitionGroup>
      </div>
    </div>
  );

}



export default Info;
