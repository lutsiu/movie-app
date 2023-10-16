import useFetchData from "../../hooks/useFetchData";
import { useParams } from "react-router-dom";
import { MOVIE_DATA } from "../../data/interfaces";
import GridPage from "../../components/grid-page/GridPage";
import genresObject from "../../data/genres";
export default function GenreMovies() {
  const { genreId } = useParams();

  const title = genresObject.find((genre) => genre.id === +genreId!)!.title;

  const { data: movies1 } = useFetchData("genre", 1, +genreId!);
  const { data: movies2 } = useFetchData("genre", 2, +genreId!);
  const { data: movies3 } = useFetchData("genre", 3, +genreId!);

  let movies: MOVIE_DATA[] | [] = [];

  if (movies1 && movies2 && movies3) {
    movies = [movies1.results, movies2.results, movies3.results].flat(1);
  }

  return (
    <div className="mt-[4rem]">
      <h1 className="w-fit mx-auto text-5xl font-black">{`${title} movies`}</h1>
      <GridPage movies={movies} />
    </div>
  );
}
