import {api} from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    resetPassword: build.mutation({
      query: ({email, password}) => ({
        url: 'password_reset/',
        method: 'POST',
        body: {
          email: email,
          password: password,
          password_confirmation: password,
        },
      }),
    }),
  }),

  overrideExisting: true,
});
export const {useResetPasswordMutation} = userApi;
