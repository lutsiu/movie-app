import useSlider from "../../../hooks/useSlider";
import SliderButtons from "./Slider/SliderButtons";
import SliderWatchList from "./Slider/SliderWatchlist";
import { useSelector } from "react-redux";
import useFetchMovie from "../../../hooks/useFetchMovie";
export default function Watchlist() {

  const { watchlist } = useSelector((state: { watchlist: number[] }) => state);
  const {movies} = useFetchMovie(watchlist);


  const { activeMovie, handleTranslateLeft, handleTranslateRight, TRANSLATE } =
    useSlider(watchlist.length);  

  return (
    <div className="mt-[3rem]">
      <SliderButtons
        title="Watchlist"
        link="watchlist"
        handleTranslateLeft={handleTranslateLeft}
        handleTranslateRight={handleTranslateRight}
      />
      <SliderWatchList
        movies={movies}
        TRANSLATE={TRANSLATE}
        activeMovie={activeMovie}
      />
    </div>
  );
}
