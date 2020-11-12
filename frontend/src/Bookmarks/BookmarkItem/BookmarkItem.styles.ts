import styled from "styled-components";
import { font } from "../../shared/styles";

export {
  Timeline,
  TimeLineWrapper,
  Circle,
  Line,
  Content,
  BookmarkTitle,
  Items,
  Item,
  ItemImage,
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
  &:hover {
    transform: scale(1.1);
  }
`;
const Timeline = styled.div`
  position: relative;
  margin: 20px 0 15px;
  display: flex;
  &:first-of-type {
    margin: 0 0 15px;
  }
`;
const TimeLineWrapper = styled.div`
  width: 20px;
  position: relative;
  margin-right: 20px;
`;
const Circle = styled.div<{ pinned?: boolean }>`
  width: 20px;
  height: 20px;
  background: ${(props) => (props.pinned ? "#1cead1" : "#2f88ff")};
  border: 3px solid ${(props) => (props.pinned ? "#cbf9f2" : "#bec8e6;")};
  border-radius: 50%;
  margin: 5px 0;
`;
const Line = styled.div<{ pinned?: boolean }>`
  width: 6px;
  background: ${(props) =>
    props.pinned
      ? "linear-gradient(45deg, #2370e21c, #2f88ffab, #20ead1cc)"
      : "linear-gradient(45deg, #2370e21c, #2f88ffab, #2774dacc)"};
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
`;
const Items = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  width: 60%;
`;
const Item = styled.div`
  padding-right: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ItemImage = styled.div`
  height: 65px;
  width: 50%;
  margin-inline-end: 10px;
  background: linear-gradient(45deg, #8033b9, #ea0bd9, #ffe000, #ffa04e);
  border-radius: 15px;
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
