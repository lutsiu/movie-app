import { useEffect, useState } from "react";
import { API_KEY, HTTPS } from "../data/API";
import { MOVIE_DATA } from "../data/interfaces";

export default function useFetchMovie(ids: number[] | number) {
  const [movies, setMovies] = useState<[] | MOVIE_DATA[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState<null | MOVIE_DATA>(null);
  const REQ = (id: number) => {
    return `movie/${id}?api_key=${API_KEY}&language=en-US`;
  };

  useEffect(() => {
    const fetchData = async function (): Promise<void> {
      setIsLoading(true);
      try {
        if (typeof ids === "object") {
          const promises = ids.map((id, ) =>
            fetch(`${HTTPS}${REQ(id)}`).then((res) => res.json())
          );
          const responses = await Promise.all(promises);
          setMovies(responses);
        } else {
          const res = await fetch(`${HTTPS}${REQ(ids)}`);
          const data = await res.json();

          setMovie(data);
        }
      } catch {
        ("");
      }
      setIsLoading(false);
    };
    fetchData();
  }, [ids]);

  return { movie, movies, isLoading };
}
