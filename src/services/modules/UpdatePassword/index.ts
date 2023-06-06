import {api} from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    updatePassword: build.mutation({
      query: ({currentPassword, newPassword, confirmPassword}) => ({
        url: 'update_password/',
        method: 'PATCH',
        body: {
          current_password: currentPassword,
          password: newPassword,
          password_confirmation: confirmPassword,
        },
      }),
    }),
  }),

  overrideExisting: true,
});
export const {useUpdatePasswordMutation} = userApi;
