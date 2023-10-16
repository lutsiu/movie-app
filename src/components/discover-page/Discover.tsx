import Popular from "./Popular";
import TopMovies from "./TopMovies";
import Upcoming from './Upcoming';
import Genres from "./Genres";
export default function Discover() {
  return (
    <div>
      <Popular />
      <TopMovies/>
      <Upcoming/>
      <Genres/>
    </div>
  );
}
