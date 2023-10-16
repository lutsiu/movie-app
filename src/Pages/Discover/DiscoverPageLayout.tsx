import { Outlet } from "react-router-dom";
import SecondaryNav from "../../UI/Navigation/SecondaryNav";
export default function DiscoverPageLayout() {
  return (
    <div  className="px-[8rem] py-[2rem]">
      <SecondaryNav
        links={[
          { link: "../", title: "Home" },
          { link: "../discover", title: "Discover" },
          { link: "../celebrities", title: "Celebrities" },
          { link: "../genres", title: "Genres" },
          { link: "../watchlist", title: "Watchlist" },
        ]}
      />
      <Outlet />
    </div>
  );
}
