// import {updateToken} from '../../../store/slices/UserSlice';
import {api} from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    emailExist: build.mutation({
      query: ({email}) => ({
        url: 'email_check/',
        params: {
          email: email,
        },
      }),
    }),
  }),

  overrideExisting: true,
});
export const {useEmailExistMutation} = userApi;
