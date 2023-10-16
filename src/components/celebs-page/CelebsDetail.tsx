import { Link, useParams } from "react-router-dom";
import useFetchActors from "../../hooks/useFetchActors";
import { IMAGE_PATH } from "../../data/API";
import Personalnfo from "./Personalnfo";
import useResize from "../../hooks/useResize";
export default function CelebrityDetails() {
  const {width} = useResize();

  const { actor: actorId } = useParams();

  const { info } = useFetchActors("actorInfo", 0, +actorId!);
  const { playedInMovies } = useFetchActors("moviesPlayedIn", 0, +actorId!);

  const movies = playedInMovies?.cast
    .flat()
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 8);

  const currentAge = new Date().getFullYear() - new Date(info ? info.birthday : '').getFullYear();

  const Name = (<div>
    <h1 className="font-bold text-5xl">{info?.name}</h1>
  </div>);

  return (
    <div className="flex md:flex-row flex-col mt-[5rem] px-[3rem] box-border">
      <div className="md:min-w-[35%] md:max-w-[35%] lg:max-w-[25%] lg:min-w-[25%] overflow-hidden flex flex-col md:items-start">
        <img
          src={`${IMAGE_PATH}${"w342"}${info?.profile_path}`}
          alt="actor image"
          className=" w-[40%]  md:w-full mx-auto  md:h-[65%] object-cover  rounded-2xl"
        />
        {width < 768 && <div className="w-fit mx-auto mt-[2rem] mb-[4]">{Name}</div>}
        <div className="mt-[2rem]">
          <p className="text-3xl">Personal info</p>
          <Personalnfo title="Known for" data={info?.known_for_department}/>
          <Personalnfo title="Birthday" data={`${info?.birthday} (${currentAge} years old)`}/>
          <Personalnfo title="Place of birth" data={info?.place_of_birth}/>
        </div>
      </div>
      <div className="flex flex-col md:ml-[3rem] lg:ml-[4rem] box-border md:min-w-[65%] md:max-w-[65%] lg:max-w-[75%] lg:min-w-[75%]">
        {width >= 768 && Name}
        <div className="mt-[3rem] pr-[1rem]">
          <h2 className="text-3xl">Biography</h2>
          <p className="text-2xl font-light mt-[1rem]">{info?.biography}</p>
        </div>
        <div className="mt-[7rem]">
          <h3 className="text-3xl mb-[1rem]">Known for</h3>
          <div className="flex overflow-x-auto overflow-y-hidden gap-[4%] md:gap-[2rem]">
            {movies && movies.map((movie, i) => {
              return (
                <Link to={`/movie/${movie.id}`} key={i} className="min-w-[46%] md:min-w-[25%] rounded-2xl">
                  <img src={`${IMAGE_PATH}${"w342"}${movie.poster_path}`} alt='poster' className="max-h-[85%] w-full object-cover rounded-2xl" />
                  <span className="inline-block text-center text-xl mt-[5%] w-full">{movie.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
