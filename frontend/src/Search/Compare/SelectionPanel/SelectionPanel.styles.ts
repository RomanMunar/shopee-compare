import styled from "styled-components";
import { color, font } from "../../../shared/styles";

export { MenuButton, MenuTitle, CompareSelection };

const MenuButton = styled.button`
  color: #172b4d;
  white-space: nowrap;
  align-self: center;
  cursor: pointer;
  user-select: none;
`;

const MenuTitle = styled.span`
  font-size: 22px;
  white-space: nowrap;
  ${font.medium}
  line-height: 30px;
`;

const CompareSelection = styled.div<{
  hidden: boolean;
  isDraggingOver: boolean;
}>`
  overflow: auto;
  border-left: 2px solid #ececec;
  ${(props) => props.hidden && "display:none"};
  position: absolute;
  right: 0;
  max-width: 290px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1.5%;
  background-color: ${color.backgroundLightest};
`;
