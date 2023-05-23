import {api} from '../../api';
const apiKey = 'AIzaSyDUzn63K64-sXadyIwRJExCfMaicagwGq4';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    google: build.mutation({
      query: ({
        currentLatitude,
        currentLongitude,
        destLatitude,
        destLongitude,
      }) => ({
        url: `https://maps.googleapis.com/maps/api/directions/json?origin=${currentLatitude},${currentLongitude}&destination=${destLatitude},${destLongitude}&key=${apiKey}`,
        method: 'POST',
      }),
    }),
  }),

  overrideExisting: true,
});
export const {useGoogleMutation} = userApi;
