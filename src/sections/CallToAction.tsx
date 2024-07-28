import classNames from "classnames";
import ActionLink from "../components/ActionLink";

interface Props extends React.AllHTMLAttributes<HTMLDivElement> {
  text: string;
  link: {
    href: string;
    name: string;
  };
}

function CallToAction({ text, link, className, ...props }: Props) {
  return (
    <section
      className={classNames(
        className,
        "flex flex-col gap-4 bg-secondary text-secondary-content text-center m-16 p-16 rounded-lg"
      )}
      {...props}
    >
      <h1 className="text-4xl">{text}</h1>
      <ActionLink to={link.href} className="mx-auto bg-tertiary w-max">
        {link.name}
      </ActionLink>
    </section>
  );
}

export default CallToAction;
