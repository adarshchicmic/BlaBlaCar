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
  returnRide: number;
  passengers_countR: any;
  add_cityR: any;
  add_city_latitudeR: any;
  add_city_longitudeR: any;
  dateR: any;
  timeR: any;
  set_priceR: any;
  about_rideR: any;
  vehicle_idR: any;
  select_routeR: any;
  estimatedTimeR: any;
  bookInstantlyR: any;
  midSeatR: any;
  maxPriceR: any;
  minPriceR: any;
}
export const initialState: Partial<InitialState> = {
  add_city: 'punjab',
  add_city_latitude: '',
  add_city_longitude: '',
  date: '',
  estimatedTime: '',
  set_price: 0,
  about_ride: '',
  vehicle_id: null,
  time: '12:00',
  bookInstantly: 'true',
  midSeat: true,
  select_route: {},
  maxPrice: 0,
  minPrice: 0,
  returnRide: 0,
  passengers_countR: 0,
  add_cityR: '',
  add_city_latitudeR: '',
  add_city_longitudeR: '',
  dateR: '',
  timeR: '12:00',
  set_priceR: 0,
  bookInstantlyR: 'true',
  midSeatR: true,
  maxPriceR: 0,
  minPriceR: 0,
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
    addPriceR: state => {
      state.set_priceR < state.maxPriceR ? state.set_priceR++ : null;
    },
    subtractPriceR: state => {
      state.set_priceR > state.minPriceR ? state.set_priceR-- : null;
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
      state.set_priceR = parseInt(distance.replace(/[^\d+]/g, '')) * 2;
      state.minPriceR = parseInt(distance.replace(/[^\d+]/g, '')) * 1.75;
      state.maxPriceR = parseInt(distance.replace(/[^\d+]/g, '')) * 2.25;
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
    updateReturnRide: (state, action) => {
      const {returnRide} = action.payload;
      state.returnRide = returnRide;
    },
    updatePublishDateReturn: (state, action) => {
      const {publishDateReturn} = action.payload;
      state.dateR = publishDateReturn;
    },
    updatePublishTimeReturn: (state, action) => {
      const {returnTime} = action.payload;
      state.timeR = returnTime;
    },
    updateReturnPrice: (state, action) => {
      const {returnPrice} = action.payload;
      state.set_priceR = returnPrice;
    },
  },
});
export const {
  updateReturnPrice,
  updatePublishDateReturn,
  updatePublishTimeReturn,
  addPriceR,
  subtractPriceR,
  updateReturnRide,
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
