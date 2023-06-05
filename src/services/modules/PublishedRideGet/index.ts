import {api} from '../../api';
export const userApi: any = api.injectEndpoints({
  endpoints: build => ({
    getRide: build.query({
      query: () => 'publishes/',
    }),
  }),
  overrideExisting: true,
});
export const {useLazyGetRideQuery} = userApi;
