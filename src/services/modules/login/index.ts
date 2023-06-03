import {updateToken} from '../../../store/slices/UserSlice';
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
      async onQueryStarted(id, {dispatch, queryFulfilled}) {
        try {
          const result: any = await queryFulfilled;
          dispatch(
            updateToken({
              token: result?.meta?.response?.headers?.map?.authorization,
            }),
          );
        } catch (err) {
          console.log(err, 'Error over here');
        }
      },
    }),
  }),

  overrideExisting: true,
});
export const {useLogInMutation} = userApi;
