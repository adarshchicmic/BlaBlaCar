import {api} from '../../api';
export const userApi: any = api.injectEndpoints({
  endpoints: build => ({
    vehicle: build.query({
      query: () => 'vehicles/',
    }),
  }),
  overrideExisting: true,
});
export const {useLazyVehicleQuery} = userApi;
