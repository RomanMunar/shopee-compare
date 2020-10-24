import React from "react";
import {
  ResultItemFixedContainer,
  ResultItemImage as Image,
} from "../../Styles";

interface Props {
  src: string;
}

const ResultItemImage = ({ src }: Props) => {
  return (
    <ResultItemFixedContainer>
      <Image src={`https://cf.shopee.ph/file/${src}`} />
    </ResultItemFixedContainer>
  );
};

export default ResultItemImage;
