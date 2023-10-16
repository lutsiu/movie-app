import useFetchData from '../../hooks/useFetchData';
import Slider from "./UI/Slider";
export default function Trending() {

  const {data} = useFetchData('popular');

  return (
    <div>
      <Slider movies={data ? data.results : []} title="Popular" />
    </div>
  );
}
