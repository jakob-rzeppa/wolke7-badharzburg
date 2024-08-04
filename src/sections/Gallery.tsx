import classNames from "classnames";
import Section, { SectionProps } from "../components/Section";

interface Props extends SectionProps {}

function Gallery({ ...rest }: Props) {
  const items = [
    {
      row_span: 2,
      col_span: 1,
      content: <img src="pictures/Küche/Küchenzeile.jpg" />,
    },
    {
      row_span: 1,
      col_span: 1,
      content: <img src="pictures/Draußen/Schneewald.jpg" />,
    },
    {
      row_span: 1,
      col_span: 1,
      content: <img src="pictures/Küche/Küchenzeile.jpg" />,
    },
    {
      row_span: 1,
      col_span: 1,
      content: <img src="pictures/Küche/Küchenzeile.jpg" />,
    },
    {
      row_span: 2,
      col_span: 1,
      content: <img src="pictures/Küche/Willkommensgeschenk.jpg" />,
    },
    {
      row_span: 1,
      col_span: 1,
      content: <img src="pictures/Küche/Küchenzeile.jpg" />,
    },
    {
      row_span: 1,
      col_span: 1,
      content: <img src="pictures/Küche/Küchenzeile.jpg" />,
    },
  ];

  return (
    <Section {...rest}>
      <div className="container grid grid-cols-3 grid-rows-3 gap-4 m-auto aspect-4/3">
        {items.map((item, index) => (
          <div
            key={index}
            className={classNames(
              `row-span-${item.row_span}`,
              `col-span-${item.col_span}`,
              "overflow-hidden"
            )}
          >
            {item.content}
          </div>
        ))}
      </div>
    </Section>
  );
}

{
  /* <div className="row-span-2">
          <img src="/pictures/Küche/Küchenzeile.jpg" alt="" />
        </div> */
}

export default Gallery;
