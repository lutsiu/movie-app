import {
  FaHome,
  FaRegCompass,
  FaRegCheckCircle,
  FaPlus,
  FaTheaterMasks,
} from "react-icons/fa";
export const iconClass = "w-[2.5rem] h-[2.5rem]";

type Section = { icon: JSX.Element; title: string }[];
export const menu: Section = [
  { icon: <FaHome className={iconClass} />, title: "Home" },
  { icon: <FaRegCompass className={iconClass} />, title: "Discover" },
  { icon: <FaRegCheckCircle className={iconClass} />, title: "Celebrities" },
  { icon: <FaTheaterMasks className={iconClass} />, title: "Genres" },
  { icon: <FaPlus className={iconClass} />, title: "Watchlist" },
];
