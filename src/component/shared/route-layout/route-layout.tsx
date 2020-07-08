import React from "react";
import { Route } from "react-router-dom";
import Layout from "../layout/layout";
//import { getCookies } from "../../utils/helper";

const RouteLayout: React.FC<any> = ({ component: Component, ...rest }) => {
  const [title, setTitle] = React.useState<string | null>("Aide Et Action.");

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} title={title} setTitle={setTitle} />
        </Layout>
      )}
    />
  );
};

export default RouteLayout;
