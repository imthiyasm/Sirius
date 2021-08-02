import React, { useState } from 'react';
import { allowOnlyAlphabets, allowOnlyNumber, checkValidEmail } from '../utills';
import { APPCONTENT } from '../constants';


const GetQuote = () => {
  const { QUOTE_HEADER, QUOTE_NAME, QUOTE_CONTACT, QUOTE_EMAIL } = APPCONTENT;
  const [inputData, setInputData] = useState({});
  const [inputError, setInputError] = useState([]);
  const [isFormSuccess, setFormSuccess] = useState(false);

  const handleInputField = (event) => {
    const { name, value } = event.target;
    let inputValue = value;
    if (name === 'username') {
      inputValue = allowOnlyAlphabets(value);
    } else if (name === 'contact') {
      inputValue = allowOnlyNumber(value);
    }
    setInputData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let error = new Array(3).fill(false);
    error[0] = inputData?.username && inputData.username ? false : true;
    error[1] = inputData?.contact && inputData.contact.length >= 10 ? false : true;
    error[2] = !(checkValidEmail(inputData?.email));
    if (error.includes(true)) {
      setFormSuccess(false);
      setInputError(error);
    } else {
      setFormSuccess(true);
      setInputData({});
      setInputError([]);
    }
  }

  return (
    <div className="container travel-form-wrapper" id="nav3">
      <div className="travel-form">
        <h2>{QUOTE_HEADER}</h2>
        <form name="GetQuote" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>{QUOTE_NAME}</label>
            <input type="text" name="username" value={inputData?.username ?? ''} onChange={handleInputField} required />
            {inputError[0] && <p>Name is required</p>}
          </div>

          <div className="form-row">
            <label>{QUOTE_CONTACT}</label>
            <input type="tel" name="contact" value={inputData?.contact ?? ''} onChange={handleInputField} required />
            {inputError[1] && <p>Invalid Contact No</p>}
          </div>

          <div className="form-row">
            <label>{QUOTE_EMAIL}</label>
            <input type="email" name="email" value={inputData?.email ?? ''} onChange={handleInputField} required />
            {inputError[2] && <p>Invalid Email Id</p>}
          </div>

          {isFormSuccess && <div className="success">We hear you! We will get back to you for planning your vaccation.</div>}

          <div className="form-row">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default GetQuote;
