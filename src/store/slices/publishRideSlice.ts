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
  date: '',
  estimatedTime: '',
  set_price: 0,
  about_ride: '',
  vehicle_id: 0,
  time: '12:00',
  bookInstantly: 'true',
  midSeat: true,
  select_route: {
    road_name: '',
    distance: 0,
    duration: 0,
    route_deatils: {
      a: 'a',
      b: 'b',
    },
  },
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
      const {city} = action.payload;
      state.add_city = city;
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
      state.set_price = parseFloat(distance) * 2;
      state.minPrice = parseFloat(distance) * 2;
      state.maxPrice = parseFloat(distance) * 3;
      state.select_route.estimatedTime = duration;
      state.select_route.road_name = road;
    },
    updateRouteDetail: (state, action) => {
      const {a, b} = action.payload;
      state.select_route.route_deatils.a = a;
      state.select_route.route_deatils.b = b;
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