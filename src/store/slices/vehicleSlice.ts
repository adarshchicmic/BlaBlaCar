import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
  vehicle: {
    country: 'India',
    vehicleNumber: '',
    vehicleBrand: '',
    vehicleName: '',
    vehicleType: '',
    vehicleColor: '',
    vehicleModelYear: '',
  },
};

const vehicleSlice: any = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {
    // updateProfileData: (state, action) => {
    //   const {profileData} = action.payload;
    //   state.profileData = profileData;
    // },
    updateVehicleNumber: (state, action) => {
      const {vehicleNumber} = action.payload;
      state.vehicle.vehicleNumber = vehicleNumber;
    },
    updateVehicleInfo: (state, action) => {
      const {
        vehicleBrand,
        vehicleName,
        vehicleType,
        vehicleColor,
        vehicleModelYear,
      } = action.payload;
      state.vehicle.vehicleBrand = vehicleBrand;
      state.vehicle.vehicleName = vehicleName;
      state.vehicle.vehicleType = vehicleType;
      state.vehicle.vehicleColor = vehicleColor;
      state.vehicle.vehicleModelYear = vehicleModelYear;
    },
  },
});
export const {updateProfileData, updateVehicleNumber} = vehicleSlice.actions;
export default vehicleSlice;
