import React from "react";
import { Home } from "./Routes/";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu/Menu";

const App: React.FC<any> = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route path="/" render={(renderProps: any) => <Home {...renderProps} />} />
      </Switch>
    </>
  );
};

export { App };
