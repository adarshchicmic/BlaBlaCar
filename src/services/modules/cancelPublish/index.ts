import {api} from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    cancelPublish: build.mutation({
      query: ({publishId}) => ({
        url: 'cancel_publish/',
        method: 'POST',
        body: {id: publishId},
      }),
    }),
  }),
  overrideExisting: false,
});
export const {useCancelPublishMutation} = userApi;
