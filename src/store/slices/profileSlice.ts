import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
  profileData: {},
  image: '',
};

const profileSlice: any = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {
    updateProfileData: (state, action) => {
      const {profileData} = action.payload;
      state.profileData = profileData;
    },
    updateImage: (state, action) => {
      const {image} = action.payload;
      state.image = image;
    },
  },
});
export const {updateProfileData, updateImage} = profileSlice.actions;
export default profileSlice;
