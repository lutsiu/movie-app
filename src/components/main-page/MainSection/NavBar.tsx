import SearchBar from "../../../UI/Navigation/SearchBar";
import { LeftIcon, RightIcon } from "./Icons";

import useResize from "../../../hooks/useResize";
export default function NavBar() {
  const {width } = useResize();

  return (
    <>
      <div className="flex justify-center items-center">
        {width >= 576 && <SearchBar />}
      </div>
      {width < 576 && (
        <div className="mt-[3rem] w-full flex justify-between items-center">
          <LeftIcon />
          <SearchBar />
          <RightIcon />
        </div>
      )}
    </>
  );
}
