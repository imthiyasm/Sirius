import React from 'react';
import { APPCONTENT } from '../constants';

const WelcomeContent = () => {
  const {
    WELCOME_HEADER_TEXT = '',
    WELCOME_HEADER_TEXT2 = '',
    WELCOME_TEXT = ''
  } = APPCONTENT;
  return (
    <section className="banner-section">
      <div className="container banner-content">
        <div className="banner-left">
          <img src="images/welcome-image.svg" alt="Welcome" />
        </div>
        <div className="banner-right">
          <h2>{WELCOME_HEADER_TEXT} <br />{WELCOME_HEADER_TEXT2}</h2>
          <p>{WELCOME_TEXT}</p>
          <button>PLAN A TRIP</button>
        </div>
      </div>
    </section>
  )
}

export default WelcomeContent;