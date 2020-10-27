import React from "react";
import styled from "styled-components";
import { SearchItem } from "../../interfaces";
import { color, font } from "../../styles";

interface Props {
  results: SearchItem[];
}
const SelectedItems = ({ results }: Props) => {
  return (
    <SelectPanel>
      <Title>Selected Items</Title>
      <Items>
        {results.map((res) => (
          <Item>{res.name.replace(/[^a-zA-Z0-9 ]/g, "")}</Item>
        ))}
      </Items>
    </SelectPanel>
  );
};

const Title = styled.span`
  font-size: 20px;
  ${font.medium}
  line-height: 20px;
`;

const Items = styled.div`
  margin-top: 15px;
  margin-bottom: 10px;
`;

const Item = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  display: block;
  overflow: hidden;
`;

const SelectPanel = styled.div`
  padding: 20px;
  border-radius: 15px;
  background-color: ${color.backgroundLight};
  position: absolute;
  width: 55%;
  top: 110px;
  left: 500px;
`;

export default SelectedItems;
