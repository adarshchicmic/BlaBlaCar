import {api} from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    updateProfile: build.mutation({
      query: ({
        email,
        firstName,
        lastName,
        dob,
        title,
        phoneNumber,
        bio,
        travelPreferences,
        postalAddress,
      }) => ({
        url: 'users/',
        method: 'PUT',
        body: {
          user: {
            email: email,
            first_name: firstName,
            last_name: lastName,
            dob: dob,
            title: title,
            phone_number: phoneNumber,
            bio: bio,
            travel_preferences: travelPreferences,
            postal_address: postalAddress,
          },
        },
      }),
      //   async onQueryStarted(id, {dispatch, queryFulfilled}) {
      //     try {
      //       const result: any = await queryFulfilled;
      //       console.log(
      //         result?.meta?.response?.headers?.map?.authorization,
      //         'this is response tokne',
      //       );
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
export const {useUpdateProfileMutation} = userApi;
