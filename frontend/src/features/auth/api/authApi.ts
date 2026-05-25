import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query"


export const authenticationApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/auth',
        credentials: 'include'
    }),
    endpoints: (builder) => ({

    })
})





