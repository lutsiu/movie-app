import { CgMenuGridO } from "react-icons/cg";
import logo from "../../../assets/logo.svg";
import { useDispatch } from "react-redux";
import { menuIconsActions } from "../../../store/menuIcons";

export const LeftIcon = () => {
  const dispatch = useDispatch();

  const handleShowLeftMenu = () => {
    dispatch(menuIconsActions.toggleLeftMenu());
  };

  return (
    <img
      src={logo}
      className="w-[4.5rem] h-[4.5rem] cursor-pointer"
      onClick={handleShowLeftMenu}
    />
  );
};

export const RightIcon = () => {
  const dispatch = useDispatch();

  const handleShowRightMenu = () => {
    dispatch(menuIconsActions.toggleRightMenu());
  };
  return (
    <CgMenuGridO
      className="w-[3.5rem] h-[3.5rem] cursor-pointer duration-500 hover:text-gray-400"
      onClick={handleShowRightMenu}
    />
  );
};
