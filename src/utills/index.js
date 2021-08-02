/**
 * Getting the seconds difference between future data and current date
 */
export const getSecondsDifference = () => {
  const futureDate = new Date(2021, 7, 10, 18);
  const todayDate = new Date();
  const getDiff = Math.round((futureDate - todayDate) / 1000);
  return getDiff;
}

export const allowOnlyAlphabets = value => {
  if (!value) return '';
  return value.replace(/[^a-zA-Z ]/gi, '');
};

export const allowOnlyNumber = value => {
  if (!value) return '';
  return value.replace(/[^\d]/g, '');
};

export const checkValidEmail = email => {
  if (email) {
    const emailString = email.split('@');
    return emailString[1].match(/\./g)?.length <= 2;
  }
  return false;
};