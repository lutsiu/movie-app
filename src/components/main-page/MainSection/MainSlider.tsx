import useFetchData from "../../../hooks/useFetchData";
import useSlider from "../../../hooks/useSlider";
import { MOVIE_DATA } from "../../../data/interfaces";
import useResize from "../../../hooks/useResize";
import { useEffect } from "react";

import MainSliderContent from "./MainSliderContent";

export default function MainSlider() {


  const {
    data,
  }: {
    data: { results: MOVIE_DATA[] } | null;
    isLoading: boolean;
  } = useFetchData("popular");

  const movies = data?.results.filter((_, i) => i < 5);

  const movieCount = movies?.length ?? 0;

  const {
    activeMovie,
    handleTranslateLeft,
    handleTranslateRight,
    translateByButton,
  } = useSlider(movieCount);

  const { width } = useResize();

  useEffect(() => {
    const interval = setInterval(() => {
      handleTranslateRight();
    }, 6000);
    return () => {
      clearInterval(interval);
    };
  }, [handleTranslateRight]);



  return (
    <div
      className="mt-[5rem] overflow-hidden rounded-3xl flex h-[35rem]"
      style={{}}
    >
      <MainSliderContent
        activeMovie={activeMovie}

        handleTranslateLeft={handleTranslateLeft}
        handleTranslateRight={handleTranslateRight}
        width={width}
        movies={movies}
        translateByButton={translateByButton}
      />
      
    </div>
  );
}
