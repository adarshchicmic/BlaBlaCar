import {api} from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    forgotPassword: build.mutation({
      query: ({email}) => ({
        url: 'users/password',
        method: 'POST',
        body: {
          user: {
            email: email,
          },
        },
      }),
    }),
  }),

  overrideExisting: true,
});
export const {useForgotPasswordMutation} = userApi;
