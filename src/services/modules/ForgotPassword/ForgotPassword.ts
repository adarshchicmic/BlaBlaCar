import {api} from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    forgotPassword: build.mutation({
      query: ({email}) => ({
        url: 'send_otp/',
        method: 'POST',
        body: {
          email: email,
        },
      }),
    }),
  }),

  overrideExisting: true,
});
export const {useForgotPasswordMutation} = userApi;
