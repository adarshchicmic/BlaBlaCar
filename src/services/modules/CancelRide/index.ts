import {api} from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    cancelRide: build.mutation({
      query: ({publishId}) => ({
        url: 'cancel_booking',
        method: 'POST',
        body: {id: publishId},
      }),
    }),
  }),
  overrideExisting: false,
});
export const {useCancelRideMutation} = userApi;
