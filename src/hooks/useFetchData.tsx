import { useEffect, useState } from "react";
import { API_KEY, HTTPS } from "../data/API";
import { MOVIE_DATA } from "../data/interfaces";
type Request = "top" | "popular" | "upcoming" | "genre"| "query";
export default function useFetchData(request: Request, page = 1, id?:number, query?: string) {
  let req = `movie/popular?language=en-US&page=${page}&vote_average.gte=${6}`;
  
  if (request === "top") {
    req = `movie/top_rated?language=en-US&page=${page}`;
  }
  
  if (request === "upcoming") {
    req = `movie/upcoming?language=en-US&page=${page}`;
  }
  if (request === 'genre') {
    req = `discover/movie?language=en-US&with_genres=${id}&page=${page}&vote_average.gte=7`
  }
  
  if (request === 'query') {
    req = `search/movie?language=en-US&query=${query}`;
  }
  const [data, setData] = useState<{ results: MOVIE_DATA[] } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      setIsLoading(true);
      try {
        const res = await fetch(`${HTTPS}${req}&api_key=${API_KEY}`);
        const data = await res.json();
        setData(data);
      } catch (e) {
        ("");
      }
      setIsLoading(false);
    }
    fetchData();
  }, [req, request]);

  return { data, isLoading};
}
/* 
search/movie?&language=en-US&query=guardians&page=1&include_adult=false
search/movie?query=?language=en-US&api_key=7d0b0e01e13e38f867d763c88b971545 */