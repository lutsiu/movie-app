import useFetchData from "../../../hooks/useFetchData";
import ButtonWatchList from '../../../UI/Buttons/ButtonWatchList';
import MainButton from "../../../UI/Buttons/MainButton";
import styles from "./style.module.scss";
import { MOVIE_DATA } from "../../../data/interfaces";
import useResize from "../../../hooks/useResize";
import { IMAGE_PATH } from "../../../data/API";
import getGenre from "../../../hooks/getGenre";
import { useNavigate } from "react-router-dom";
export default function Popular() {
  const {width} =  useResize();

  let genre: string;
  let images = 3;

  if (width < 768 && width >= 576) {
    images = 4;
  }

  const {
    data,
  }: {
    data: {results: MOVIE_DATA[] } | null ;
    isLoading: boolean;
  } = useFetchData("popular");

  const movies = data?.results.filter((_, i) => i > 4 && i < (images === 3? 8 : 9));

  const navigate = useNavigate();

  return (
    <div className="mt-[6rem]">
      <h2 className=" text-4xl font-bold text-center">Popular on Lutsiu Movies</h2>
      <div className="w-full flex sm:gap-[2%] sm:justify-between md:gap-[3rem] mt-[3rem] flex-wrap">
        {movies && movies.map((movie, i) => {
          if (movie.genre_ids) {
             genre = getGenre(movie.genre_ids)
          }
          return (
            <div key={i} className={`${styles.popularCard} movie`} data-id={movie.id}  style={{backgroundImage: `url(${IMAGE_PATH}${'original'}${movie.poster_path})`}}>
              <h3 className="absolute left-[2.1rem] top-[2.1rem] text-4xl font-bold">
                {movie.title}
              </h3>
              <div className="absolute w-full bottom-[7rem] flex justify-between px-[1rem] text-gray-200 text-2xl">
                <span>{`${movie.vote_average}`}</span>
                <span>{genre}</span>
              </div>
              <div className="absolute bottom-0 p-[1rem] flex justify-between w-full">
                <ButtonWatchList title={false}/>
                <MainButton onClick={() => navigate(`/movie/${movie.id}`)}>More info</MainButton>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
