import {api} from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    createChat: build.mutation({
      query: ({receiverId, publishId}) => ({
        url: 'chats/',
        method: 'POST',
        body: {
          chat: {
            receiver_id: receiverId,
            publish_id: publishId,
          },
        },
      }),
    }),
  }),

  overrideExisting: true,
});
export const {useCreateChatMutation} = userApi;
