import React from "react";
import { ResultItemFixedContainer, RItemImage } from "./ResultItemImage.styles";

interface Props {
  src: string;
  direction?: "top" | "left";
}

const ResultItemImage = ({ src, direction = "top" }: Props) => {
  return (
    <ResultItemFixedContainer direction={direction}>
      <RItemImage
        direction={direction}
        src={`https://cf.shopee.ph/file/${src}`}
      />
    </ResultItemFixedContainer>
  );
};

export default ResultItemImage;
