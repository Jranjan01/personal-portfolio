import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Ecommerce from "./components/projectinfo/Ecommerce";
import Imageuploader from "./components/projectinfo/Imageuploader";
import Covid19 from "./components/projectinfo/Covid19";
import Library from "./components/projectinfo/Library";
import Weatherapp from "./components/projectinfo/Weatherapp";

import NotFoundPage from "./NotFoundPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/ecommerce" exact component={Ecommerce} />
        <Route path="/imageuploader" exact component={Imageuploader} />
        <Route path="/covid19" exact component={Covid19} />
        <Route path="/weather" exact component={Weatherapp} />
        <Route path="/librarymang" exact component={Library} />
        <Route path="/*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
