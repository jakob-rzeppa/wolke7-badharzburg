import { useState } from "react";
import Loading from "../components/Loading";
import usePricingData from "../hooks/usePricingData";
import DateRangePicker from "../components/DateRangePicker";
import PricingTable from "../components/PricingTable";
import usePricing from "../hooks/usePricing";

export interface PricingData {
  start_date: string;
  end_date: string;
  prices: {
    season: string;
    start_date: string;
    price_per_night: number;
  }[];
}

const getNextDay = (day: Date) => {
  return new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1);
};

function Pricing() {
  const [arrivalDate, setArrivalDate] = useState<Date>(new Date());
  const [departureDate, setDepartureDate] = useState<Date>(
    getNextDay(new Date())
  );

  const { data: pricingData, isLoading, error } = usePricingData();

  const { pricePerNight, totalPrice, pricePerSeason } = usePricing(
    pricingData,
    arrivalDate,
    departureDate
  );

  return (
    <div className="flex flex-col gap-4 p-8 mx-auto w-max">
      <DateRangePicker
        arrivalDate={arrivalDate}
        departureDate={departureDate}
        setArrivalDate={setArrivalDate}
        setDepartureDate={setDepartureDate}
      />
      {error ? (
        <p>Error: {error.message}</p>
      ) : !isLoading ? (
        <PricingTable totalPrice={totalPrice} pricePerSeason={pricePerSeason} />
      ) : (
        <Loading size="md" />
      )}
    </div>
  );
}

export default Pricing;
