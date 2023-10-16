import styles from './style.module.scss';
import { RefObject, useState ,useRef, useEffect  } from 'react';
import {HiCheck, HiPlus} from 'react-icons/hi';
import useResize from '../../hooks/useResize';
import { useSelector, useDispatch } from "react-redux";
import {watchlistActions} from '../../store/watchlist'
interface Props {
  title: boolean
}
export default function GrayButton(props: Props) {
  const {width} = useResize();
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const buttonRef: RefObject<HTMLButtonElement> = useRef(null);
  const [movieId, setMovieId] = useState<string | null>(null);
  
  useEffect(() => {
    if (buttonRef.current) {
      const newMovieId = buttonRef.current?.closest('.movie')?.getAttribute('data-id');
      setMovieId(newMovieId ? newMovieId : null);
    }
  }, []);


  const { watchlist } = useSelector((state: { watchlist: number[] }) => state);

  const isInWatchlist = movieId ? watchlist.find((id, ) => id === +movieId) : false;


  if (checked && !isInWatchlist) {
    setChecked(false);
  }

  const handleAddToWatchlist = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (checked && movieId) {
      setChecked(false);
      dispatch(watchlistActions.removeMovie({id: +movieId}))
    }
    if (!checked && movieId) {
      setChecked(true);
      dispatch(watchlistActions.addMovie({id: +movieId}))
    }
  };


  return (
    <button
      onClick={handleAddToWatchlist}
      className={styles.grayButton}
      ref={buttonRef}
    >
      {checked ? <HiCheck/>: <HiPlus/>}
      {props.title && width >=576 && <span>Watchlist</span>}
    </button>
  );
}


