import styled from "styled-components";
import { color, font, mixin, shadows } from "../../shared/styles";

export {
  Item,
  ItemImage,
  ItemText,
  Items,
  Title,
  MenuWrapper,
  SelectPanelStyle,
};

const Item = styled.div`
  position: relative;
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ItemImage = styled.img`
  width: 20%;
`;

const ItemText = styled.span`
  font-size: 13px;
  margin-left: 5px;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const Items = styled.div<{
  isDraggingOver: boolean;
  isSelectedItemsEmpty: boolean;
}>`
  background-color: ${(props) =>
    !props.isSelectedItemsEmpty && color.backgroundLightPrimary};
  overflow: auto;
  ${mixin.scrollableX};
  ${mixin.customScrollbar()};
  width: 100%;
  flex-grow: 1;
  padding: 5px 10px;
  margin-top: 15px;
  border-radius: 15px;
  margin-bottom: 10px;
`;

const Title = styled.span`
  font-size: 20px;
  ${font.medium}
  line-height: 20px;
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const SelectPanelStyle = styled.div<{ isSelectPanelOpen: boolean }>`
  ${shadows.shadowMd}
  overflow: hidden;
  max-width: 350px;
  padding: 20px;
  border-radius: 15px;
  background-color: ${color.backgroundLight};
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 55%;
  top: 80px;
  left: 53%;
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s;
  visibility: ${(props) => props.isSelectPanelOpen && "visible"};
  transform: ${(props) => !props.isSelectPanelOpen && "translateX(-80px)"};
  transition-property: all;
  opacity: ${(props) => props.isSelectPanelOpen && 1};
  z-index: 200;
`;
