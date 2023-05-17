import {api} from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    verifyCode: build.mutation({
      query: ({phoneNumber, passcode}) => ({
        url: 'verify/',
        method: 'POST',
        body: {
          phone_number: phoneNumber,
          passcode: passcode,
        },
      }),
    }),
  }),
  overrideExisting: false,
});
export const {useVerifyCodeMutation} = userApi;
