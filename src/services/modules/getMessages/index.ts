import {api} from '../../api';
export const userApi: any = api.injectEndpoints({
  endpoints: build => ({
    getMessages: build.query({
      query: ({chatId}) => `chats/${chatId}/messages`,
    }),
  }),
  overrideExisting: true,
});
export const {useLazyGetMessagesQuery} = userApi;
