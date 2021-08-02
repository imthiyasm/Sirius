import React, { useState, useEffect } from 'react';
import { APPCONTENT } from '../constants';
import { getSecondsDifference } from '../utills';

const HeaderBanner = () => {
  const [secondsLeft, setSecondsLeft] = useState(getSecondsDifference());

  /**
   * Below useEffect hook called everytime when state are updated
   * */
  useEffect(() => {
    const interval = setInterval(() => {
      if (secondsLeft === 0) {
        clearInterval(interval);
      } else {
        setSecondsLeft(secondsLeft - 1)
      }
    }, 1000)
    return () => clearInterval(interval)
  });

  const days = Math.floor(secondsLeft / 24 / 60 / 60);
  const hoursLeft = Math.floor((secondsLeft) - (days * 86400));
  const hours = Math.floor(hoursLeft / 3600);
  const minutesLeft = Math.floor((hoursLeft) - (hours * 3600));
  const minutes = Math.floor(minutesLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    secondsLeft > 0 ? (
      <div className="headerBanner">
        <div className="container">
          <p>{APPCONTENT.HEADER_TEXT}</p>
          <p><strong>{`${APPCONTENT.HEADER_OFFER_TEXT} ${days}d ${hours}h ${minutes}m ${seconds}s`}</strong></p>
        </div>
      </div>
    ) : null
  )
}
export default HeaderBanner;