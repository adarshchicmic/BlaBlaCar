import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
  isLoading: false,
};

const apiResultSlice: any = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {
    updateLoading: (state, action) => {
      const {profileData} = action.payload;
      state.isLoading = profileData;
    },
  },
});
export const {updateLoading} = apiResultSlice.actions;
export default apiResultSlice;
