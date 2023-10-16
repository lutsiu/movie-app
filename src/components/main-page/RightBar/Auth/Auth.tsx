import { CgMenuGridO } from "react-icons/cg";
import useResize from "../../../../hooks/useResize";
import { useDispatch } from "react-redux";
import { menuIconsActions } from "../../../../store/menuIcons";
export default function Auth() {
  const { showHamburger } = useResize();
  const dispatch = useDispatch();
  const handleShowRightMenu = () => {
    dispatch(menuIconsActions.toggleRightMenu());
  };

  return (
    <div className="flex items-center justify-center xl:justify-center relative sticky">
      {showHamburger && (
        <CgMenuGridO
          className="w-[3.5rem] h-[3.5rem] cursor-pointer duration-500 hover:text-gray-400"
          onClick={handleShowRightMenu}
        />
      )}
      
    </div>
  );
}
