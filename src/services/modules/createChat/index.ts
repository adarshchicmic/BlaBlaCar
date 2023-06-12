import {api} from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    createChat: build.mutation({
      query: ({id}) => ({
        url: 'chats/',
        method: 'POST',
        body: {
          receiver_id: id,
        },
      }),
    }),
  }),

  overrideExisting: true,
});
export const {useCreateChatMutation} = userApi;
