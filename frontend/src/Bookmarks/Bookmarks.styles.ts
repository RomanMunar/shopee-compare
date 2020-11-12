import styled from "styled-components";
import { font } from "../shared/styles";

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
  ContainedRoute,
  Title,
  Test,
};

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
  ${(props) => props.pinned && "background: #2f88ff"};
  border: 3px solid ${(props) => (props.pinned ? "#cae1ff" : "#2f88ff")};
  border-radius: 50%;
  margin: 5px 0;
`;

const Line = styled.div`
  width: 6px;
  background: linear-gradient(45deg, #2370e21c, #2f88ffab, #2774dacc);
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

const ContainedRoute = styled.div`
  padding: 30px 0 0 30px;
`;

const Test = styled.div`
  background-color: #fbe94d;
  height: 400px;
  width: 400px;
`;

const Title = styled.h1`
  margin-right: 20px;
  font-size: 30px;
  ${font.medium}
  line-height: 30px;
`;
