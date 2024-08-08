import classNames from "classnames";
import { AProps } from "react-html-props";

function ActionLink({ children, className, href, ...props }: AProps) {
  return (
    <a
      href={href}
      className={classNames(
        className,
        "p-4 rounded-lg bg-primary text-primary-content hover:brightness-90 font-accent"
      )}
      {...props}
    >
      {children}
    </a>
  );
}

export default ActionLink;
