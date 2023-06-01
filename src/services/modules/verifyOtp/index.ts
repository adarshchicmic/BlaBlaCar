import {api} from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    verifyOtp: build.mutation({
      query: ({otp, email}) => ({
        url: 'verify_otp/',
        method: 'POST',
        body: {
          otp: otp,
          email: email,
        },
      }),
    }),
  }),

  overrideExisting: true,
});
export const {useVerifyOtpMutation} = userApi;
