import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const links = [
  {
    path: "",
    name: "homepage",
  },
  {
    path: "/gallery",
    name: "Gallery",
  },
  {
    path: "/booking",
    name: "Booking",
  },
  {
    path: "/information",
    name: "Information",
  },
];

function Header() {
  return (
    <header className="fixed top-0 z-50 flex w-full p-8 align-middle bg-base-100">
      <div className="flex-1 mt-2">
        <Link
          to={"/"}
          className="text-xl btn btn-ghost text-primary font-accent"
        >
          Wolke7 <span className="hidden lg:inline">Bad Harzburg</span>
        </Link>
      </div>
      <Navigation links={links} />
    </header>
  );
}

export default Header;
