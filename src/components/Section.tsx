import classNames from "classnames";
import { ReactNode } from "react";

export interface SectionProps {
  background?: "bg-base-100" | "bg-base-200";
  children?: ReactNode;
  className?: string;
}

function Section({ background, children, className }: SectionProps) {
  return (
    <section className={classNames(background, className, "py-16 w-full")}>
      {children}
    </section>
  );
}

export default Section;
