import {api} from '../../api';
export const userApi: any = api.injectEndpoints({
  endpoints: build => ({
    vehicles: build.query({
      query: () => 'vehicles/',
    }),
  }),
  overrideExisting: true,
});
export const {useLazyVehiclesQuery} = userApi;
