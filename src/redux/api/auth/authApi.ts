import { baseApi } from "../baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints:(builder) =>{
        signup: builder.mutation({
            query:(userInfo) =>{
                url: '/auth/register',
                method: 'POST',
            }

        })
    }
});
