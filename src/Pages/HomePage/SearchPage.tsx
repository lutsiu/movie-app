import SearchBarSearch from "../../UI/Navigation/SearchBarSearchPage";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import { IMAGE_PATH } from "../../data/API";
export default function SearchPage() {
  const [request, setRequest] = useState("");
  const { search } = useLocation();
  const query = search.replace("?q=", "").replaceAll("%20", " ");

  const { data } = useFetchData("query", 1, undefined, request);

  return (
    <div className="flex-1 py-[4rem] w-[60%] px-[2rem] lg:px-[4rem] xl:px-[3rem] 2xl:px-[4rem] flex flex-col items-center">
      <SearchBarSearch
        query={query}
        handlePassQuery={(req) => {
          setRequest(req);
        }}
      />
      <div className="mt-[5rem] grid grid-cols-4 gap-[2rem]">
        {data?.results.map((movie, i) => {
          return (
            <Link to={`/movie/${movie.id}`} key={i}>
              <img src={`${IMAGE_PATH}w500${movie.poster_path}`} alt="poster" className="rounded-2xl  duration-500 hover:scale-110   " />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
