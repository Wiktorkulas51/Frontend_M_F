import React from "react";
import GlobalStyle from "../theme/GlobalStyle";
import UserPageTemplate from "../templates/userPageTemplate";
import MainTemplate from "../templates/mainTemplate";
import LoadingTemplate from "../templates/loadingTemplate";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const MainView = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={UserPageTemplate} />
      <Route exact path="/main" component={MainTemplate} />
      <Route exact path="/loading" component={LoadingTemplate} />
    </Switch>
    <GlobalStyle />
  </BrowserRouter>
);

export default MainView;
