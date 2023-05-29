import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// import {token, updateTokenn} from './token';

// import userSlice from '../store/slices/UserSlice';
// import {store} from '../store/store';
// const {dispatch}: any = store;
// console.log(dispatch, 'this is dispatch');
// import {store} from '../store/store';
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://558c-112-196-113-2.ngrok-free.app/',
  prepareHeaders: (headers, {getState}) => {
    const {userSlice}: any = getState();
    const {token}: any = userSlice;
    if (token) {
      headers.append('authorization', token);
    }
    return headers;
  },
});

const baseQueryWithInterceptor = async (
  args: any,
  api: any,
  extraOptions: any,
) => {
  let result = await baseQuery(args, api, extraOptions);
  return result;
};
export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});
