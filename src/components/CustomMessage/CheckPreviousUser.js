let prevUser = '';

export const checkPreviousUser = user => {
  if (prevUser === user) {
    return false;
  } else {
    prevUser = user;
    return true;
  }
};
