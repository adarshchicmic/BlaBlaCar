import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {initialState} from '../store/slices/UserSlice';
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://c778-112-196-113-2.in.ngrok.io',
  prepareHeaders: headers => {
    if (initialState.token) {
      headers.append('authorization', initialState.token);
    }
    return headers;
  },
});

const baseQueryWithInterceptor = async (
  args: any,
  api: any,
  extraOptions: any,
) => {
  let result: any = await baseQuery(args, api, extraOptions);

  initialState.token = result?.meta?.response?.headers?.map?.authorization;

  return result;
};
export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});
