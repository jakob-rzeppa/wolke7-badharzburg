import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const data = [
  {
    title: "General equipment",
    infos: ["Modern heater", "Free WiFi", "Non smoking apartment"],
  },
  {
    title: "Livingroom and bedroom",
    infos: ["Double bed", "Flat screen TV", "Sofa bed", "Radio"],
  },
  {
    title: "Common areas",
    infos: [
      "Free private parking",
      "Fenced property",
      "Terrace with garden furniture",
      "Table grill",
    ],
  },
  { title: "Bathroom", infos: ["Shower", "Hairdryer", "Large mirror"] },
  {
    title: "Kitchen",
    infos: [
      "Dishwasher",
      "Fridge / freezer",
      "Oven / ceramic hob",
      "Water heater",
      "Coffee machine / Nespresso coffee machine",
    ],
  },
  {
    title: "Service",
    infos: ["Cleaning", "Laundry package 20 € per person upon request"],
  },
  {
    title: "Activities",
    infos: ["Golf course", "Hiking", "Biking", "Skiing", "Motorcycling"],
  },
  {
    title: "Location",
    infos: ["Quiet central location", "Near hiking trails"],
  },
];

function Equipment() {
  return (
    <div>
      <Accordion.Root
        className="w-2/3 p-8 mx-auto rounded-md bg-base-200"
        type="single"
        defaultValue="item"
        collapsible
      >
        {data.map((element, index) => (
          <Accordion.Item
            value={element.title}
            key={index}
            className="overflow-hidden"
          >
            <Accordion.Header className="flex">
              <Accordion.Trigger className="flex items-center justify-between flex-1 text-2xl cursor-default group font-accent text-tertiary">
                {element.title}
                <ChevronDownIcon
                  className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                  width={25}
                  height={25}
                />
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
              {element.infos.map((info, index) => (
                <p className="" key={index}>
                  {info}
                </p>
              ))}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}

export default Equipment;
