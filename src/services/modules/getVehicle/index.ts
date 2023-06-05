import {api} from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    vehicle: build.query({
      query: ({id}) => `vehicles/${id}`,
    }),
  }),
  overrideExisting: false,
});
export const {useLazyVehicleQuery} = userApi;
