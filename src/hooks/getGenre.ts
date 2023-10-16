import genres from "../data/genres";
export default function useGetGenre(movieGenres: number[]) {


  const foundGenre = genres.find((g, ) => g.id === movieGenres[0])!.title.toString();

  return foundGenre;
}