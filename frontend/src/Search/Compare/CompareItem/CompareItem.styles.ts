import styled from "styled-components";
import { Layout } from "../../../interfaces";
import { font, shadows } from "../../../shared/styles";

export {
  SectionWrapper,
  SectionTitle,
  RatingsWrapper,
  CItem,
  CompareItemTitle,
  DescriptionTitle,
  DescriptionParagraph,
  RatingsSummary,
  RatingItem,
  RatingBar,
  RatingCount,
  SellerSection,
  Title,
  ToolbarWrapper,
};

const Title = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  width: 100%;
  -webkit-box-orient: vertical;
  font-size: 14px;
  font-family: Roboto-medium;
`;

const SellerSection = styled.div`
  background-color: rgba(193, 199, 208, 0.6);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
  margin-top: 20px;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ToolbarWrapper = styled.div`
  z-index: 1;
  position: absolute;
  right: 20px;
  top: 20px;
`;

const SectionTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const RatingsWrapper = styled.div<{ layout: Layout }>`
  display: grid;
  width: 100%;
  grid-template-columns: ${(props) =>
    props.layout === "main" ? "1fr 1fr" : "1fr"};
  gap: 4%;
`;

const CItem = styled.div<{
  layout: Layout;
  isDragging: boolean;
  on?: "selection" | "main";
}>`
  ${(props) => props.layout === "double" && "flex-basis: 50%"};
  border-radius: 15px;
  ${shadows.shadowLg}
  min-width: min-content;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  ${(props) => (props.isDragging ? shadows.shadow2Xl : shadows.shadowMd)};
  background-color: ${(props) => (props.isDragging ? "#fef3ab" : "#fff")};
`;

const CompareItemTitle = styled.div<{
  layout: Layout;
  on: "selection" | "main";
}>`
  ${(props) =>
    props.layout === "main" && props.on === "main"
      ? "padding: 20px 40px"
      : "padding: 10px"};
  ${(props) => props.on === "main" && font.medium}
  text-align: start;
  display: flex;
  align-items: flex-end;
`;
const DescriptionTitle = styled.span`
  ${font.bold}
  font-size:20px;
`;

const DescriptionParagraph = styled.p<{ on?: "main" }>`
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
  font-size: 13px;
  margin: 8px 0;
  padding-right: 0.3rem;
  padding-left: 0.3rem;
  ${(props) =>
    props.on !== "main" &&
    "overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 5;-webkit-box-orient: vertical;"}
`;
const RatingsSummary = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: flex-start;
  width: 60%;
  margin: 10px 0;
`;

const RatingItem = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  margin: 5px 0;
`;
const RatingBar = styled.div<{ percent: number }>`
  width: ${(props) => `${props.percent}%`};
  background-color: #f6c84c;
  border-radius: 4px;
  margin-left: 8px;
`;
const RatingCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
