import classNames from "classnames";
import ActionLink from "../components/ActionLink";
import Section, { SectionProps } from "../components/Section";

interface Props extends SectionProps {
  title: string;
  content: string;
  link?: {
    href: string;
    name: string;
  };
  img: {
    src: string;
    alt: string;
    side: "left" | "right" | "down";
  };
}

function ArticleOneImage({
  title,
  content,
  link,
  className,
  background,
  img,
}: Props) {
  return (
    <Section background={background} className={className}>
      <div
        className={classNames("md:w-2/3 md:mx-auto mx-12 flex gap-8", {
          "flex-col-reverse sm:flex-row-reverse": img.side === "left",
          "flex-col-reverse sm:flex-row": img.side === "right",
          "flex-col": img.side === "down",
        })}
      >
        <div className="flex flex-col justify-center flex-1 gap-4 text-center">
          <h1 className="text-4xl text-tertiary font-accent">{title}</h1>
          <p>{content}</p>
          {link && (
            <ActionLink
              href={link.href}
              className="mx-auto w-max bg-secondary text-secondary-content"
            >
              {link.name}
            </ActionLink>
          )}
        </div>
        <img
          src={img.src}
          alt={img.alt}
          className={classNames("w-full rounded-lg flex-1", {
            "aspect-16/9": img.side === "down",
            "aspect-3/4": img.side === "left" || img.side === "right",
          })}
        />
      </div>
    </Section>
  );
}

export default ArticleOneImage;
