import React from "react";
import Container from "../components/Container";
import Spinner from "../components/Spinner";
import { color } from "../shared/styles";
export const Main = () => {
  return (
    <Container>
      <div style={{ display: "flex", flexFlow: "row wrap", margin: "10px" }}>
        {Object.entries(color).map(([k, v]) => (
          <div style={{ margin: "10px" }}>
            <div>{k} color</div>
            <div
              style={{ width: "200px", height: "100px", backgroundColor: v }}
            ></div>
          </div>
        ))}
      </div>
    </Container>
  );
};
