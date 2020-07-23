export interface TvShow {
  externals: Externals;
  genres: string[];
  id: number;
  image: Image;
  language: string;
  name: string;
  network: Network;
  officialSite: string;
  premiered: string;
  rating: {
    average: number
  };
  runtime: number;
  schedule: Schedule;
  status: string;
  summary: string;
  type: string;
  updated: number;
  url: string;
  webChannel: string;
  weight: number;
  links: Links;
}
export class Externals {
  imdb: string;
  thetvdb: number;
  tvrage: number;
}
export class Network {
  country: {
    code: string;
    name: string;
    timezone: string;
  };
  id: number;
  name: string;
}
export class Links {
  previousepisode: {
    href: string;
  };
  self: {
    href: string;
  };
}
export class Image {
  medium: string;
  original: string;
}
export class Schedule {
  days: string[];
  time: string;
}
