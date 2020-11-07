import styled from "styled-components";

type Props = {
  as?: HTMLElement;
};

const Flex = styled.div<{
  gap?: number;
  overflow?: "hidden" | "scroll";
  align?: "center" | "flex-start" | "flex-end";
  justify?: "center" | "flex-start" | "flex-end" | "space-between" | "around";
  grow?: number;
  shrink?: number;
  dir?: "column" | "row" | "column-reverse" | "row-reverse";
  wrap?: "wrap" | "nowrap";
  margin?: number | string;
}>`
  display: flex;
  align-items: ${(props) => props.align && props.align};
  margin: ${(props) => props.margin && props.margin};
  overflow: ${(props) => props.overflow && props.overflow};
  gap: ${(props) => props.gap && `${props.gap}%`};
  justify-content: ${(props) => props.justify && props.justify};
  flex-grow: ${(props) => props.grow && props.grow};
  flex-shrink: ${(props) => props.shrink && props.shrink};
  flex-direction: ${(props) => props.dir && props.dir};
  flex-wrap: ${(props) => props.wrap && props.wrap};
`;

export default Flex;
