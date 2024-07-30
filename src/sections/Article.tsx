import ActionLink from "../components/ActionLink";
import Section, { SectionProps } from "../components/Section";

interface Props extends SectionProps {
  title: string;
  content: string;
  link?: {
    href: string;
    name: string;
  };
}

function Article({ title, content, link, background, className }: Props) {
  return (
    <Section background={background} className={className}>
      <div className="flex flex-col justify-center flex-1 gap-4 mx-4 text-center md:w-2/3 md:mx-auto">
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
    </Section>
  );
}

export default Article;
