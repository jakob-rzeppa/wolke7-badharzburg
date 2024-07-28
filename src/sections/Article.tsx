import classNames from "classnames";
import ActionLink from "../components/ActionLink";

interface Props extends React.AllHTMLAttributes<HTMLDivElement> {
  title: string;
  content: string;
  link?: {
    href: string;
    name: string;
  };
  className?: string;
}

function Article({ title, content, link, className, ...props }: Props) {
  return (
    <article
      className={classNames(
        "text-center flex flex-col gap-4 md:w-2/3 mx-auto",
        className
      )}
      {...props}
    >
      <h1 className="text-4xl text-tertiary font-accent">{title}</h1>
      <p>{content}</p>
      {link && (
        <ActionLink
          to={"/booking"}
          className="mx-auto w-max bg-secondary text-secondary-content"
        >
          Check avaliability
        </ActionLink>
      )}
    </article>
  );
}

export default Article;
