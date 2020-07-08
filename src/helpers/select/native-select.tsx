import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import { Select, OutlinedInput } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const useStyles = makeStyles(() =>
  createStyles({
    formControl: {
      width: "100%",
      borderRadius: 10,
      height: 50,
      fontSize: 14,
      outline: "none"
    },
    selectEmpty: {
      padding: 0,
      borderRadius: 10,
      height: 50,
      fontSize: 14,
      outline: "none",
      fontFamily: "Poppins",
      "& .MuiSelect-select:focus": {
        borderRadius: 10
      },
      "& .MuiOutlinedInput-input": {
        padding: "16px 30px 16px 12px",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis"
      }
    }
  })
);

const useOutlinedInputStyles = makeStyles(() => ({
  root: {
    "& $notchedOutline": {
      borderColor: "#e8e8e8"
    },
    "&:hover $notchedOutline": {
      borderColor: "#e8e8e8"
    },
    "&$focused $notchedOutline": {
      border: "1px solid #f0d65b"
    },
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  },
  focused: {
    background: "#FFF"
  },
  notchedOutline: {}
}));

type Props = {
  value?: string | number;
  name?: string;
  onChange?: (event: any) => void;
  options: any[];
  placeholder?: string;
  disabled?: boolean;
  tabIndex?: number;
  idField: string; //the id of dropdown item
  valueField: string; //the display value of doropdown item
};

/**
 * 
 * @param props 
 * @event onChange event: React.ChangeEvent
 * @field name?: string | undefined;
 * @field value: unknown;
 *  @field idField: string; the id of dropdown item
 *  @field valueField: string; the display value of doropdown item
}>
 */
const NativeSelects: React.FC<Props> = props => {
  const classes = useStyles();
  const outlinedInputClasses = useOutlinedInputStyles();
  // const icon = () => {
  //   return <span className="tas-arrow-down icon mr-2"></span>;
  // };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <Select
        native
        value={props.value}
        onChange={props.onChange}
        name={"outlined-native-simple-" + props.name}
        className={classes.selectEmpty}
        disabled={props.disabled}
        tabIndex={props.tabIndex ? props.tabIndex : 0}
        IconComponent={KeyboardArrowDownIcon}
        input={
          <OutlinedInput
            name={props.name}
            id={"outlined-native-simple-" + props.name}
            classes={outlinedInputClasses}
          />
        }
      >
        {props.placeholder && <option value="">{props.placeholder}</option>}

        {props.options.map((item, index) => (
          <option key={index} value={item[props.idField]}>
            {item[props.valueField]}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default NativeSelects;
