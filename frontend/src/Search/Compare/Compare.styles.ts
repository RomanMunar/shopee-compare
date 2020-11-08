import styled from "styled-components";
import { Layout } from "../../interfaces";
import { color, font } from "../../shared/styles";

export {
  Compare,
  CompareContainer,
  CompareSelection,
  EmptyContainer,
  LinkButton,
  MenuButton,
  MenuTitle,
  Title,
};

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

const CompareContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  gap: 2.5%;
`;

const EmptyContainer = styled.div`
  padding: 20px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 25%;
  top: 25vh;
  left: 30vw;
  border: 5px dashed rgba(51, 51, 51, 0.6);
  border-radius: 2px;
`;

const Compare = styled.div<{ isDraggingOver: boolean; layout: Layout }>`
  border-right: 2px solid #ececec;
  border-left: 2px solid #ececec;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #f4f5f7;
  margin-right: 40px;
  padding: 20px 35px;
  height: 100%;
  gap: 1.5%;
  width: ${(props) => (props.layout !== "none" ? "75%;" : "100%;")};
`;

const Title = styled.span`
  display: block;
  font-size: 24px;
  ${font.bold}
  margin-bottom: 10px;
`;

const CompareSelection = styled.div<{
  hidden: boolean;
  isDraggingOver: boolean;
}>`
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

const LinkButton = styled.button`
  color: #172b4d;
  border-bottom: 2px solid rgb(47, 136, 255);
  padding: 5px;
  cursor: pointer;
  user-select: none;
`;
