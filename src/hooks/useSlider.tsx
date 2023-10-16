import { useState } from "react";

export default function useSlider(slides: number) {
  const TRANSLATE = 25;
  const MAX_SLIDE = slides;

  const [activeMovie, setMovie] = useState(0);

  const handleTranslateRight = () => {
    if (activeMovie === MAX_SLIDE - 1) {
      setMovie(0);
      return;
    }
    setMovie((prevState) => prevState + 1);
  };

  const handleTranslateLeft = () => {
    if (activeMovie === 0) {
      setMovie(MAX_SLIDE - 1);
      return;
    }
    setMovie((prevState) => prevState - 1);
  };
  const translateByButton = (i: number) => {
    setMovie(i);
  }

  return {
    activeMovie, handleTranslateLeft, handleTranslateRight, translateByButton, TRANSLATE
  }
}