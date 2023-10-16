import logo from "../../../assets/logo.svg";
import styles from "./style.module.scss";
import { useDispatch } from "react-redux";
import { menuIconsActions } from "../../../store/menuIcons";
export default function Logo() {
  const dispatch = useDispatch();


  const handleShowLeftMenu = () => {
    dispatch(menuIconsActions.toggleLeftMenu());
  }
  return (
    <div className="flex items-center gap-[1rem] mb-[3rem] cursor-pointer" onClick={handleShowLeftMenu}>
      <img src={logo} alt="logo" className="w-[5.9rem] h-[5.9rem]"/>
      <span className={`${styles.logo} text-4xl w-[10rem] text-main`}>Lutsiu Movies</span>
    </div>
  )
}