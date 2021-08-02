import React from 'react';
import { APPCONTENT } from '../constants';

const PromotionalBanner = () => (
  <div className="promotional-banner">
    <img src="images/promo-image.png" alt="Promational Banner" />
    <div className="container">
      <h2>{APPCONTENT.PROMO_HEADER}</h2>
      <p>{APPCONTENT.PROMO_TEXT}<br />{APPCONTENT.PROMO_TEXT2}</p>
    </div>
  </div>
)
export default PromotionalBanner;