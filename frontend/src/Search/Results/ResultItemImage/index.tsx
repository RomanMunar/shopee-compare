import React from "react";
import { ResultItemFixedContainer, ResultItemImage as Image } from "../Styles";

interface Props {
  src: string;
  direction?: "top" | "left";
}

const ResultItemImage = ({ src, direction = "top" }: Props) => {
  return (
    <ResultItemFixedContainer direction={direction}>
      <Image direction={direction} src={`https://cf.shopee.ph/file/${src}`} />
    </ResultItemFixedContainer>
  );
};

export default ResultItemImage;
