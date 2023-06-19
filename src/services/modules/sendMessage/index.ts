import {api} from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    sendMessage: build.mutation({
      query: ({chatId, content, receiverId}) => ({
        url: `chats/${chatId}/messages`,
        method: 'POST',
        body: {
          message: {
            content: content,
            receiver_id: receiverId,
          },
        },
      }),
    }),
  }),
  overrideExisting: false,
});
export const {useSendMessageMutation} = userApi;
