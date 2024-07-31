import { useQuery } from "@tanstack/react-query";

const usePricingData = () => {
  return useQuery({
    queryKey: ["pricingData"],
    queryFn: async () => {
      const res = await fetch("/prices.json");
      return await res.json();
    },
  });
};

export default usePricingData;
