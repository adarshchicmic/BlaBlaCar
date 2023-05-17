import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
  profileData: {},
};

const profileSlice: any = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {
    updateProfileData: (state, action) => {
      const {profileData} = action.payload;
      state.profileData = profileData;
    },
  },
});
export const {updateProfileData} = profileSlice.actions;
export default profileSlice;
