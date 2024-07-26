import { Link } from "react-router-dom";

const links = (
  <>
    <li>
      <Link to={""}>Homepage</Link>
    </li>
    <li>
      <Link to={"/gallery"}>Gallery</Link>
    </li>
    <li>
      <Link to={"/booking"}>Booking</Link>
    </li>
    <li>
      <Link to={"/information"}>Information</Link>
    </li>
  </>
);

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
          {links}
          <li>
            <Link
              to={"/booking"}
              className="p-4 rounded-lg bg-primary text-primary-content hover:brightness-90"
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
