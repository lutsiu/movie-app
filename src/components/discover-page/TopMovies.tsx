import useFetchData from '../../hooks/useFetchData';
import Slider from "./UI/Slider";
export default function TopMovies() {

  const {data} = useFetchData('top');

  return (
    <div>
      <Slider movies={data ? data.results : []} title="Top Rated"></Slider>
    </div>
  )
}