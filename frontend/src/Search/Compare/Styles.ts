import styled from "styled-components";
import { color, font, mixin, shadows } from "../../shared/styles";

export const CompareContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 20px;
  width: 93%;
  height: 100%;
  position: absolute;
  background: ${color.backgroundLight};
  gap: 2.5%;
`;

export const CompareSelection = styled.div<{
  hidden: boolean;
  isDraggingOver: boolean;
}>`
  ${(props) => props.hidden && "display:none"};
  min-width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1.5%;
  border-radius: 15px;
  background-color: ${(props) =>
    props.isDraggingOver
      ? color.backgroundDarkPrimary
      : color.backgroundLightest};
  ${shadows.shadowLg}
`;
export const MenuWrapper = styled.div`
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  z-index: 10;
  position: absolute;
  top: 5px;
  margin: auto;
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

export const Compare = styled.div<{ isDraggingOver: boolean }>`
  position: relative;
  padding: 20px;
  display: flex;
  height: 100%;
  gap: 1.5%;
  border-radius: 15px;
  background-color: ${(props) =>
    props.isDraggingOver
      ? color.backgroundDarkPrimary
      : color.backgroundLightest};
  ${shadows.shadowLg}
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
  on: "main" | "selection";
  draggingStyle: any;
  isDragging: boolean;
}>`
min-width: min-content;
  ${mixin.scrollableY}
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  ${(props) => (props.isDragging ? shadows.shadow2Xl : shadows.shadowMd)};
  ${(props) => props.draggingStyle}
  background-color: ${(props) =>
    props.isDragging ? "#fef3ab" : color.backgroundLight};
`;

export const CompareItemTitle = styled.div`
  margin-top: 15px;
  width: 95%;
  padding-right: 0.3rem;
  padding-left: 0.3rem;
`;
export const DescriptionTitle = styled.span`
  ${font.bold}
  font-size:20px;
`;

export const DescriptionParagraph = styled.p`
  flex-grow: 1;
  font-size: 14px;
  margin: 8px 0;
  padding-right: 0.3rem;
  padding-left: 0.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
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
