import styled from "styled-components";

export { RItemImage, ResultItemFixedContainer };

const RItemImage = styled.img<{ direction: "left" | "top" }>`
  ${(props) => props.direction === "left" && "border-radius: 10px;"}
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const ResultItemFixedContainer = styled.div<{
  direction: "top" | "left";
}>`
  position: relative;
  ${(props) =>
    props.direction === "top"
      ? "padding-bottom:66%"
      : "padding-right:35%;padding-bottom:20%;margin-top:3px;"};
  ${(props) =>
    props.direction === "top" && "box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.4);"};
  margin-bottom: 0.3rem;
`;
