import {createSlice} from '@reduxjs/toolkit';

interface InitialState {
  source: string;
  destination: string;
  source_longitude: any;
  source_latitude: any;
  destination_longitude: any;
  destination_latitude: any;
  passengers_count: any;
  add_city: any;
  add_city_latitude: any;
  add_city_longitude: any;
  date: any;
  time: any;
  set_price: any;
  about_ride: any;
  vehicle_id: any;
  select_route: any;
  estimatedTime: any;
  bookInstantly: any;
  midSeat: any;
  maxPrice: any;
  minPrice: any;
}
export const initialState: Partial<InitialState> = {
  add_city: 'punjab',
  add_city_latitude: '',
  add_city_longitude: '',
  date: '',
  estimatedTime: '',
  set_price: 0,
  about_ride: '',
  vehicle_id: 0,
  time: '12:00',
  bookInstantly: 'true',
  midSeat: true,
  select_route: {},
  maxPrice: 0,
  minPrice: 0,
};

const publishRideSlice: any = createSlice({
  name: 'publishrRideSlice',
  initialState,
  reducers: {
    addPrice: state => {
      state.set_price < state.maxPrice ? state.set_price++ : null;
    },
    subtractPrice: state => {
      state.set_price > state.minPrice ? state.set_price-- : null;
    },
    updatePublishDate: (state, action) => {
      const {date} = action.payload;
      state.date = date;
    },
    updatePublishTime: (state, action) => {
      const {time} = action.payload;
      state.time = time;
    },
    updateCity: (state, action) => {
      const {city, latitude, longitude} = action.payload;
      state.add_city = city;
      state.add_city_latitude = latitude;
      state.add_city_longitude = longitude;
    },
    updatePrice: (state, action) => {
      const {price} = action.payload;
      state.set_price = price;
    },
    updateAboutRide: (state, action) => {
      const {about} = action.payload;
      state.about_ride = about;
    },
    updateVehicleId: (state, action) => {
      const {vehicleId} = action.payload;
      state.vehicle_id = vehicleId;
    },
    updateRoadDistanceDuration: (state, action) => {
      const {road, distance, duration} = action.payload;
      state.select_route.distance = distance;
      state.set_price = parseInt(distance.replace(/[^\d+]/g, '')) * 2;
      state.minPrice = parseInt(distance.replace(/[^\d+]/g, '')) * 1.75;
      state.maxPrice = parseInt(distance.replace(/[^\d+]/g, '')) * 2.25;
      state.select_route.estimatedTime = duration;
      state.select_route.road_name = road;
    },
    updateRouteDetail: (state, action) => {
      const {selectRoute} = action.payload;
      state.select_route = {selectRoute};
    },
    updateMidSeat: (state, action) => {
      const {midSeat} = action.payload;
      state.midSeat = midSeat;
    },
    updateBookInstantly: (state, action) => {
      const {instant} = action.payload;
      state.bookInstantly = instant;
    },
  },
});
export const {
  updateBookInstantly,
  updateMidSeat,
  updatePublishDate,
  updatePublishTime,
  updateCity,
  updatePrice,
  updateAboutRide,
  updateVehicleId,
  updateRoadDistanceDuration,
  updateRouteDetail,
  addPrice,
  subtractPrice,
} = publishRideSlice.actions;
export default publishRideSlice;
