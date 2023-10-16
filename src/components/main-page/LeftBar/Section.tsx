import { NavLink } from "react-router-dom";
import styles from "./style.module.scss";
interface Props {
  sections: { icon: JSX.Element; title: string }[];
  sectionTitle: string;
}

export default function Section(props: Props) {

  return (
    <div className="mb-[5.9rem]">
      <span className="mb-[1.6rem] text-2xl text-gray-300">
        {props.sectionTitle}
      </span>
      <ul>
        {props.sections.map((sect, i) => {
          return (
            <li key={i} className="mt-[3rem]">
              <NavLink
                to={sect.title === "Home"? '/' : `/${sect.title.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive ? `${styles.navLinkActive} ${styles.navLink}` : `${styles.navLink}`
                }
              >
                {sect.icon}
                <span className="text-3xl">{sect.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
