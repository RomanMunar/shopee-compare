import React, { Fragment } from "react";
import styled from "styled-components";
import { color } from "../styles";
import BaseStyles from "./BaseStyles";
import "./fontStyles";

function App() {
  return (
    <Fragment>
      <BaseStyles />
      <ColorCardContainer>
        {Object.entries(color).map(([key, value]) => (
          <div>
            <h3>{key}</h3>
            <ColorCard value={value} width={200} height={200} />
          </div>
        ))}
      </ColorCardContainer>
    </Fragment>
  );
}

const ColorCard = styled.div<{ value: string; width: number; height: number }>`
  background-color: ${(props) => props.value};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 20px;
  margin-right: 2px;
`;

const ColorCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default App;
