import ButtonDrop from "../../../../UI/Buttons/ButtonDrop";
import MainButton from "../../../../UI/Buttons/MainButton";
import styles from "../style.module.scss";
import { MOVIE_DATA } from "../../../../data/interfaces";
import { useNavigate } from "react-router-dom";
import { IMAGE_PATH } from "../../../../data/API";
interface Props {
  movies: MOVIE_DATA[] | [];
  activeMovie: number;
  TRANSLATE: number;
}

export default function MyMovies(props: Props) {
  const navigate = useNavigate();
  return (
    <div className="mt-[3rem]">
      {props.movies.length === 0 && <span className="block w-fit mx-auto text-2xl">Watchlist is empty:(</span>}
      {props.movies.length > 0 && (
        <div
          className="flex mt-[3rem] h-[14rem] gap-[3rem] w-max duration-500 ease-in-out"
          style={{
            transform: `translateX(-${props.TRANSLATE * props.activeMovie}rem)`,
          }}
        >
          {props.movies &&
            props.movies.map((movie, i) => {
              return (
                <div
                  data-id={movie.id}
                  key={i}
                  className={`${styles.image} movie`}
                  style={{
                    backgroundImage: `url(${IMAGE_PATH}${"original"}${
                      movie.poster_path
                    })`,
                  }}
                >
                  <span className="text-3xl font-semibold relative">
                    {movie.title}
                  </span>

                  <div className="absolute bottom-[1rem] flex justify-between w-[90%]">
                    <ButtonDrop />
                    <MainButton onClick={() => navigate(`/movie/${movie.id}`)} >More info</MainButton>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
