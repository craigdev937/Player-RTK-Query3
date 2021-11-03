import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "http://localhost:9000/api";
export const PlayerAPI = createApi({
    reducerPath: "PlayerAPI",
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    tagTypes: ["Players"],
    endpoints: (builder) => ({
        fetchAll: builder.query({
            query: () => `/players`,
            providesTags: (result) =>
            result ?
            [...result.map(({ id }) => 
                ({ type: "Players", id })),
                { type: "Players", id: "LIST" },
            ] : [{ type: "Players", id: "LIST" }],
        }),
    }),
});





