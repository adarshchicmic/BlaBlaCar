let prevTime = '';

export const checkPreviousTime = time => {
  if (prevTime === time) {
    return false;
  } else {
    prevTime = time;
    return true;
  }
};
