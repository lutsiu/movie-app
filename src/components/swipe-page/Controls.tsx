import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Pagination from "../../UI/Pagination";
interface Props {
  handleTranslateLeft: () => void;
  handleTranslateRight: () => void;
  translateByButton: (i: number) => void;
  amountOfButtons: number;
  activeMovie: number;
}
export default function Controls(props: Props) {
  return (
    <div className=" w-fit flex items-center gap-[0.5rem] sm:gap-[2rem] mt-[3rem] cursor-pointer ">
      <FaChevronLeft className="w-[1.5rem] h-[2rem] " onClick={props.handleTranslateLeft} />
      <Pagination
        amountOfButtons={props.amountOfButtons}
        activeMovie={props.activeMovie}
        translateByButton={props.translateByButton}
      />
      <FaChevronRight className="w-[1.5rem] h-[2rem] "onClick={props.handleTranslateRight}  />
    </div>
  );
}
