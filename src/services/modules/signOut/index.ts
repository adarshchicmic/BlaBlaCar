import {api} from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    signOut: build.mutation({
      query: () => ({
        url: 'users/sign_out',
        method: 'DELETE',
      }),
    }),
  }),
  overrideExisting: false,
});
export const {useSignOutMutation} = userApi;
