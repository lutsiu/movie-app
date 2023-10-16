import useResize from "../../hooks/useResize";
import { MOVIE_DATA } from "../../data/interfaces";
import { IMAGE_PATH } from "../../data/API";
import ButtonDrop from "../../UI/Buttons/ButtonDrop";
import Overview from "../../UI/Overview";
import MainButton from "../../UI/Buttons/MainButton";
import { useNavigate } from "react-router-dom";

interface Props {
  data: MOVIE_DATA[] | null;
  activeMovie: number;
  translateUnit: number;
}

export default function Slider(props: Props) {
  const { width } = useResize();
  const navigate = useNavigate();
  let SLIDE_WIDTH = 25;
  if (width <= 992 && width > 576) {
    SLIDE_WIDTH = 50;
  }

  if (width < 576) {
    SLIDE_WIDTH = 100;
  }

  return (
    <div className="w-full overflow-hidden flex justify-center pl-[5.5%] sm:pl-[2%]">
      <div
        className="max-w-full flex  mt-[3rem] ease-in-out gap-[10%] sm:gap-[3%] md:gap-[3%] lg:gap-[3%] duration-1000"
        style={{
          transform: `translateX(-${
            props.activeMovie * props.translateUnit * SLIDE_WIDTH
          }%)`,
        }}
      >
        {props.data?.map((movie, i) => {
          return (
            <div
              
              key={i}
              data-id={movie.id}
              className="max-w-[90%] min-w-[90%] sm:min-w-[47%] sm:max-w-[47%]
              lg:min-w-[22%] lg:max-w-[22%] h-[50rem] overflow-hidden duration-500 hover:scale-105  movie"
            >
              <div className="relative h-[70%]">
                <span
                  className="absolute right-0 top-0 w-[7rem] h-[3.8rem] bg-main flex items-center justify-center text-black font-bold text-3xl"
                  style={{ borderRadius: "0 1.7rem" }}
                >
                  {`${movie.vote_average.toFixed(1)}`}
                </span>
                <img
                  src={`${IMAGE_PATH}w500${movie.poster_path}`}
                  className="w-full h-full object-cover rounded-[1.7rem]"
                />
                <div className="absolute bottom-0 w-full flex justify-between">
                  <ButtonDrop />
                  <MainButton onClick={() => navigate(`/movie/${movie.id}`)}>More info</MainButton>
                </div>
              </div>
              <div className="mt-[1rem] h-[30%]">
                <h3 className="text-3xl">{movie.title}</h3>
                <span className="text-lg text-gray-300">
                  {movie.release_date}
                </span>
                <Overview overview={movie.overview} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
