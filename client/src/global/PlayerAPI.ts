import { IPlayer } from "../models/IPlayer";
import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "http://localhost:9000/api/";
export const PlayerAPI = createApi({
    reducerPath: "PlayerAPI",
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    tagTypes: ["Players"],
    endpoints: (builder) => ({
        fetchAllPlayers: builder.query<IPlayer[], void>({
            query: () => "players",
            // providesTags: ["Players"],
            providesTags: (result) => result ?
            [...result.map(({ id }) => 
                ({ type: "Players" as const, id })),
                { type: "Players", id: "LIST" },
            ] : [{ type: "Players", id: "LIST" }],
        }),
        getOnePlayer: builder.query<IPlayer, number>({
            query: (id) => `players/${id}`,
            // providesTags: (result, error, arg) => ["Players"],
            providesTags: ["Players"],
        }),
        addPlayer: builder.mutation<IPlayer, IPlayer>({
            query: (player) => {
                return {
                    url: `players`,
                    method: "POST",
                    body: player,
                }
            },
            invalidatesTags: [{ type: "Players", id: "LIST" }],
        }),
        updatePlayer: builder.mutation<IPlayer, IPlayer>({
            query: ({ id, ...player }) => ({
                url: `${id}`,
                method: "PUT",
                body: player
            }),
            // invalidatesTags: ["Players"],
            invalidatesTags: [{ type: "Players", id: "LIST" }],
        }),
        deletePlayer: builder.mutation<IPlayer, number>({
            query: (id) => ({
                url: `${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Players"],
        })
    }),
});




