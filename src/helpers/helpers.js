export const limitInputs = (dayValue, monthValue) => {
  console.log('preparsed day ', dayValue)
  const numericDay = parseInt(dayValue);
  const numericMonth = parseInt(monthValue);
  let isValid;
  if (numericDay <= 1 || numericDay > 31) {
    isValid = false;
    console.log('This is current numericDay ', numericDay);
    isValid = false
  } else {
    isValid = true
  }

  return isValid;
}