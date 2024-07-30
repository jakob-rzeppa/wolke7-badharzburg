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
  imgs: {
    src: string;
    alt: string;
  }[];
  background?: "bg-base-100" | "bg-base-200";
}

function ArticleMultipleImages({
  title,
  content,
  link,
  className,
  background,
  imgs,
  ...props
}: Props) {
  return (
    <article
      className={classNames(className, background, "w-full py-16")}
      {...props}
    >
      <div className="flex flex-col gap-8 mx-12 md:w-2/3 md:mx-auto">
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
        <div
          className={classNames("flex-row hidden md:flex", {
            "gap-32 px-32": imgs.length === 2,
            "gap-16 px-16": imgs.length === 3,
            "gap-8 px-8": imgs.length > 3,
          })}
        >
          {imgs.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              className="w-full rounded-lg aspect-3/4"
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export default ArticleMultipleImages;
