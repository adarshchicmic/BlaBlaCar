import {api} from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    rideWithPassenger: build.query({
      query: ({publishId}) => `publishes/${publishId}`,
    }),
  }),

  overrideExisting: true,
});
export const {useLazyRideWithPassengerQuery} = userApi;
