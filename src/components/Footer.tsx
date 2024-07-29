import { Footer as FlowbiteFooter } from "flowbite-react";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <FlowbiteFooter container className="bg-base-200">
      <FlowbiteFooter.Title title="Wolke 7 Bad Harzburg" />
      <FlowbiteFooter.LinkGroup>
        <FlowbiteFooter.Link
          as={({
            href,
            className,
            children,
          }: React.LinkHTMLAttributes<HTMLLinkElement>) => (
            <Link to={href!} className={className}>
              {children}
            </Link>
          )}
          href="/legal-notice"
        >
          Contact
        </FlowbiteFooter.Link>
        <FlowbiteFooter.Link
          as={({
            href,
            className,
            children,
          }: React.LinkHTMLAttributes<HTMLLinkElement>) => (
            <Link to={href!} className={className}>
              {children}
            </Link>
          )}
          href="/legal-notice"
        >
          Legal notice
        </FlowbiteFooter.Link>
        <FlowbiteFooter.Link
          href="https://www.instagram.com/wolke7badharzburg/"
          target="_blank"
        >
          <BsInstagram size={20} />
        </FlowbiteFooter.Link>
      </FlowbiteFooter.LinkGroup>
    </FlowbiteFooter>
  );
}

export default Footer;
