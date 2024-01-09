import { app } from "@/config";
import { Pagination, RandomAnime } from "@/types";
import { RecomendationAnime } from "@/types/anime/recomendation";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface RandomAnimeResponse {
  data: RandomAnime;
}
interface ReccomendedAnimeResponse {
  data: RecomendationAnime[];
  pagination: Pagination;
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
      query: () => "/random/anime?sfw",
      transformResponse: (rawResult: RandomAnimeResponse) => rawResult.data,
    }),
    getRecommendedAnime: builder.query<ReccomendedAnimeResponse, void>({
      query: () => "recommendations/anime?sfw",
      keepUnusedDataFor: 3600 * 12, // half a day
    }),
  }),
});

export const { useGetRandomAnimeQuery, useGetRecommendedAnimeQuery } = animeApi;
