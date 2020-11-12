import styled from "styled-components";
import { font, color, shadows } from "../../shared/styles";

export const TButton = styled.button`
  ${font.bold}
  color:${color.textLink};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  margin-top: 4px;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

type ToolbarVariants = "right-top" | "default";
export const Toolbar = styled.div<{
  place: ToolbarVariants;
  withoutShadow?: boolean;
  withoutMargin?: boolean;
}>`
  display: flex;
  ${(props) => props.place === "right-top" && "align-self:flex-end;"}
  ${(props) => !props.withoutMargin && "margin:10px 10px 0 0;"}
  align-items: center;
  justify-items: flex-start;
  height: 30px;
  width: fit-content;
  border-radius: 15px;
  padding: 0 10px;
  background-color: #f1f1f1;
  ${(props) => !props.withoutShadow && shadows.shadowMd}
  transition: background 0.1s;
  &:hover {
    background-color: ${color.backgroundMedium};
  }
`;
