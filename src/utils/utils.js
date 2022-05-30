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
  const booleanArray = new Array(length);
  booleanArray.fill(false);
  booleanArray[index] = true;
  return booleanArray;
};
