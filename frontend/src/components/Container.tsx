import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

export default ({ children }: Props): ReactElement => {
  return <Container>{children}</Container>;
};

export const Container = styled.main`
  overflow: hidden;
  padding-left: 80px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;
