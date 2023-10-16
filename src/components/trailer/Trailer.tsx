import { IoClose } from "react-icons/io5";
import ReactPlayer from "react-player";
interface Props {
  onClick: () => void;
  trailer: string;
}
export default function Trailer(props: Props) {
  return (
    <div
      className="min-w-[100vw] min-h-[100vh] absolute top-0 z-[1000]"
      style={{ background: "rgba(0,0,0,0.8)" }}
    >
      <IoClose
        className="absolute right-[4rem] top-[2rem] w-[5rem] h-[5rem] cursor-pointer"
        onClick={props.onClick}
      />
      <div className="w-4/5 h-[80vh] bg-black mx-auto mt-[7rem] rounded-2xl overflow-hidden flex justify-center items-center">
        {props.trailer && (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${props.trailer}`}
            controls
            width={"100%"}
            height={"100%"}
          />
        )}
        {!props.trailer && <h1 className="text-6xl">Sorry, this movie doesn't have any trailer:(</h1>}
      </div>
    </div>
  );
}
