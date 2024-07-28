import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";

const links = [
  {
    path: "",
    name: "Homepage",
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
    <Navbar fluid rounded border className="sticky top-0 z-10">
      <Navbar.Brand>
        <Link
          to={""}
          className="self-center text-2xl font-semibold text-primary font-accent whitespace-nowrap"
        >
          Wolke7 <span className="hidden lg:inline">Bad Harzburg</span>
        </Link>
      </Navbar.Brand>
      <div className="flex gap-4 md:order-2">
        <Navbar.Toggle />
        <Link
          to={"/booking"}
          className="p-4 rounded-lg bg-primary text-primary-content hover:brightness-90 font-accent"
        >
          Get in touch
        </Link>
      </div>
      <Navbar.Collapse>
        {links.map((link, index) => (
          <Navbar.Link key={index}>
            <Link to={link.path}>{link.name}</Link>
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
