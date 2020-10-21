import React, { Fragment } from "react";
import NormalizedStyles from "./NormalizedStyles";
import BaseStyles from "./BaseStyles";
import Routes from "./Routes";
import "./fontStyles.css";

function App() {
  return (
    <Fragment>
      <NormalizedStyles />
      <BaseStyles />
      <Routes />
    </Fragment>
  );
}

export default App;
