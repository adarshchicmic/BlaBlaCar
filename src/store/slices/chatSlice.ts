import {createSlice} from '@reduxjs/toolkit';

interface InitialState {
  chat: any;
}
export const initialState: InitialState = {
  chat: [],
};

const profileSlice: any = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {
    updateNewUser: (state, action) => {
      const {chatdata} = action.payload;
      state.chat = state.chat.push(chatdata);
    },
  },
});
export const {updateProfileData, updateImage} = profileSlice.actions;
export default profileSlice;
