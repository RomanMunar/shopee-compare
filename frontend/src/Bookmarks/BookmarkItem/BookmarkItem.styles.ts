import styled from "styled-components";
import { color, font } from "../../shared/styles";

export {
  Timeline,
  TimeLineWrapper,
  Circle,
  Line,
  Content,
  BookmarkTitle,
  Items,
  Item,
  ItemTitle,
  AnimatedToolbar,
};

const AnimatedToolbar = styled.div<{ showAddRow: boolean }>`
  visibility: hidden;
  opacity: 0;
  transition: all 0.1s;
  visibility: ${(props) => props.showAddRow && "visible"};
  ${(props) => !props.showAddRow && "transform:translateY(-80px)"};
  transition-property: all;
  opacity: ${(props) => props.showAddRow && 1};
  z-index: 300;
`;
const Timeline = styled.div<{ showItems: boolean; length: number }>`
  transition: all 0.2s;
  height: ${(props) => props.length + 90 + "px"};
  height: ${(props) => props.showItems && "60px"};
  position: relative;
  margin: 20px 0 15px;
  display: flex;
  &:first-of-type {
    margin: 0 0 15px;
  }
`;
const TimeLineWrapper = styled.div<{ showItems: boolean }>`
  transition: all 0.2s;
  height: ${(props) => props.showItems && "60px"};
  width: 20px;
  position: relative;
  margin-right: 20px;
`;
const Circle = styled.div<{ showItems: boolean; pinned?: boolean }>`
  cursor: pointer;
  width: 20px;
  height: 20px;
  transition: all 0.2s;
  background: ${(props) =>
    props.pinned
      ? props.showItems
        ? "#cbf9f2"
        : "#1cead1"
      : props.showItems
      ? "#bec8e6"
      : color.primary};
  border: 3px solid
    ${(props) =>
      props.pinned
        ? props.showItems
          ? "#1cead1"
          : "#cbf9f2"
        : props.showItems
        ? color.primary
        : "#bec8e6"};
  border-radius: 50%;
  margin: 5px 0;
`;
const Line = styled.div<{ pinned?: boolean; showItems: boolean }>`
  cursor: pointer;
  width: 6px;
  background: ${(props) =>
    props.pinned
      ? `linear-gradient(45deg, #2370e21c, ${color.primary}ab, #20ead1cc)`
      : `linear-gradient(45deg, #2370e21c, ${color.primary}ab, #2774dacc)`};
  border-radius: 5px;
  position: absolute;
  height: 90%;
  right: 7px;
`;
const Content = styled.div`
  padding: 5px 10px;
`;
const BookmarkTitle = styled.span`
  ${font.medium}
  display:block;
`;
const Items = styled.div<{ showItems: boolean }>`
  visibility: visible;
  opacity: 1;
  transition: all 0.1s;
  visibility: ${(props) => props.showItems && "hidden"};
  ${(props) => props.showItems && "transform:translateY(-80px)"};
  transition-property: all;
  opacity: ${(props) => props.showItems && 0};
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`;
const Item = styled.div`
  padding-right: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ItemTitle = styled.div`
  margin-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  font-size: 14px;
`;
