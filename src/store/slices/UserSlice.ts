import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
  user: {
    email: '',
    firstName: '',
    lastName: '',
    mobileNumber: '',
    password: '',
    dob: '',
    title: '',
  },
  token: '',
};

const userSlice: any = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    updateEmail: (state, action) => {
      const {email} = action.payload;
      state.user.email = email;
    },
    updateToken: (state, action) => {
      const {token} = action.payload;
      state.token = token;
    },
    updateName: (state, action) => {
      const {firstName, lastName} = action.payload;
      state.user.firstName = firstName;
      state.user.lastName = lastName;
    },
    updateDob: (state, action) => {
      const {dob} = action.payload;
      state.user.dob = dob;
    },
    updateTitle: (state, action) => {
      const {title} = action.payload;
      state.user.title = title;
    },
  },
});
export const {updateEmail, updateToken, updateName, updateDob, updateTitle} =
  userSlice.actions;
export default userSlice;
