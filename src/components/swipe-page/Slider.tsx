import { Link } from "react-router-dom";
import useResize from "../../hooks/useResize";
interface Props {
  data: {
    image: string;
    title: string;
    id: number;
  }[] | null;
  activeMovie: number;
  translateUnit: number;
}

export default function Slider(props: Props) {
  const {width} = useResize();

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
            <Link
              to={`${movie.id.toString()}`}
              key={i}
              className="max-w-[90%] min-w-[90%] sm:min-w-[47%] sm:max-w-[47%]
              lg:min-w-[22%] lg:max-w-[22%] h-[50rem]  overflow-hidden duration-500 hover:scale-110"
            >
              <div className="relative h-[85%]">
                
                <img src={movie.image} className="w-full h-full object-cover rounded-[1.7rem]" />
              </div>
              <div className="mt-[1rem] h-[15%]">
                <h3 className="text-3xl text-center mt-[0.5rem]">{movie.title}</h3>
                
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
