import {api} from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    signOut: build.mutation({
      query: ({publishId}) => ({
        url: 'cancel_publish',
        method: 'POST',
        body: {id: publishId},
      }),
    }),
  }),
  overrideExisting: false,
});
export const {useSignOutMutation} = userApi;
