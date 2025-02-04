import styled from "styled-components";

type Props = {
  as?: HTMLElement;
};

const Flex = styled.div<{
  scrollType?: "snap";
  align?: "center" | "flex-start" | "flex-end";
  border?: string;
  borderBottom?: string;
  dir?: "column" | "row" | "column-reverse" | "row-reverse";
  gap?: number;
  grow?: number;
  justify?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
  margin?: string;
  overflow?: "auto" | "hidden" | "scroll";
  padding?: string;
  shrink?: number;
  wrap?: "wrap" | "nowrap";
  width?: number | string;
  height?: number | string;
  background?: string;
}>`
  display: flex;
  scroll-snap-type: ${(props) => props.scrollType === "snap" && "x mandatory"};
  border: ${(props) => props.border && props.border};
  border-bottom: ${(props) => props.borderBottom && props.borderBottom};
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.height && props.height};
  background: ${(props) => props.background && props.background};
  align-items: ${(props) => props.align && props.align};
  margin: ${(props) => props.margin && props.margin};
  padding: ${(props) => props.padding && props.padding};
  overflow: ${(props) => props.overflow && props.overflow};
  gap: ${(props) => props.gap && `${props.gap}%`};
  justify-content: ${(props) => props.justify && props.justify};
  flex-grow: ${(props) => props.grow && props.grow};
  flex-shrink: ${(props) => props.shrink && props.shrink};
  flex-direction: ${(props) => props.dir && props.dir};
  flex-wrap: ${(props) => props.wrap && props.wrap};
`;

export default Flex;
