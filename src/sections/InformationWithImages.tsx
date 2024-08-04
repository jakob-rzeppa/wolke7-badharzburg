import ActionLink, { ActionLinkProps } from "../components/ActionLink";
import Section, { SectionProps } from "../components/Section";

export interface InformationWithImagesProps extends SectionProps {
  information: {
    title: string;
    description: string;
    actionLink?: ActionLinkProps;
    image: string;
  }[];
}

function InformationWithImages({
  information,
  ...rest
}: InformationWithImagesProps) {
  return (
    <Section {...rest}>
      <div className="flex flex-col gap-8 mx-16">
        {information.map((info, index) => (
          <div key={index} className="flex flex-col gap-4 md:flex-row">
            <img
              src={info.image}
              alt={info.title}
              className="rounded-md md:w-1/3 aspect-4/3"
            />
            <div className="flex flex-col justify-center gap-4 md:w-2/3 lg:w-1/2">
              <h2 className="text-2xl font-bold">{info.title}</h2>
              <p>{info.description}</p>
              {info.actionLink && (
                <ActionLink {...info.actionLink} className="w-max" />
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default InformationWithImages;
