import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import styles from "./style.module.scss";
interface Props {
  links: { link: string; title: string }[];
  searchBar?: boolean;
}

export default function SecondaryNav(props: Props) {
  return (
    <nav>
      <ul className="flex w-fit mx-auto gap-[3rem] justify-center sm:gap-[5rem] items-center flex-wrap px-[2rem]">
        {props.links.map((link, i) => {
          return (
            <li key={i}>
              <NavLink
                to={link.link}
                className={({ isActive }) =>
                  isActive ? styles.linkActive : styles.link
                }
              >
                {link.title}
              </NavLink>
            </li>
          );
        })}
        {props.searchBar && <SearchBar/>}
      </ul>
    </nav>
  );
}
