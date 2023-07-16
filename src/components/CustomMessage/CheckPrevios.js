let prevMessage = '';
export const CheckPrevios = date => {
  if (prevMessage === date) {
    return false;
  } else {
    prevMessage = date;
    return true;
  }
};
