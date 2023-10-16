import useFetchActors from "../../hooks/useFetchActors";
import useSlider from "../../hooks/useSlider";
import useResize from "../../hooks/useResize";
import Pagination from "../../UI/Pagination";
import { IMAGE_PATH } from "../../data/API";
import blankProfile from "../../assets/blankProfile.webp";
import { Link } from "react-router-dom";
export default function Celebs() {
  const AMOUNT_OF_PEOPLE = 140;
  const { activeMovie, translateByButton } = useSlider(AMOUNT_OF_PEOPLE);

  const { people } = useFetchActors("actors", activeMovie + 1);

  const { width } = useResize();

  let AMOUNT_PER_PAGE = 16;

  if (width < 992 && width >= 768) {
    AMOUNT_PER_PAGE = 15;
  }
  if (width < 768 && width >= 576) {
    AMOUNT_PER_PAGE = 14;
  }
  if (width < 576) {
    AMOUNT_PER_PAGE = 10;
  }

  const AMOUNT_OF_PAGES = Math.ceil(AMOUNT_OF_PEOPLE / AMOUNT_PER_PAGE);

  return (
    <>
      <div className="px-[4rem] sm:px-[8rem] py-[2rem]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[4rem] gap-[3rem]">
          {people?.results &&
            people.results.map((celeb, i) => {
              return (
                <Link
                  to={celeb.id.toString()}
                  key={i}
                  className="h-[50rem]  cursor-pointer hover:brightness-[90%] hover:scale-105 duration-500"
                  data-id={celeb.id}
                >
                  <img
                    src={
                      celeb.profile_path
                        ? `${IMAGE_PATH}${"w342"}${celeb.profile_path}`
                        : blankProfile
                    }
                    className="rounded-2xl h-[85%] w-full object-cover"
                  />
                  <span className="text-3xl font-bold inline-block mt-[2rem] ml-[1rem]">
                    {celeb.name}
                  </span>
                </Link>
              );
            })}
        </div>
        <div className="w-fit mx-auto">
          <Pagination
            activeMovie={activeMovie}
            amountOfButtons={AMOUNT_OF_PAGES}
            translateByButton={translateByButton}
          />
        </div>
      </div>
    </>
  );
}
