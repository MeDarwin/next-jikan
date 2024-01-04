import { ImageUrl } from "../imageUrl";

export interface RecomendationAnime {
  mal_id: string;
  entry: {
    mal_id: number;
    url: string;
    images: {
      jpg: ImageUrl;
      webp: ImageUrl;
    };
    title: string;
  }[];
  content: string;
  user: {
    url: string;
    username: string;
  };
}
