import Swipe from '../../components/swipe-page/Swipe'
import genresObject from '../../data/genres'
export default function GenrePage() {

  return (
    <div>
      <Swipe title="Genres" data={genresObject} />
    </div>
  )
}