import {api} from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    search: build.query({
      query: ({
        sourceLatitude,
        destinationLatitude,
        sourceLongitude,
        destinationLongitude,
        passCount,
        date,
        orderBy,
      }) => ({
        url: 'search/',
        params: {
          source_longitude: sourceLongitude,
          source_latitude: sourceLatitude,
          destination_longitude: destinationLongitude,
          destination_latitude: destinationLatitude,
          passengers_count: passCount,
          date: date,
          order_by: orderBy,
        },
      }),
    }),
  }),

  overrideExisting: true,
});
export const {useLazySearchQuery} = userApi;
