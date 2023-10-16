export interface MOVIE_DATA {
  title: string;
  id: number;
  backdrop_path: string;
  poster_path: string;
  genre_ids: number[],
  overview: string,
  release_date: string;
  vote_average: number;
  genres?: {id: number, name :string}[];
}

export interface PEOPLE_DATA {
  id: number;
  name: string;
  profile_path: string;
}
export interface ACTOR_DATA {
  id: number;
  name: string
  biography: string;
  profile_path: string;
  birthday: string;
  known_for_department: string;
  place_of_birth: string;
}
export interface PLAYED_IN_MOVIES {
  cast: {id: number, poster_path: string; title: string, vote_average: number, popularity: number}[]
}