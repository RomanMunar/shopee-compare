import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { color } from "../shared/styles";

export const Main = () => {
  return (
    <Container>
      <Flex align='flex-start' justify='flex-start' dir='row' wrap='wrap'>
        {Object.entries(color).map(([k, v]) => (
          <div style={{ margin: "10px" }}>
            <div>{k} color</div>
            <div
              style={{ width: "200px", height: "100px", backgroundColor: v }}
            ></div>
          </div>
        ))}
      </Flex>
    </Container>
  );
};
