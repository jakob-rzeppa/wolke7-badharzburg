import { Link } from "react-router-dom";

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
    <div className="flex p-8 bg-base-100">
      <div className="flex-1">
        <Link
          to={"/"}
          className="text-xl btn btn-ghost text-primary font-accent"
        >
          Wolke7 Bad Harzburg
        </Link>
      </div>
      <div className="flex-none">
        <ul className="flex gap-4">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
          <li>
            <Link
              to={"/booking"}
              className="p-4 rounded-lg bg-primary text-primary-content hover:brightness-90 font-accent"
            >
              Get in touch
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
