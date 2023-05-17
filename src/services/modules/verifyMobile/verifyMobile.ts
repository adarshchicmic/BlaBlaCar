import {api} from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    verifyMobile: build.mutation({
      query: ({phoneNumber}) => ({
        url: 'phone/',
        method: 'POST',
        body: {
          phone_number: phoneNumber,
        },
      }),
    }),
  }),
  overrideExisting: false,
});
export const {useVerifyMobileMutation} = userApi;
