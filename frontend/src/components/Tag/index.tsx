import React, { ReactElement } from "react";
import styled from "styled-components";
import { color, shadows } from "../../styles";

interface Props {
  primary?: boolean;
  children: React.ReactNode;
}

export default ({ primary, children }: Props): ReactElement => {
  return <Tag>{children}</Tag>;
};

const Tag = styled.span<Props>`
  padding: 0.5rem 1rem;
  cursor: point;
  word-wrap: none;
  white-space: nowrap;
  border-radius: 9999px;
  width: 100%;
  padding: 5px 10px;
  margin-right: 0.35rem;
  background-color: ${(props) =>
    props.primary === true
      ? color.backgroundDarkPrimary
      : color.backgroundLightest};
  transition: background-color 150ms;
  ${shadows.shadowSm}
  &:hover {
    background-color: ${color.backgroundLight};
    ${shadows.shadowMd}
  }
`;
