import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {
  handleTranslateLeft: () => void;
  handleTranslateRight: () => void;
  title: string;
  link: string;
}
export default function SliderButtons(props: Props) {
  return (
    <div className="flex w-fit mx-auto lg:ml-[1.5rem] items-center">
      <h3 className="xl:text-3xl text-center   2xl:text-4xl font-bold">{props.title}</h3>
      <span className="flex ml-[2rem] mr-[4.4rem]">
        <FaChevronLeft
          className="w-[1.4rem] h-[2rem] cursor-pointer hover:text-main duration-500"
          onClick={props.handleTranslateLeft}
        />
        <FaChevronRight
          className="w-[1.4rem] h-[2rem] ml-[1.8rem] cursor-pointer hover:text-main duration-500"
          onClick={props.handleTranslateRight}
        />
      </span>
      <Link
        to={`../${props.link}`}
        className="text-xl mr-[0.4rem] text-center text-gray-400 hover:text-white cursor-pointer duration-300"
      >
        See more
      </Link>
    </div>
  );
}
