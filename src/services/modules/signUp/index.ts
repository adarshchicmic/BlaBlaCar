import {updateToken} from '../../../store/slices/UserSlice';
import {api} from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    signUp: build.mutation({
      query: ({email, password, firstName, lastName, dob, title}) => ({
        url: 'users/',
        method: 'POST',
        body: {
          user: {
            email: email,
            password: password,
            first_name: firstName,
            last_name: lastName,
            dob: dob,
            title: title,
          },
        },
      }),
      async onQueryStarted(id, {dispatch, queryFulfilled}) {
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
export const {useSignUpMutation} = userApi;
