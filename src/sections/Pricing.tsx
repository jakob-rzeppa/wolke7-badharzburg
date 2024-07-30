import { Datepicker, Table } from "flowbite-react";
import { useMemo, useState } from "react";

function Pricing() {
  const [arrivalDate, setArrivalDate] = useState<Date>(new Date());
  const [departureDate, setDepartureDate] = useState<Date>(new Date());

  const nights = useMemo(() => {
    const arr = [];
    for (
      const dt = new Date(arrivalDate);
      dt <= new Date(departureDate);
      dt.setDate(dt.getDate() + 1)
    ) {
      arr.push(new Date(dt));
    }
    return arr;
  }, [arrivalDate, departureDate]);

  const getNextDay = (day: Date) => {
    return new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1);
  };

  return (
    <div className="flex flex-col gap-4 p-8 mx-auto w-max">
      <div className="flex gap-4">
        <Datepicker
          title="Arrival"
          minDate={new Date()}
          onSelectedDateChanged={(e) => setArrivalDate(e)}
          theme={{
            root: {
              base: "after:bg-primary",
            },
            popup: {
              root: {
                inner:
                  "inline-block rounded-lg bg-base-100 p-4 border border-primary border-2",
              },
              footer: {
                base: "hidden",
              },
            },
            views: {
              days: {
                items: {
                  item: {
                    selected: "bg-primary hover:bg-primary hover:brightness-90",
                  },
                },
              },
              months: {
                items: {
                  item: {
                    selected: "bg-primary hover:bg-primary hover:brightness-90",
                  },
                },
              },
              years: {
                items: {
                  item: {
                    selected: "bg-primary hover:bg-primary hover:brightness-90",
                  },
                },
              },
              decades: {
                items: {
                  item: {
                    selected: "bg-primary hover:bg-primary hover:brightness-90",
                  },
                },
              },
            },
          }}
        />
        <Datepicker
          title="Departure"
          minDate={
            new Date(
              arrivalDate.getFullYear(),
              arrivalDate.getMonth(),
              arrivalDate.getDate() + 1
            )
          }
          onSelectedDateChanged={(e) => setDepartureDate(e)}
          theme={{
            root: {
              base: "after:bg-primary",
            },
            popup: {
              root: {
                inner:
                  "inline-block rounded-lg bg-base-100 p-4 border border-primary border-2",
              },
              footer: {
                base: "hidden",
              },
            },
            views: {
              days: {
                items: {
                  item: {
                    selected: "bg-primary hover:bg-primary hover:brightness-90",
                  },
                },
              },
              months: {
                items: {
                  item: {
                    selected: "bg-primary hover:bg-primary hover:brightness-90",
                  },
                },
              },
              years: {
                items: {
                  item: {
                    selected: "bg-primary hover:bg-primary hover:brightness-90",
                  },
                },
              },
              decades: {
                items: {
                  item: {
                    selected: "bg-primary hover:bg-primary hover:brightness-90",
                  },
                },
              },
            },
          }}
        />
      </div>
      <Table>
        <Table.Head>
          <Table.HeadCell>Night</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {nights.map((night, index) => (
            <Table.Row key={index}>
              <Table.Cell>
                {`${night.getDate()}.${night.getMonth()}. -> ${getNextDay(
                  night
                ).getDate()}.${getNextDay(night).getMonth()}.`}
              </Table.Cell>
              <Table.Cell>40€</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <p>Total: </p>
    </div>
  );
}

export default Pricing;
