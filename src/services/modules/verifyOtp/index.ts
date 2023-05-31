import {api} from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    verifyOtp: build.mutation({
      query: ({otp}) => ({
        url: 'verify_otp/',
        method: 'POST',
        body: {
          otp: otp,
        },
      }),
    }),
  }),

  overrideExisting: true,
});
export const {useVerifyOtpMutation} = userApi;
