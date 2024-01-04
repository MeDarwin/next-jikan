import { app } from "@/config";
import { RandomAnime } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface RandomAnimeResponse {
  data: RandomAnime;
}

export const animeApi = createApi({
  reducerPath: "animeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: app.apiUrl,
    headers: {
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => ({
    getRandomAnime: builder.query<RandomAnime, void>({
      query: () => "/random/anime",
      transformResponse: (rawResult: RandomAnimeResponse) => rawResult.data,
    }),
  }),
});

export const { useGetRandomAnimeQuery } = animeApi;
