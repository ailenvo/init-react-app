import React from "react";
import NavItem from "../nav-item/nav-item";
import HomeIcon from "@material-ui/icons/Home";

type Props = {
  handleDrawerToggle?: () => void;
};

export default function SideBar(props: Props) {
  // navigation
  const navItem = [
    {
      to: "/",
      label: "Home",
      iconClass: <HomeIcon />,
      handleClick: () => {}
    }
  ];

  return (
    <div id="side-bar">
      <ul className="nav mt-3 flex-column">
        {navItem.map(item => (
          <NavItem
            key={item.label}
            to={item.to}
            label={item.label}
            handleDrawerToggle={props.handleDrawerToggle}
            iconClass={item.iconClass}
            handleClick={item.handleClick}
          />
        ))}
      </ul>
    </div>
  );
}
