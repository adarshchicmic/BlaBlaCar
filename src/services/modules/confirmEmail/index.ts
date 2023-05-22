import {api} from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    confirmEmail: build.mutation({
      query: ({email}) => ({
        url: 'users/',
        method: 'PUT',
        body: {
          email: email,
        },
      }),
    }),
  }),

  overrideExisting: true,
});
export const {useConfirmEmailMutation} = userApi;
