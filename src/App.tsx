import React from "react";
import withAppProvider from "../src/component/providers/withProvider";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import Loading from "../src/component/providers/loading/loading";
import { withTranslation } from "react-i18next";
import RouteLayout from "../src/component/shared/route-layout/route-layout";
import Home from "../src/component/pages/home/home";

interface Props {}
interface States {}

export const routes = [
  {
    href: "home",
    exact: true,
    title: "home",
    component: Home
  },
  {
    href: "/",
    exact: true,
    title: "home",
    component: Home
  }
];

class App extends React.Component<Props, States> {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            {routes.map(({ href, exact, component }) => (
              <RouteLayout
                key={href}
                path={href}
                exact={exact}
                component={component}
              />
            ))}

            <Redirect from="/" to="/" />
          </Switch>
        </BrowserRouter>
        <Loading />
      </div>
    );
  }
}

export default withTranslation()(withAppProvider(App));
