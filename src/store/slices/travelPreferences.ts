import {createSlice} from '@reduxjs/toolkit';
import {COMMON_CONSTS} from '../../shared/Constants/Constants';

export const initialState = {
  chattiness: COMMON_CONSTS.IAM_CHATTY_WHEN_I_FEEL_COMFORTABLE,
  music: COMMON_CONSTS.I_LL_JAM_DEPENDING_ON_THE_MOOD,
  smoking: COMMON_CONSTS.CIGARETTE_BREAKS_OUTSIDE_THE_CAR_ARE_OK,
  pets: COMMON_CONSTS.I_LL_TRAVEL_WITH_PETS_DEPENDING_ON_THE_ANIMALS,
};

const preferencesSlice: any = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {
    updateChattiness: (state, action) => {
      const {chattiness} = action.payload;
      state.chattiness = chattiness;
    },
    updateMusic: (state, action) => {
      const {music} = action.payload;
      state.music = music;
    },
    updateSmoking: (state, action) => {
      const {smoking} = action.payload;
      state.smoking = smoking;
    },
    updatePets: (state, action) => {
      const {pets} = action.payload;
      state.pets = pets;
    },
  },
});
export const {updateChattiness, updateMusic, updateSmoking, updatePets} =
  preferencesSlice.actions;
export default preferencesSlice;
