import {createSlice} from '@reduxjs/toolkit';
import {COMMON_CONSTS} from '../../shared/Constants/Constants';
interface InitialState {
  numberOfSeats: number | any;
  date: string | any;
  leavingFrom: string | any;
  goingTo: string | any;
}
export const initialState: Partial<InitialState> = {
  numberOfSeats: 1,
  date: COMMON_CONSTS.TODAY,
  leavingFrom: COMMON_CONSTS.LEAVING_FROM,
  goingTo: COMMON_CONSTS.GOING_TO,
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
  },
});
export const {subtractSeats, addSeats, updateDate, swapLocation} =
  rideSlice.actions;
export default rideSlice;
