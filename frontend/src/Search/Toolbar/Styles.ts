import styled from "styled-components";
import { color, shadows } from "../../styles";

export const ToolbarButton = styled.button`
  transition: all 0.2s;
  margin-top: 4px;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-items: flex-start;
  height: 30px;
  top: 10px;
  width: 90%;
  border-radius: 15px;
  padding: 0 10px;
  position: absolute;
  background-color: ${color.backgroundLight};
  ${shadows.shadowMd}
  transition: background 0.1s;
  &:hover {
    background-color: ${color.backgroundMedium};
  }
`;
