import classNames from "classnames";
import React, { useState, createRef, useEffect } from "react";
import "./input.scss";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { InputAdornment, IconButton } from "@material-ui/core";
import { TextValidator } from "react-material-ui-form-validator";
import SearchIcon from '@material-ui/icons/Search';

interface Props {
  type: "text" | "password" | "number" | "email" | "search";
  name?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value?: string;
  errorMessage?: string;
  className?: string;
  onSearch?: (
    e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => void;
  ref?: any;
  autoComplete?: string;
  autoFocus?: boolean;
  disabled?: boolean;
}

const Input: React.FC<Props> = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      type,
      name,
      placeholder,
      onChange,
      value,
      errorMessage,
      className,
      onSearch,
      onKeyDown,
      autoComplete,
      autoFocus,
      disabled,
    },
    ref
  ) => {
    const [eye, setEye] = useState(false);

    const newRef = createRef<HTMLInputElement>();
    useEffect(() => {
      if (autoFocus) {
        newRef.current?.focus();
      }
    }, [autoFocus, newRef]);

    return (
      <div className="input-section">
        <input
          disabled={disabled}
          autoComplete={autoComplete}
          type={type === "password" && eye ? "text" : type}
          className={classNames(
            "form-control",
            {
              error: errorMessage && errorMessage.length > 0,
            },
            className
          )}
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
          defaultValue={value}
          ref={ref ? ref : newRef}
        />
        {type === "password" && (
          <InputAdornment position="end">
            <IconButton
              className="eye"
              aria-label="toggle password visibility"
              onClick={() => setEye(!eye)}
              edge="end"
            >
              {eye ? (
                <Visibility fontSize="small" />
              ) : (
                <VisibilityOff fontSize="small" />
              )}
            </IconButton>
          </InputAdornment>
        )}
        {type === "search" && (
          <span onClick={onSearch} className="search">
            <SearchIcon  />
          </span>
        )}
        {errorMessage && <div className="error">{errorMessage}</div>}
      </div>
    );
  }
);

export default Input;

export interface InputTextValidatorType {
  onChange?: (e: any) => void;
  name?: string;
  placeholder?: string;
  value?: string | number;
  validators?: any[];
  errorMessages?: any[];
  tabIndex?: number;
  validatorListener?: (event: boolean) => void;
  type: "text" | "password" | "number" | "email";
  disabled?: boolean;
};

export function InputTextValidator(props: InputTextValidatorType) {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="position-relative">
      <TextValidator
        disabled={props.disabled}
        className="landing-text-validator"
        type={props.type === "password" && showPassword ? "text" : props.type}
        value={props.value}
        name={props.name ? props.name : ""}
        onChange={props.onChange}
        placeholder={props.placeholder}
        validators={props.validators}
        errorMessages={props.errorMessages}
        tabIndex={props.tabIndex ? props.tabIndex : 1}
        role="application"
        aria-hidden="true"
        validatorListener={props.validatorListener}
      />
      {props.type === "password" && (
        <InputAdornment position="end" className="styled-input-adornment">
          <IconButton
            className="eye"
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
          >
            {showPassword ? (
              <Visibility fontSize="small" />
            ) : (
              <VisibilityOff fontSize="small" />
            )}
          </IconButton>
        </InputAdornment>
      )}
    </div>
  );
}
