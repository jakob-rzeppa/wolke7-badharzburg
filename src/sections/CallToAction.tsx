import ActionLink from "../components/ActionLink";
import Section, { SectionProps } from "../components/Section";

interface Props extends SectionProps {
  text: string;
  link: {
    href: string;
    name: string;
  };
}

function CallToAction({ text, link, className, background }: Props) {
  return (
    <Section className={className} background={background}>
      <section className="flex flex-col gap-4 p-4 m-16 text-center rounded-lg bg-secondary text-secondary-content md:p-16">
        <h1 className="text-4xl">{text}</h1>
        <ActionLink to={link.href} className="mx-auto bg-tertiary w-max">
          {link.name}
        </ActionLink>
      </section>
    </Section>
  );
}

export default CallToAction;
