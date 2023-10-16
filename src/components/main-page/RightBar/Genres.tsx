import useSlider from "../../../hooks/useSlider";
import SliderButtons from "./Slider/SliderButtons";
import SliderGenres from "./Slider/SliderGenres";
import genres from "../../../data/genres";
export default function Watchlist() {
  const SLIDES = 6;

  const { activeMovie, handleTranslateLeft, handleTranslateRight, TRANSLATE } =
    useSlider(SLIDES);
  return (
    <div className="mt-[3rem]">
      <SliderButtons
        title="Genres"
        link="genres"
        handleTranslateLeft={handleTranslateLeft}
        handleTranslateRight={handleTranslateRight}
      />
      <SliderGenres
        data={genres.filter((_, i) => i <= 5)}
        TRANSLATE={TRANSLATE}
        activeMovie={activeMovie}
        titleCentered={true}
      />
      <SliderGenres
        data={genres.filter((_, i) => i > 5 && i <= 11)}
        TRANSLATE={TRANSLATE}
        activeMovie={activeMovie}
        titleCentered={true}
      />
    </div>
  );
}
