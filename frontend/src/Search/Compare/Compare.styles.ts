import styled from "styled-components";
import { Layout } from "../../interfaces";
import { font } from "../../shared/styles";

export { Compare, CompareContainer, EmptyContainer, LinkButton, Title };

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
  overflow-x: auto;
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

const LinkButton = styled.button`
  color: #172b4d;
  border-bottom: 2px solid rgb(47, 136, 255);
  padding: 5px;
  cursor: pointer;
  user-select: none;
`;
