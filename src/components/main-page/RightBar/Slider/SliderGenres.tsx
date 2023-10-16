import styles from "../style.module.scss";
import { Link } from "react-router-dom";
interface Props {
  data: { image: string; id: number; title: string; link: string }[];
  activeMovie: number;
  TRANSLATE: number;
  titleCentered?: boolean;
}
export default function MyMovies(props: Props) {
  return (
    <div className="mt-[3rem]">
      <div
        className="flex mt-[3rem] h-[14rem] gap-[3rem] w-max duration-500 ease-in-out"
        style={{
          transform: `translateX(-${props.TRANSLATE * props.activeMovie}rem)`,
        }}
      >
        {props.data.map((genre, i) => {
          return (
            <Link
              to={genre.id + ""}
              key={i}
              className={`${styles.image} flex justify-center items-center`}
              style={{ backgroundImage: `url(${genre.image})` }}
            >
              <span className="text-3xl font-semibold relative">
                {genre.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
