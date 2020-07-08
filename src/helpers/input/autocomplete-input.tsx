/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { makeStyles, createStyles } from "@material-ui/core";
import theme from "../style/theme";

type Props = {
  textField: string;
  onChange?: (event: any, reason: any, detail: any) => void;
  options: any[];
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: 0,
      "& fieldset": {
        borderRadius: 8
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderWidth: 1,
        borderColor: theme.primaryColor
      },
      "& .MuiFormControl-marginNormal": {
        margin: 0
      }
    }
  })
);

/**
 *
 * @param onChange (event: React.ChangeEvent{}, reason : item of options,  detail: "select-option" | "clear");
 * @param options any[]
 */
export default function AutocompleteInput(props: Props) {
  const classes = useStyles();

  return (
    <Autocomplete
      freeSolo
      options={props.options}
      className={classes.root}
      getOptionLabel={option => option[props.textField]}
      renderInput={params => (
        <TextField {...params} variant="outlined" margin="normal" />
      )}
      onChange={props.onChange}
      renderOption={(option, { inputValue }) => {
        const matches = match(option[props.textField], inputValue);
        const parts = parse(option[props.textField], matches);

        return (
          <div>
            {parts.map((part, index) => (
              <span
                key={index}
                style={{ fontWeight: part.highlight ? 600 : 400 }}
              >
                {part.text}
              </span>
            ))}
          </div>
        );
      }}
    />
  );
}
