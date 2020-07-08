import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./nav-item.scss";

const NavItem = ({
  isActive,
  to,
  label,
  iconClass,
  handleDrawerToggle,
  handleClick
}: any) => {
  let classes = ["nav-link"];
  if (isActive) classes.push("active");

  return (
    <li className="nav-item" onClick={handleDrawerToggle}>
      {to ? (
        <Link
          onClick={e => {
            if (handleClick) handleClick();
            isActive && e.preventDefault();
          }}
          className={classes.join(" ")}
          to={to}
        >
          <span>{iconClass}</span>
          <span className="nav-label">{label}</span>
        </Link>
      ) : (
        <div
          onClick={() => {
            if (handleClick) handleClick();
          }}
          className={classes.join(" ")}
        >
          <span className="nav-icon">{iconClass}</span>
          <span className="nav-label">{label}</span>
        </div>
      )}
    </li>
  );
};

export default withRouter(({ location, ...props }: any) => {
  let isActive = false;

  if (props.to) {
    isActive = location.pathname === props.to.split("?")[0];
  }

  return <NavItem {...props} isActive={isActive} />;
});
