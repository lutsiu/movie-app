import { useEffect, useState } from "react";
import { API_KEY, HTTPS } from "../data/API";
import { PEOPLE_DATA, ACTOR_DATA, PLAYED_IN_MOVIES } from "../data/interfaces";
type Request = "actors" | "actorInfo" | "moviesPlayedIn";

export default function useFetchData(request: Request, page = 1, id?: number) {
  let req = `person/popular?language=en-US&page=${page}`;

  if (request === "actorInfo") {
    req = `person/${id}?language=en-US`;
  }

  if (request === "moviesPlayedIn") {
    req = `person/${id}/movie_credits?language=en-US`;
  }

  const [people, setPeople] = useState<{ results: PEOPLE_DATA[] }>({
    results: [],
  });
  const [info, setInfo] = useState<ACTOR_DATA | null>(null);
  const [playedInMovies, setPlayedInMovies] = useState<PLAYED_IN_MOVIES | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      setIsLoading(true);
      try {
        const res = await fetch(`${HTTPS}${req}&api_key=${API_KEY}`);
        const data = await res.json();

        if (request === "actors") {
          setPeople(data);
        }
        if (request === "moviesPlayedIn") {
          setPlayedInMovies(data);
        }
        if (request === "actorInfo") {
          setInfo(data);
        }
      } catch (e) {
        ("");
      }
      setIsLoading(false);
    }
    fetchData();
  }, [req, request]);

  return { isLoading, people, playedInMovies, info };
}
