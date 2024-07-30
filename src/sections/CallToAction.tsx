import classNames from "classnames";
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
    <Section className={classNames(className, "px-16")} background={background}>
      <div className="flex flex-col gap-4 px-4 py-8 text-center rounded-lg bg-secondary text-secondary-content md:p-16">
        <h1 className="text-4xl">{text}</h1>
        <ActionLink to={link.href} className="mx-auto bg-tertiary w-max">
          {link.name}
        </ActionLink>
      </div>
    </Section>
  );
}

export default CallToAction;
