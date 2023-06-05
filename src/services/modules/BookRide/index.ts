import {api} from '../../api';
export const addVehicleApi = api.injectEndpoints({
  endpoints: build => ({
    book: build.mutation({
      query: ({publishId, seat}) => ({
        url: 'book_publish/',
        method: 'POST',
        body: {
          passenger: {
            publish_id: publishId, // Replace with the actual publish ID
            seats: seat, // Replace with the number of seats to book
          },
        },
      }),
    }),
  }),

  overrideExisting: true,
});
export const {useBookMutation} = addVehicleApi;
