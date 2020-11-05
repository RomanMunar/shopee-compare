import React from "react";
import styled from "styled-components";

type Props = {
  as?: HTMLElement;
};

// const Flex = ({ as: Component }: Props) => {
//   return <Component></Component>;
// };

const FlexStyle = styled.div<{
  gap?: number;
  overflow?:"hidden"|"scroll";
  align?: "center" | "flex-start" | "flex-end";
  justify?: "center" | "flex-start" | "flex-end" | "between" | "around";
  grow?: number;
  shrink?: number;
  dir?: "column" | "row" | "column-reverse" | "row-reverse";
  wrap?: "wrap" | "nowrap";
}>`
  display: flex;
  align-items: ${(props) => (props.align ? props.align : "center")};
  gap: ${(props) => (props.gap ? `${props.gap}%` : "0")};
  justify-content: ${(props) => (props.justify ? props.align : "center")};
  flex-grow: ${(props) => (props.grow ? props.grow : "0")};
  flex-shrink: ${(props) => (props.shrink ? props.shrink : "0")};
  flex-direction: ${(props) => (props.dir ? props.dir : "column")};
  flex-wrap: ${(props) => (props.wrap ? props.wrap : "nowrap")};
`;

export default FlexStyle;
