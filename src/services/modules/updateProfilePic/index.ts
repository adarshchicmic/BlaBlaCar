import {api} from '../../api';

export const userApi = api.injectEndpoints({
  endpoints: build => ({
    updateProfilePic: build.mutation({
      query: ({image}: any) => {
        const formData: any = new FormData();
        // body.append('Content-Type', 'file');
        formData.append('image', {
          name: image.path.slice(image.path.lastIndexOf('/')),
          uri: image.path,
          type: image.mime,
        });
        return {
          url: 'user_images/',
          method: 'PUT',
          body: formData,
        };
      },

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
export const {useUpdateProfilePicMutation} = userApi;
