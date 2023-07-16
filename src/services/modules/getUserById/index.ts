import {api} from '../../api';
export const userApi: any = api.injectEndpoints({
  endpoints: build => ({
    getUserById: build.query({
      query: ({id}) => `users/${id}`,
    }),
  }),
  overrideExisting: true,
});
export const {useLazyGetUserByIdQuery} = userApi;
