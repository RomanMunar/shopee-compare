import { Layout } from "../../../interfaces";
import styled from "styled-components";
import { color, mixin, shadows } from "../../../shared/styles";

export {
  ArrowContainer,
  SubImages,
  IndexCircle,
  Indexes,
  CompareItemFixed,
  CompareItemImage,
};

const ArrowContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const IndexCircle = styled.div<{ active: boolean }>`
  background-color: ${(props) =>
    props.active ? "#252526" : "rgba(37, 37, 38, 0.5)"};
  border-radius: 50%;
  padding: 5px;
  margin-right: 2px;
`;

const Indexes = styled.div<{ on?: "ratings" }>`
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(37, 37, 38, 0.27));
  ${(props) => props.on === "ratings" && "background: transparent"};
  overflow: auto;
  bottom: 0;
  height: 60px;
  ${mixin.clickable}
  z-index: 2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
`;
const CompareItemFixed = styled.div<{ layout?: Layout }>`
  position: relative;
  background: linear-gradient(180deg, #3b3c3ecc, #303131);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 100%;
  padding-bottom: 40%;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;
const CompareItemImage = styled.img<{
  active: boolean;
  on?: "selection" | "ratings" | "compare" | "main";
  layout?: Layout;
}>`
  width: ${(props) => (props.on === "main" ? " 75%" : " 60%")};
  padding: 5px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  bottom: 0;
`;

const SubImages = styled.img<{ active: boolean }>`
  border: 2px solid ${(props) => (props.active ? color.primary : "transparent")};
  max-width: 80px;
  max-height: 80px;
  height: 100%;
  margin-right: 5px;
`;
