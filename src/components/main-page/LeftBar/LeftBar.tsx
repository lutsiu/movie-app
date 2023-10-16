import Logo from "./Logo";
import Section from "./Section";
import * as sections from "./Sections";
import { useSelector } from "react-redux/es/exports";
import useResize from "../../../hooks/useResize";
interface State {
  auth: { logIn: boolean };
  menuIcons: { showLeftMenu: boolean; showRightMenu: boolean };
}

export default function LeftBar() {
  const { showHamburger } = useResize();

  const {  menuIcons } = useSelector((state: State) => state);

  return (
    <div
      className=" fixed z-10   bg-slate-950 w-[60%] sm:w-[40%] md:w-[33%] lg:w-[25%] duration-500 ease-in-out  xl:w-[17%] pl-[2rem] md:pl-[4rem] pr-[2rem] py-[4rem] xl:relative min-h-full"
      style={{
        transform: showHamburger
          ? `translateX(${menuIcons.showLeftMenu ? 0 : -100}%)`
          : "",
      }}
    >
      <Logo />
      <Section sections={sections.menu} sectionTitle="Menu" />
    </div>
  );
}
