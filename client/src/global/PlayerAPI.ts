import { IPlayer } from "../models/IPlayer";
import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "http://localhost:9000/api/";
export const PlayerAPI = createApi({
    reducerPath: "PlayerAPI",
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    tagTypes: ["Players"],
    endpoints: (builder) => ({
        fetchAll: builder.query<IPlayer[], void>({
            query: () => "players",
            providesTags: (result) => result ?
            [...result.map(({ id }) => 
                ({ type: "Players" as const, id })),
                { type: "Players", id: "LIST" },
            ] : [{ type: "Players", id: "LIST" }],
        }),
        getOne: builder.query<IPlayer, number>({
            query: (id) => `players/${id}`,
            providesTags: (result, error, id) => [{ type: "Players", id }],
        }),
        add: builder.mutation<IPlayer, IPlayer>({
            query: (player) => {
                return {
                    url: `players`,
                    method: "POST",
                    body: player,
                }
            },
            invalidatesTags: [{ type: "Players", id: "LIST" }],
        }),
        update: builder.mutation<IPlayer, IPlayer>({
            query: ({ id, ...player }) => ({
                url: `players/${id}`,
                method: "PUT",
                body: player
            }),
            invalidatesTags: [{ type: "Players", id: "LIST" }],
        }),
        delete: builder.mutation<IPlayer, number>({
            query: (id) => ({
                url: `${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{ type: "Players", id: "LIST" }],
        })
    }),
});




