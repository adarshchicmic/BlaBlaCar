// import {updateToken} from '../../../store/slices/UserSlice';
import {api} from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    emailExist: build.mutation({
      query: ({email}) => ({
        url: 'users/',
        method: 'GET',
        body: {
          user: {
            email: email,
          },
        },
      }),
      //   async onQueryStarted(id, {dispatch, queryFulfilled}) {
      //     try {
      //       const result: any = await queryFulfilled;

      //       dispatch(
      //         updateToken({
      //           token: result?.meta?.response?.headers?.map?.authorization,
      //         }),
      //       );
      //     } catch (err) {
      //       console.log(err, 'Error over here');

      //       // `onError` side-effect
      //       // dispatch(messageCreated('Error fetching post!'))
      //     }
      //   },
    }),
  }),

  overrideExisting: true,
});
export const {useEmailExistMutation} = userApi;
