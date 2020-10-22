import React, { ReactElement } from "react";
import styled from "styled-components";
import { color, mixin } from "../styles";
import { useQuery } from "../useQuery";
interface Props {}

export default function ({}: Props): ReactElement {
  let query = useQuery().get("keyword");
  let tags = [
    "laptop",
    "shoes",
    "headphones",
    "fleshlight",
    "bagina candles",
    "100% real dragon",
  ];
  return (
    <SearchPanel>
      <Tags>
        {tags.map((t) => (
          <TagItem>{t}</TagItem>
        ))}
      </Tags>
      <div>Search Keyword is {query}</div>
    </SearchPanel>
  );
}

const SearchPanel = styled.div`
  margin-left: 80px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 35%;
  background-color: ${color.backgroundLight};
  align-items: center;
`;

const Tags = styled.div`
  flex-wrap: nowrap;
  ${mixin.scrollableX}
  ${mixin.customScrollbar({ height: 4 })}
  padding:0.5rem 1.25rem;
  width: 100%;
  height: 2.5rem;
  background-color: ${color.backgroundLightest};
`;
const TagItem = styled.span`
  padding: 0.5rem 1rem;
  cursor: point;
  word-wrap: none;
  white-space: nowrap;
  background-color: ${color.backgroundMedium};
  border-radius: 9999px;
  width: 100%;
  padding: 5px 10px;
  transition: background-color 150ms;
  margin-right: 0.35rem;
  &:hover {
    background-color: ${color.backgroundLightPrimary};
  }
`;
