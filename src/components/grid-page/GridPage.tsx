import Stars from "../../UI/Stars";
import { IMAGE_PATH } from "../../data/API";
import { Link } from "react-router-dom";
import { MOVIE_DATA } from "../../data/interfaces";

interface Props {
  movies: MOVIE_DATA[] | [];
}
export default function Grid(props: Props) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[3rem] mt-[3rem] md:px-[4rem]">
      {props.movies.length > 20 &&
        props.movies.map((movie, i) => {
          const vote = movie
            ? Math.floor(movie.vote_average / 2) +
              movie.vote_average -
              Math.floor(movie.vote_average)
            : 0;
          return (
            <Link
              to={`../../movie/${movie.id}`}
              data-id={movie?.id}
              key={i}
              className="rounded-2xl cursor-pointer hover:scale-105 duration-500 ease-in-out pb-[1rem] h-[45rem] relative movie"
            >
              <img
                src={`${IMAGE_PATH}${"w342"}${movie?.poster_path}`}
                className="rounded-2xl w-full h-[70%] object-cover"
              />
              <p className="text-center sm:text-left text-4xl mt-[3rem] mb-[2rem] h-[10%]">
                {movie?.title}
              </p>
              <div className="px-[1rem] flex justify-center sm:justify-start">
                <Stars rating={vote} size={"md"} />
              </div>
            </Link>
          );
        })}
    </div>
  );
}
