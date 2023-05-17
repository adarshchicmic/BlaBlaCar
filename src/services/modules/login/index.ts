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
        // `onStart` side-effect
        try {
          const result: any = await queryFulfilled;
          console.log(
            result?.meta?.response?.headers?.map?.authorization,
            'this is response tokne',
          );

          dispatch(
            updateToken({
              token: result?.meta?.response?.headers?.map?.authorization,
            }),
          );
        } catch (err) {
          console.log(err, 'Error over here');

          // `onError` side-effect
          // dispatch(messageCreated('Error fetching post!'))
        }
      },
    }),
  }),

  overrideExisting: true,
});
export const {useLogInMutation} = userApi;
