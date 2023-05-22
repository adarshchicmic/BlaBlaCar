import {createSlice} from '@reduxjs/toolkit';
import {COMMON_CONSTS} from '../../shared/Constants/Constants';
interface InitialState {
  numberOfSeats: number | any;
  date: string | any;
  leavingFrom: string | any;
  goingTo: string | any;
  statsLeavingFrom: any;
  statsGoingTo: any;
  pickUp: string | any;
  dropOff: string | any;
  statsPickUp: any;
  statsDropOff: any;
}
export const initialState: Partial<InitialState> = {
  numberOfSeats: 1,
  date: COMMON_CONSTS.TODAY,
  leavingFrom: COMMON_CONSTS.LEAVING_FROM,
  goingTo: COMMON_CONSTS.GOING_TO,
  statsLeavingFrom: {
    latitude: '',
    longitude: '',
  },
  statsGoingTo: {
    latitude: '',
    longitude: '',
  },
  pickUp: '',
  dropOff: '',
  statsPickUp: {
    latitude: '',
    longitude: '',
  },
  statsDropOff: {
    latitude: '',
    longitude: '',
  },
};

const rideSlice: any = createSlice({
  name: 'rideSlice',
  initialState,
  reducers: {
    addSeats: state => {
      if (state.numberOfSeats < 8) {
        state.numberOfSeats += 1;
      }
    },
    subtractSeats: state => {
      if (state.numberOfSeats > 1) {
        state.numberOfSeats -= 1;
      }
    },
    updateDate: (state, action) => {
      const {date} = action.payload;
      state.date = date;
    },
    swapLocation: state => {
      const temp = state.leavingFrom;
      state.leavingFrom = state.goingTo;
      state.goingTo = temp;
    },
    updateLeavingFrom: (state, action) => {
      const {leavingFrom} = action.payload;
      state.leavingFrom = leavingFrom;
    },
    updateGoingTo: (state, action) => {
      const {goingTo} = action.payload;
      state.goingTo = goingTo;
    },
    updateStatsLeavingFrom: (state, action) => {
      const {latitude, longitude} = action.payload;
      state.statsLeavingFrom.latitude = latitude;
      state.statsLeavingFrom.longitude = longitude;
    },
    updateStatsGoingTo: (state, action) => {
      const {latitude, longitude} = action.payload;
      state.statsGoingTo.latitude = latitude;
      state.statsGoingTo.longitude = longitude;
    },
    updatePickUp: (state, action) => {
      const {pickUp, latitude, longitude} = action.payload;
      state.pickUp = pickUp;
      state.statsPickUp.latitude = latitude;
      state.statsPickUp.longitude = longitude;
    },
    updateDropOff: (state, action) => {
      const {dropOff, latitude, longitude} = action.payload;
      state.dropOff = dropOff;
      state.statsDropOff.latitude = latitude;
      state.statsDropOff.longitude = longitude;
    },
  },
});
export const {
  updatePickUp,
  updateDropOff,
  subtractSeats,
  addSeats,
  updateDate,
  swapLocation,
  updateLeavingFrom,
  updateGoingTo,
  updateStatsLeavingFrom,
  updateStatsGoingTo,
} = rideSlice.actions;
export default rideSlice;
