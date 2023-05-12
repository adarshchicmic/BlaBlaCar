import {api} from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    signUp: build.mutation({
      query: ({
        email,
        password,
        first_name,
        last_name,
        dob,
        title,
        phone_number,
      }: any) => ({
        url: 'users/',
        method: 'POST',
        body: {
          user: {
            email: email,
            password: password,
            first_name: first_name,
            last_name: last_name,
            dob: dob,
            title: title,
            phone_number: phone_number,
          },
        },
      }),
    }),
  }),
  overrideExisting: false,
});
export const {useSignUpMutation} = userApi;
