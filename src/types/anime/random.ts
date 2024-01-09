import { CommonMyAnimeList } from "../common-mal";
import { ImageUrl } from "../imageUrl";

export interface RandomAnime {
  mal_id: number;
  url: string;
  images: {
    jpg: ImageUrl;
    webp: ImageUrl;
  };
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string;
  };
  approved: boolean;
  titles: {
    type: string;
    title: string;
  }[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: {
    from: string;
    to: string;
    prop: {
      from: {
        day: number;
        month: number;
        year: number;
      };
      to: {
        day: number;
        month: number;
        year: number;
      };
      string: string;
    };
  };
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: {
    day: string;
    time: string;
    timezone: string;
    string: string;
  };
  producers: CommonMyAnimeList[];
  licensors: CommonMyAnimeList[];
  studios: CommonMyAnimeList[];
  genres: CommonMyAnimeList[];
  explicit_genres: CommonMyAnimeList[];
  themes: CommonMyAnimeList[];
  demographics: CommonMyAnimeList[];
}
