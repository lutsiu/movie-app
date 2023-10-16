import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import GrayButton from "../../../UI/Buttons/GrayButton";
import MainButton from "../../../UI/Buttons/MainButton";
import ButtonWatchList from "../../../UI/Buttons/ButtonWatchList";
import Pagination from "../../../UI/Pagination";
import styles from "./style.module.scss";
import { BiMoviePlay } from "react-icons/bi";
import { IMAGE_PATH } from "../../../data/API";
import { MOVIE_DATA } from "../../../data/interfaces";
import { useNavigate } from "react-router-dom";

interface Props {
  movies: MOVIE_DATA[] | undefined;
  handleTranslateLeft: () => void;
  handleTranslateRight: () => void;
  activeMovie: number;

  translateByButton: (i: number) => void;
  width: number
}

export default function MainSliderContent(props: Props) {
  const navigate = useNavigate();
  return (
    <>
      {props.movies &&
        props.movies.map((movie, i) => {
          return (
            <div
              data-id={movie.id}
              key={i}
              className={`${styles.slide} movie`}
              style={{
                transform: `translateX(-${props.activeMovie * 100}%)`,
                backgroundImage: `url(${IMAGE_PATH}${"original"}${
                  movie.poster_path
                })`,
              }}
            >
              <h1 className="absolute text-5xl md:text-7xl font-bold top-[3rem] left-[3rem]">
                {movie.title}
              </h1>
              <div className="w-full flex absolute top-[50%] translate-y-[-50%] justify-between  p-[2rem]">
                <GrayButton onClick={props.handleTranslateLeft}>
                  <FaChevronLeft />
                </GrayButton>
                <GrayButton onClick={props.handleTranslateRight}>
                  <FaChevronRight />
                </GrayButton>
              </div>
              <div className="w-full absolute flex justify-between  bottom-[2rem]  p-[2rem]">
                <ButtonWatchList title={true} />
                <Pagination
                  activeMovie={props.activeMovie}
                  amountOfButtons={props.movies ? props.movies.length : 0}
                  translateByButton={props.translateByButton}
                />
                <MainButton onClick={() => navigate(`/movie/${movie.id}`)}>
                  {props.width > 575 ? (
                    "More info"
                  ) : (
                    <BiMoviePlay className="w-[2rem] h-[2rem]" />
                  )}
                </MainButton>
              </div>
            </div>
          );
        })}
    </>
  );
}
