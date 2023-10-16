import Header from "./UI/Header";
import genres from "../../data/genres";
import { Link } from "react-router-dom";
export default function Genres() {

  
  const createRandomBG = () => {
    const randomColor = () => {
      return Math.floor((Math.random() * 256));
    }
    return `rgba(${randomColor()} ${randomColor()} ${randomColor()})`;
  }


  return (
    <div>
      <Header title="Genres"/>
      <div className="grid grid-cols-1  sm:grid-cols-3 lg:grid-cols-4 gap-x-[2rem] gap-y-[1.5rem] mt-[2rem]">
        {genres.map((genre,i) => {
          return <Link to={`../genres/${genre.id}`} key={i} className=" w-[90%] sm:w-[13rem] md:w-[20rem] h-[4.5rem]  bg-zinc-700 duration-500 cursor-pointer hover:bg-zinc-900 rounded-lg relative overflow-hidden">
            <span className="absolute h-full w-[1rem] left-0" style={{backgroundColor: createRandomBG()}}></span>
            <span className="text-2xl ml-[1.8rem] mt-[1.3rem] inline-block">{genre.title}</span>
          </Link>
        })}
      </div>
    </div>
  )
}