import styled from "styled-components";
import { Layout } from "../../interfaces";
import { color, font, mixin, shadows } from "../../shared/styles";

export const CompareContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  gap: 2.5%;
`;

export const CompareSelection = styled.div<{
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
export const MenuTitle = styled.span`
  font-size: 20px;
  ${font.medium}
  line-height: 20px;
`;

export const Title = styled.span`
  display: block;
  font-size: 24px;
  ${font.bold}
  margin-bottom: 10px;
`;

export const Compare = styled.div<{ isDraggingOver: boolean; layout: Layout }>`
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

export const EmptyContainer = styled.div`
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

export const CompareItem = styled.div<{
  draggingStyle: any;
  isDragging: boolean;
  on?: "selection" | "main";
}>`
  border-radius: 15px;
  ${shadows.shadowLg}
  min-width: min-content;
  overflow-y: scroll;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  ${(props) => (props.isDragging ? shadows.shadow2Xl : shadows.shadowMd)};
  ${(props) => props.draggingStyle}
  background-color: ${(props) => (props.isDragging ? "#fef3ab" : "#fff")};
`;

export const CompareItemTitle = styled.div`
  margin-top: 15px;
  padding-right: 0.3rem;
  padding-left: 0.3rem;
`;
export const DescriptionTitle = styled.span`
  ${font.bold}
  font-size:20px;
`;

export const DescriptionParagraph = styled.p<{ on?: "main" }>`
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
  font-size: 14px;
  margin: 8px 0;
  padding-right: 0.3rem;
  padding-left: 0.3rem;
  ${(props) =>
    props.on !== "main" &&
    "overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 5;-webkit-box-orient: vertical;"}
`;
export const AuthorImage = styled.img`
  border-radius: 50%;
  width: 40px;
  margin-right: 5px;
`;
export const RatingsSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
  margin: 10px 0;
`;

export const RatingItem = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  margin: 5px 0;
`;
export const RatingBar = styled.div<{ percent: number }>`
  width: ${(props) => `${props.percent}%`};
  background-color: #f6c84c;
  border-radius: 4px;
  margin-left: 8px;
`;
export const RatingCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  align-items: center;
  margin-top: 15px;
`;
export const AuthorWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: max-content;
  margin: auto;
`;
export const SectionTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const RatingsWrapper = styled.div<{ layout: Layout }>`
  display: grid;
  width: 100%;
  grid-template-columns: ${(props) =>
    props.layout === "main" ? "1fr 1fr" : "1fr"};
  gap: 4%;
`;
