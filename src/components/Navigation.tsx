import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

interface Props {
  links: {
    path: string;
    name: string;
  }[];
}

const Navigation = ({ links }: Props) => {
  return (
    <>
      {" "}
      <ul className="flex justify-between gap-4 align-middle">
        {links.map((link, index) => (
          <li key={index} className="hidden py-2 md:block">
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
        <li className="md:hidden">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="top-0 inline-flex items-center justify-center p-4 rounded-full outline-none hover:bg-base-200">
                <HamburgerMenuIcon />
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content className="w-max z-50 bg-base-100 rounded-md p-2 will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade">
                {links.map((link, index) => (
                  <DropdownMenu.Item
                    className="p-2 hover:bg-base-200"
                    key={index}
                  >
                    <Link to={link.path}>{link.name}</Link>
                  </DropdownMenu.Item>
                ))}

                <DropdownMenu.Arrow className="fill-base-200" />
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </li>
        <li className="mt-2">
          <Link
            to={"/booking"}
            className="p-4 rounded-lg bg-primary text-primary-content hover:brightness-90 font-accent"
          >
            Get in touch
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
