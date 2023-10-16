import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import GrayButton from "./GrayButton";
import { FaChevronLeft } from "react-icons/fa";

interface Props {
  link: string
}
export default function Header(props: Props) {
  return (
    <>
      <Link
        to={props.link}
        className={`${styles.backHome} flex gap-[1.1rem] items-center`}
      >
        <GrayButton>
          <FaChevronLeft />
        </GrayButton>
        
      </Link>
      
    </>
  );
}
