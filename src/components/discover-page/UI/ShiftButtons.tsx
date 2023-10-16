import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import useResize from "../../../hooks/useResize";
interface Props {
  handleTranslateLeft?: () => void;
  handleTranslateRight?: () => void;
  link: string;
}

export default function ShiftButtons(props: Props) {
  const { width } = useResize();

  return (
    <div className="flex gap-[3rem] items-center">
      <Link
        to={props.link}
        className="bg-black rounded-[3rem] w-[6.5rem] h-[3.5rem] flex items-center justify-center border-gray-500 border-[2px] cursor-pointer hover:bg-gray-800 duration-300 text-xl"
      >
        More
      </Link>
      {width >= 576 && (
        <>
          <span
            className="bg-black rounded-full w-[3.5rem] h-[3.5rem] flex items-center justify-center border-gray-500 border-[2px] cursor-pointer hover:bg-gray-800 duration-300"
            onClick={props.handleTranslateLeft}
          >
            <MdChevronLeft className="text-4xl" />
          </span>
          <span
            className="bg-black rounded-full w-[3.5rem] h-[3.5rem] flex items-center justify-center border-gray-500 border-[2px] cursor-pointer hover:bg-gray-800 duration-300"
            onClick={props.handleTranslateRight}
          >
            <MdChevronRight className="text-4xl" />
          </span>
        </>
      )}
    </div>
  );
}
