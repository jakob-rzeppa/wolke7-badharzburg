import { Spinner } from "flowbite-react";
import React from "react";

interface Props {
  size: "xs" | "sm" | "md" | "lg" | "xl";
}

function Loading({ size }: Props) {
  return (
    <Spinner
      aria-label="loading"
      size={size}
      className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
    />
  );
}

export default Loading;
