import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
import ActionLink from "./ActionLink";

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
    path: "/equipment",
    name: "Equipment",
  },
  {
    path: "/location",
    name: "Location",
  },
];

function Header() {
  return (
    <Navbar fluid rounded border className="sticky top-0 z-40">
      <Navbar.Brand
        className="self-center text-2xl font-semibold text-primary font-accent whitespace-nowrap"
        as={({
          href,
          className,
          children,
        }: React.LinkHTMLAttributes<HTMLLinkElement>) => (
          <Link to={href!} className={className}>
            {children}
          </Link>
        )}
        href=""
      >
        Wolke7 <span className="hidden lg:inline">Bad Harzburg</span>
      </Navbar.Brand>
      <div className="flex gap-4 md:order-2">
        <Navbar.Toggle />
        <ActionLink to="/booking">Get in touch</ActionLink>
      </div>
      <Navbar.Collapse>
        {links.map((link, index) => (
          <Navbar.Link
            key={index}
            as={({
              href,
              className,
              children,
            }: React.LinkHTMLAttributes<HTMLLinkElement>) => (
              <Link to={href!} className={className}>
                {children}
              </Link>
            )}
            href={link.path}
          >
            {link.name}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
