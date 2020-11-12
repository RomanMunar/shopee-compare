import styled from "styled-components";
import { color, font } from "../../../shared/styles";

export {
  Overlay,
  ProductTitle,
  DialogWrapper,
  ToolbarWrapper,
  HeadingWrapper,
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableData,
};

const Overlay = styled.div<{ z: number }>`
  z-index: ${(props) => props.z};
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  display: flex;
`;

const ProductTitle = styled.span`
  text-align: start;
  font-size: 14px;
  margin-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  width: 100%;
  -webkit-box-orient: vertical;
`;

const DialogWrapper = styled.div<{ guide: "search" | "compare" | "bookmarks" }>`
  width: ${(props) => (props.guide === "bookmarks" ? "40%" : "50%")};
  position: absolute;
  top: ${(props) =>
    props.guide === "compare" || props.guide === "bookmarks" ? "4%" : "12%"};
  left: ${(props) => (props.guide === "bookmarks" ? "28%" : "22%")};
  z-index: 500;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const ToolbarWrapper = styled.div`
  position: absolute;
  top: -40px;
  right: 0;
`;

const HeadingWrapper = styled.div`
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

const TableHead = styled.th`
  font-size: 18px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  padding: 20px 0;
  margin-top: 10px;
  border-radius: 10px;
  background: ${color.backgroundLightest};
`;
const TableHeader = styled.thead`
  line-height: 40px;
`;

const TableBody = styled.tbody`
  white-space: nowrap;
  text-align: center;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #dadada;
  }
`;

const TableData = styled.td`
  font-size: 14px;
  ${font.regular}
`;
