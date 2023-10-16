import LeftBar from "../../components/main-page/LeftBar/LeftBar";
import RightBar from "../../components/main-page/RightBar/RightBar";
import { Outlet } from "react-router-dom";
export default function MainPage() {
  return (
    <div className="flex justify-between">
      <LeftBar />
      <Outlet/>
      <RightBar />
    </div>
  );
}
