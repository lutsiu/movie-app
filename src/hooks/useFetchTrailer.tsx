import { useEffect, useState } from "react";
import { API_KEY, HTTPS } from "../data/API";
export default function useFetchMovie(id: string) {
  const [trailer, setTrailer] = useState<string | null>(null);
  const REQ = (id: string) => {
    return `movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
  };

  useEffect(() => {
    const fetchData = async function (): Promise<void> {

      try {
        const res = await fetch(`${HTTPS}${REQ(id)}`);
        const data = await res.json();
        setTrailer(data.results[0].key as string);
      } catch {
        ("");
      }

    };
    fetchData();
  }, [id]);

  return { trailer };
}
