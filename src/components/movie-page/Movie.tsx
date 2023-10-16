import BackHomeButton from "../../UI/Buttons/BackHomeButton";
import styles from "./styles.module.scss";
import ButtonWatchList from "../../UI/Buttons/ButtonWatchList";
import MainButton from "../../UI/Buttons/MainButton";
import Stars from "../../UI/Stars";
import useFetchMovie from "../../hooks/useFetchMovie";
import useResize from "../../hooks/useResize";
import { useParams } from "react-router-dom";
import { IMAGE_PATH } from "../../data/API";
import { createPortal } from "react-dom";
import Trailer from '../trailer/Trailer';
import { useState } from "react";
import useFetchTrailer from '../../hooks/useFetchTrailer';
export default function Movie() {
  const { width } = useResize();
  const [showTrailer, setShowTrailer] = useState(false);
  const { movie: movieId } = useParams();

  const { movie } = useFetchMovie(+movieId!);
  const {trailer} = useFetchTrailer(movieId!);


  const handleShowTrailer = () => {
    setShowTrailer(true);
  };

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${IMAGE_PATH}${"original"}${movie?.poster_path})`,
      }}
    >
      <div className="absolute">
        <BackHomeButton link="/home" />
      </div>
      <div
        className="relative w-[100%] mt-[8rem] h-fit flex justify-evenly gap-[5rem] movie"
        data-id={movieId}
      >
        <div className=" w-full sm:w-[75%] lg:w-[40%]">
          <h1 className="text-6xl font-black mb-[2rem]">{movie?.title}</h1>
          <Stars size="lg" rating={movie ? movie.vote_average : 0} />
          <span className="text-2xl mt-[3rem] inline-block">
            {movie?.genres?.map((genre) => genre.name).join(", ")}
          </span>
          <p className="mt-[3rem] text-3xl lg:text-4xl">{movie?.overview}</p>
          <div className="flex flex-col sm:flex-row gap-[4.5rem] mt-[5rem] mx-auto sm:mx-0 w-fit">
            <ButtonWatchList title={true} />
            <MainButton onClick={handleShowTrailer} >Watch now</MainButton>
          </div>
        </div>
        {width > 768 && (
          <div className="w-[35rem] min-h-full bg-center overflow-hidden rounded-3xl">
            <img
              src={`${IMAGE_PATH}${"w780"}${movie?.backdrop_path}`}
              alt="small image"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
      {showTrailer &&
        createPortal(<Trailer onClick={() => setShowTrailer(false)} trailer={trailer ? trailer : ''}/>, document.getElementById("trailer")!)}
    </div>
  );
}
