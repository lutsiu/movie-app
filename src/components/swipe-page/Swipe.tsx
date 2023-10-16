import useResize from "../../hooks/useResize";
import useSlider from "../../hooks/useSlider";
import Slider from "./Slider";
import Controls from "./Controls";

interface Props {
  title: string;
  data: {id: number, image: string, title: string}[]
}

export default function SwipePage(props: Props) {
  const { width } = useResize();

  let MOVIES_PER_SLIDE = 4;

  if (width <= 992 && width > 576) {
    MOVIES_PER_SLIDE = 2;
  }

  if (width < 576) {
    MOVIES_PER_SLIDE = 1;
  }

  const SLIDES = Math.ceil(props.data.length / MOVIES_PER_SLIDE);


  const {
    activeMovie,
    handleTranslateLeft,
    handleTranslateRight,
    translateByButton,
  } = useSlider(SLIDES);

  return (
    <div className="pt-[2rem] flex flex-col relative items-center">
      <h1 className="text-5xl font-black mt-[2rem]">{props.title}</h1>
      <Slider
        data={props.data}
        activeMovie={activeMovie}
        translateUnit={MOVIES_PER_SLIDE}
      />
      <Controls
        handleTranslateLeft={handleTranslateLeft}
        handleTranslateRight={handleTranslateRight}
        translateByButton={translateByButton}
        amountOfButtons={SLIDES}
        activeMovie={activeMovie}
      />
    </div>
  );
}
