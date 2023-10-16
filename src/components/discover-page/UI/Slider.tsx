import Header from "./Header";
import ShiftButtons from "./ShiftButtons";
import useSlider from "../../../hooks/useSlider";
import useResize from "../../../hooks/useResize";
import { MOVIE_DATA } from "../../../data/interfaces";
import { IMAGE_PATH } from "../../../data/API";
import ButtonWatchList from "../../../UI/Buttons/ButtonWatchList";
import { useNavigate } from "react-router-dom";
import MainButton from "../../../UI/Buttons/MainButton";
interface Props {
  title: string;
  movies: MOVIE_DATA[] | [];
}
export default function Slider(props: Props) {
  const { width } = useResize();
  const navigate = useNavigate();

  const ceil = (i: number): number => {
    return Math.ceil(props.movies.length / i);
  };

  let SLIDES = ceil(5);

  if (width < 993 && width >= 768) {
    SLIDES = ceil(4);
  }
  if (width < 768 && width >= 576) {
    SLIDES = ceil(3);
  }
  if (width < 576) {
    SLIDES = ceil(2);
  }
  const { activeMovie, handleTranslateLeft, handleTranslateRight } =
    useSlider(SLIDES);

  return (
    <>
      <div className="flex justify-between sm:pr-[2%] md:pr-[1%] items-center mt-[4rem] mb-[2rem]">
        <Header title={props.title} />

        <ShiftButtons
          handleTranslateLeft={handleTranslateLeft}
          handleTranslateRight={handleTranslateRight}
          link={`${props.title.toLowerCase().split(" ")[0]}`}
        />
      </div>

      <div className="overflow-hidden">
        <div
          className="w-full flex sm:gap-[2%] gap-0 md:gap-[1%] flex-row h-[30rem] duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeMovie * 100}%)` }}
        >
          {props.movies.map((movie, i) => {
            return (
              <div
                data-id={movie.id}
                key={i}
                className=" movie relative lg:min-w-[19%] md:min-w-[24%] sm:min-w-[48%] min-w-[100%] overflow-hidden"
              >
                <img
                  src={`${IMAGE_PATH}${"w342"}${movie.poster_path}`}
                  alt={movie.title}
                  className="h-[80%] md:h-[78%] w-full object-cover rounded-3xl"
                />
                <div className="absolute top-[65%] flex justify-between w-full">
                  <ButtonWatchList title={false} />
                  <MainButton onClick={() => navigate(`/movie/${movie.id}`)}>
                    More info
                  </MainButton>
                </div>

                <h3 className="mt-[1rem] text-3xl text-center md:text-left md:text-2xl lg:text-3xl">
                  {movie.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
