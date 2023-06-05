import {api} from '../../api';
export const addVehicleApi = api.injectEndpoints({
  endpoints: build => ({
    addVehicle: build.mutation({
      query: ({
        country,
        vehicleNumber,
        vehicleBrand,
        vehicleName,
        vehicleType,
        vehicleColor,
        vehicleModelYear,
      }) => ({
        url: 'vehicles/',
        method: 'POST',
        body: {
          vehicle: {
            country: country,
            vehicle_number: vehicleNumber,
            vehicle_brand: vehicleBrand,
            vehicle_name: vehicleName,
            vehicle_type: vehicleType,
            vehicle_color: vehicleColor,
            vehicle_model_year: vehicleModelYear,
          },
        },
      }),
    }),
  }),

  overrideExisting: true,
});
export const {useAddVehicleMutation} = addVehicleApi;
