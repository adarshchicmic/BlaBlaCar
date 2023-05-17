import {api} from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    profile: build.query({
      query: () => 'users/',
    }),
  }),
  overrideExisting: false,
});
export const {useLazyProfileQuery} = userApi;
