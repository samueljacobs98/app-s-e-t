export const getNewSlide = (increment, data, currentSlide) => {
  let newSlide;
  if (increment) {
    newSlide = currentSlide === data.length - 1 ? 0 : currentSlide + 1;
  } else {
    newSlide = !currentSlide ? data.length - 1 : currentSlide - 1;
  }
  return newSlide;
};

export const getBooleanArray = (length, index) => {
  const booleanArray = [];
  for (let i = 0; i < length; i++) {
    booleanArray.push(false);
  }
  booleanArray[index] = true;
  return booleanArray;
};
