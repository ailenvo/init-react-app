import { makeStyles } from "@material-ui/core";
import themes from "../../../helpers/style/theme";

const drawerWidth = "100%";

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    "& header": {
      background: themes.primaryColor,
      boxShadow: "none",
      color: "#2F2F30",
      position: "fixed",
      top: 0,
      padding: "0 15px",
      zIndex: 300,
      height: 60,
      "& svg": {
        width: "1.5em",
        height: "1.5em"
      }
    },
    "& .MuiToolbar-root.MuiToolbar-regular.MuiToolbar-gutters": {
      padding: 0
    },
    "& button:focus": {
      outline: "none"
    },
    "& .MuiToolbar-regular": {
      height: 76
    }
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    backgroundColor: "#fff"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    position: "relative",
    zIndex: 1
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: "300px"
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: "100%",
    minHeight: "calc(100vh - 156px)"
  },
  title: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
    left: 0,
    width: "100%"
  },
  closeIcon: {
    fontSize: "20px",
    top: "2px",
    left: "6px",
    position: "relative",
    color: "#C2C2C2"
  },
  toolbarShow: {
    height: "125px",
    position: "relative"
  },
  category: {
    color: "#D8D8D8",
    fontSize: "18px",
    position: "absolute",
    bottom: "15px",
    left: "15px"
  },
  span: {
    backgroundColor: "#F2F2F2",
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    position: "absolute",
    top: "44px",
    right: "15px"
  },
  divider: {
    margin: "0 15px"
  },
  main: {
    paddingTop: "60px"
  }
}));
