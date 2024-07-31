import { useMemo } from "react";
import { PricingData } from "../sections/Pricing";

const getNextDay = (day: Date) =>
  new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1);

const usePricing = (
  pricingData: PricingData,
  arrivalDate: Date,
  departureDate: Date
) => {
  const getPriceOfNight = (date: Date) => {
    if (
      !pricingData ||
      new Date(pricingData.start_date) > date ||
      new Date(pricingData.end_date) < date
    )
      return null;

    for (let i = 0; i < pricingData.prices.length - 1; i++) {
      const [currentDate, startDate1, startDate2] = [
        date,
        new Date(pricingData.prices[i].start_date),
        new Date(pricingData.prices[i + 1].start_date),
      ].map((d) => d.toISOString().split("T")[0]);

      if (startDate1 <= currentDate && startDate2 > currentDate) {
        return {
          price: pricingData.prices[i].price_per_night,
          season: pricingData.prices[i].season,
          day: date,
        };
      }
    }

    const lastPrice = pricingData.prices[pricingData.prices.length - 1];
    if (new Date(lastPrice.start_date) <= date) {
      return {
        price: lastPrice.price_per_night,
        season: lastPrice.season,
        day: date,
      };
    }

    return null;
  };

  const pricePerNight = useMemo(() => {
    if (
      !pricingData ||
      new Date(pricingData.start_date) > arrivalDate ||
      new Date(pricingData.end_date) < departureDate
    )
      return [];

    const nights = Math.ceil(
      (departureDate.getTime() - arrivalDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    return Array.from({ length: nights }, (_, i) =>
      getPriceOfNight(new Date(arrivalDate.getTime() + i * 86400000))
    );
  }, [pricingData, arrivalDate, departureDate]);

  const totalPrice = useMemo(
    () =>
      pricePerNight.reduce((acc, current) => acc + (current?.price || 0), 0),
    [pricePerNight]
  );

  const pricePerSeason = useMemo(() => {
    const priceSeasons: {
      start_date: Date;
      end_date: Date;
      season: string;
      days: number;
      price: number;
    }[] = [];
    pricePerNight.forEach((price) => {
      if (price) {
        const lastSeason = priceSeasons[priceSeasons.length - 1];
        if (!lastSeason || lastSeason.price !== price.price) {
          priceSeasons.push({
            start_date: price.day,
            end_date: getNextDay(price.day),
            season: price.season,
            days: 1,
            price: price.price,
          });
        } else {
          lastSeason.end_date = getNextDay(price.day);
          lastSeason.days += 1;
        }
      }
    });
    return priceSeasons;
  }, [pricePerNight]);

  return { pricePerNight, totalPrice, pricePerSeason };
};

export default usePricing;
