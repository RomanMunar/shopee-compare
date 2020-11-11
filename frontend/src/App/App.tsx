import React, { Fragment } from "react";
import NormalizedStyles from "./NormalizedStyles";
import BaseStyles from "./BaseStyles";
import Routes from "./Routes";
import Toast from "./Toast";
import "./fontStyles.css";

function App() {
  return (
    <Fragment>
      <NormalizedStyles />
      <BaseStyles />
      <Routes />
      <Toast />;
    </Fragment>
  );
}

export default App;
