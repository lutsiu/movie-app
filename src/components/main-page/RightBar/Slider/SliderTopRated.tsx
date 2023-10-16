import ButtonWatchList from "../../../../UI/Buttons/ButtonWatchList";
import MainButton from "../../../../UI/Buttons/MainButton";
import styles from "../style.module.scss";
import { MOVIE_DATA } from "../../../../data/interfaces";
import { IMAGE_PATH } from "../../../../data/API";
import getGenre from "../../../../hooks/getGenre";
import { useNavigate } from "react-router-dom";
interface Props {
  movies: MOVIE_DATA[] | undefined;
  activeMovie: number;
  TRANSLATE: number;
}
export default function MyMovies(props: Props) {
  const navigate = useNavigate();
  return (
    <div className="mt-[3rem]">
      <div
        className="flex mt-[3rem] h-[14rem] gap-[3rem] w-max duration-500 ease-in-out"
        style={{
          transform: `translateX(-${props.TRANSLATE * props.activeMovie}rem)`,
        }}
      >
        {props.movies &&
          props.movies.map((movie, i) => {
            const genre = getGenre(movie.genre_ids);
            return (
              <div
                key={i}
                data-id={movie.id}
                className={`${styles.image} movie`}
                style={{
                  backgroundImage: `url(${IMAGE_PATH}${"w342"}${
                    movie.poster_path
                  })`,
                }}
              >
                <span className="text-3xl font-semibold relative">
                  {movie.title}
                </span>
                <div className="w-full flex justify-between px-[1rem] text-2xl text-gray-300 font-bold absolute right-[0rem] top-[50%] translate-y-[-50%]">
                  <span>{movie.vote_average}</span>
                  <span>{genre}</span>
                </div>
                <div className="absolute bottom-[1rem] flex justify-between w-[90%] gap-[1rem]">
                  <ButtonWatchList title={false} />
                  <MainButton onClick={() => navigate(`/movie/${movie.id}`)}>More info</MainButton>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
