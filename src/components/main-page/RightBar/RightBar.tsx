import Auth from "./Auth/Auth"
import Watchlist from "./Watchlist"
import TopRated from './TopRated';
import Genres from './Genres';
import { useSelector } from "react-redux/es/exports";
import useResize from "../../../hooks/useResize";
interface State {
  menuIcons: { showRightMenu: boolean };
}
export default function RightBar() {
  const {showHamburger} = useResize();
  const {showRightMenu} = useSelector((state: State) => state.menuIcons);
  
  const height= document.querySelector('body')?.clientHeight;
  


  return (
    <div className="absolute min-h-full bg-slate-950  w-[100%] sm:w-[40%] md:w-[33%] lg:w-[25%] xl:w-[23%] py-[4rem] ease-in-out duration-500 xl:pl-[1rem] 2xl:pl-[3rem] overflow-x-hidden  right-[0rem] z-10 xl:relative" style={{
      transform: showHamburger
        ? `translateX(${showRightMenu ? 0 : 100}%)`
        : "",
        minHeight: `${height! -40}px`
    }}
    >
      <Auth/>
      <Watchlist/>
      <TopRated/>
      <Genres/>
    </div>
  )
}