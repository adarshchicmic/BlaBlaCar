import {api} from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    search: build.mutation({
      query: ({
        sourceLatitude,
        destinationLatitude,
        sourceLongitude,
        destinationLongitude,
        passCount,
        date,
      }) => ({
        url: 'search/',
        method: 'POST',
        body: {
          source_longitude: sourceLongitude,
          source_latitude: sourceLatitude,
          destination_longitude: destinationLongitude,
          destination_latitude: destinationLatitude,
          pass_count: passCount,
          date: date,
        },
      }),
    }),
  }),

  overrideExisting: true,
});
export const {useSearchMutation} = userApi;
