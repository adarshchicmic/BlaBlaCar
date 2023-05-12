import {api} from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    logIn: build.mutation({
      query: ({email, password}) => ({
        url: 'users/sign_in',
        method: 'POST',
        body: {
          user: {
            email: email,
            password: password,
          },
        },
      }),
    }),
  }),
  overrideExisting: false,
});
export const {useLogInMutation} = userApi;
