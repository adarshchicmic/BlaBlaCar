import {api} from '../../api';
export const userApi: any = api.injectEndpoints({
  endpoints: build => ({
    bookedGet: build.query({
      query: () => 'booked_publishes/',
    }),
  }),
  overrideExisting: true,
});
export const {useLazyBookedGetQuery} = userApi;
