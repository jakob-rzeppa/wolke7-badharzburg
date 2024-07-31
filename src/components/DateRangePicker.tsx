import { Datepicker } from "flowbite-react";

interface DateRangePickerProps {
  arrivalDate: Date;
  setArrivalDate: (date: Date) => void;
  departureDate: Date;
  setDepartureDate: (date: Date) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  arrivalDate,
  setArrivalDate,
  departureDate,
  setDepartureDate,
}) => {
  function getNextDay(arrivalDate: Date): Date {
    const nextDay = new Date(arrivalDate);
    nextDay.setDate(nextDay.getDate() + 1);
    return nextDay;
  }
  return (
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
        minDate={getNextDay(arrivalDate)}
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
  );
};

export default DateRangePicker;
