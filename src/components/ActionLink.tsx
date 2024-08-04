import classNames from "classnames";
import { Link, LinkProps } from "react-router-dom";

export interface ActionLinkProps extends LinkProps {}

function ActionLink({ children, className, to, ...props }: ActionLinkProps) {
  return (
    <Link
      to={to}
      className={classNames(
        className,
        "p-4 rounded-lg bg-primary text-primary-content hover:brightness-90 font-accent"
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

export default ActionLink;
