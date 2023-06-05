import {api} from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    deleteVehicle: build.mutation({
      query: ({vehicleId}) => ({
        url: `vehicles/${vehicleId}`,
        method: 'DELETE',
      }),
    }),
  }),
  overrideExisting: false,
});
export const {useDeleteVehicleMutation} = userApi;
