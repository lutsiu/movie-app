import { useEffect, useState } from "react";

export default function useResize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize(e: UIEvent) {
     setWidth((e.currentTarget as Window).innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const showHamburger = width < 1200;
  return {width, showHamburger};
}