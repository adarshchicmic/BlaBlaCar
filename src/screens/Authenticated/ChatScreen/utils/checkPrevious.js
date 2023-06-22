let prevDate = '';
export const fun = date => {
  if (prevDate === date) {
    return 1;
  } else {
    prevDate = date;
    return 0;
  }
};
