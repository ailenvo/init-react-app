import React from "react";
import {
  useTheme,
  Drawer,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
  Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import SideBar from "../side-bar/side-bar";
import { useTranslation } from "react-i18next";
import { useStyles } from "./layout-styles";

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [children]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={handleDrawerToggle}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} />
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          <div>
            <div className={classes.toolbarShow}>
              <span className={classes.span} onClick={handleDrawerToggle}>
                <CloseIcon className={classes.closeIcon} />
              </span>

              <div className={classes.category}>{t("menu.title")}</div>
            </div>
            <Divider className={classes.divider} />
            <SideBar handleDrawerToggle={handleDrawerToggle} />
          </div>
        </Drawer>
      </nav>
      <div className={classes.main}>{children}</div>
    </div>
  );
};

export default Layout;
