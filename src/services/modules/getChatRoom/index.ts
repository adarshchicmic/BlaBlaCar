import {api} from '../../api';
export const userApi: any = api.injectEndpoints({
  endpoints: build => ({
    getChat: build.query({
      query: () => 'chats/',
    }),
  }),
  overrideExisting: true,
});
export const {useLazyGetChatQuery} = userApi;
