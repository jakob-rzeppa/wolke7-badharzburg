import { Datepicker } from "flowbite-react";
import { useState } from "react";

function Pricing() {
  const [arrivalDate, setArrivalDate] = useState<Date>(new Date());
  const [departureDate, setDepartureDate] = useState<Date>(new Date());

  return (
    <div className="flex gap-4">
      <Datepicker
        title="Arrival"
        minDate={new Date()}
        onSelectedDateChanged={(e) => setArrivalDate(e)}
        theme={{
          popup: {
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
          popup: {
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
  );
}

export default Pricing;
