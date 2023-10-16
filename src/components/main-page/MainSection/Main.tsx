import NavBar from "./NavBar"
import MainSlider from "./MainSlider"
import Popular from "./Popular"

export default function Main() {


  

  return (
    <div className="flex-1 py-[4rem] w-[60%] px-[2rem] lg:px-[4rem] xl:px-[3rem] 2xl:px-[4rem]">
      <NavBar/>
      <MainSlider/>
      <Popular/>
    </div>
  )
}