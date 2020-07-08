import React from "react";
import "./loading.scss";
import { WithAppContextProps } from "../appContext";
import withAppConsumer from "../withConsumer";

const loading: React.FC<WithAppContextProps> = ({ isLoading }) => {
  return isLoading ? (
    <div className="loading-section">
      <div className="overlay-background" />
      <div className="loader" />
    </div>
  ) : null;
};

export default withAppConsumer(loading);
