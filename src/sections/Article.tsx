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
        className,
        "w-full py-16 md:w-2/3 md:mx-auto mx-12"
      )}
      {...props}
    >
      <div className="flex flex-col justify-center flex-1 gap-4 text-center">
        <h1 className="text-4xl text-tertiary font-accent">{title}</h1>
        <p>{content}</p>
        {link && (
          <ActionLink
            to={link.href}
            className="mx-auto w-max bg-secondary text-secondary-content"
          >
            {link.name}
          </ActionLink>
        )}
      </div>
    </article>
  );
}

export default Article;
