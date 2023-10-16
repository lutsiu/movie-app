import styles from "./style.module.scss";
import {useDispatch } from "react-redux";
import { watchlistActions } from "../../store/watchlist";

export default function ButtonDrop() {
  const dispatch = useDispatch();

  const handleDrop = (e: React.MouseEvent<HTMLButtonElement>) => {
    const movieId = e.currentTarget.closest(".movie")?.getAttribute("data-id");
    if (movieId) {
      dispatch(watchlistActions.removeMovie({ id: +movieId }));
    }
  };

  return (
    <button onClick={handleDrop} className={styles.grayButton}>
      Drop
    </button>
  );
}
