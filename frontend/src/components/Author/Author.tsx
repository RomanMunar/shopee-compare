import React from "react";
import { Icon } from "../Icon";
import { AuthorImage, AuthorWrapper } from "./Author.styles";

interface Props {
  name: string;
  src: string;
  aveStar: number;
}

const Author = ({ name, src, aveStar }: Props) => {
  return (
    <AuthorWrapper>
      <AuthorImage src={`https://cf.shopee.ph/file/${src}`} />
      <div style={{ fontSize: "14px" }}>
        <span>{name}</span>
        <div>
          {aveStar.toFixed(1)}
          <Icon type='Star' size={12} />
        </div>
      </div>
    </AuthorWrapper>
  );
};

export default Author;
