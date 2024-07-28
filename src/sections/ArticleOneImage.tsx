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
  img: {
    src: string;
    alt: string;
    side: "left" | "right" | "down";
  };
}

function Article({ title, content, link, className, img, ...props }: Props) {
  return (
    <article className={classNames(className, "w-full py-16")} {...props}>
      <div
        className={classNames("md:w-2/3 md:mx-auto mx-12 flex gap-8", {
          "flex-row-reverse": img && img.side === "left",
          "flex-row": img && img.side === "right",
          "flex-col": img && img.side === "down",
        })}
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
        <img
          src={img.src}
          alt={img.alt}
          className={classNames("w-full rounded-lg flex-1 hidden md:block", {
            "aspect-[16/9]": img.side === "down",
            "aspect-[3/4]": img.side === "left" || img.side === "right",
          })}
        />
      </div>
    </article>
  );
}

export default Article;
