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
  // console.log(length, index);
  const booleanArray = new Array(length);
  // console.log(booleanArray);
  booleanArray.fill(false);
  // console.log(booleanArray);
  booleanArray[index] = true;
  // console.log(booleanArray);
  return booleanArray;
};
