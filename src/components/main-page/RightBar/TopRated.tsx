import useFetchData from "../../../hooks/useFetchData";
import useSlider from "../../../hooks/useSlider";
import SliderButtons from "./Slider/SliderButtons";
import SliderTopRated from './Slider/SliderTopRated';
export default function Watchlist() {

  const SLIDES = 8;

  const { activeMovie, handleTranslateLeft, handleTranslateRight, TRANSLATE } =
    useSlider(SLIDES);

  const {data} = useFetchData('top');


  return (
    <div className="mt-[3rem]">
      <SliderButtons
        title="Top Rated"
        link="discover/top"
        handleTranslateLeft={handleTranslateLeft}
        handleTranslateRight={handleTranslateRight}
      />
      <SliderTopRated
        movies={data?.results.filter((_, i) => i < SLIDES)}
        TRANSLATE={TRANSLATE}
        activeMovie={activeMovie}
      />
    </div>
  );
}
