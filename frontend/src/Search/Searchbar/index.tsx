import React, { ReactElement } from "react";
import styled from "styled-components";
import { Icon } from "../../components/Icon";
import { font } from "../../styles";
import { StyledInput, InputElement } from "./Styles";

export default (): ReactElement => (
  <StyledInput>
    <div
      style={{
        position: "absolute",
        pointerEvents: "none",
        top: "4px",
        left: "8px",
      }}
    >
      <Icon size={24} type='SearchBar' />
    </div>
    <InputElement />
    <Filter>
      <Select>
        <option selected disabled hidden>
          Sort By
        </option>

        {["Relevance", "Sales", "Recent"].map((option) => (
          <option>{option}</option>
        ))}
      </Select>
    </Filter>
  </StyledInput>
);

const Select = styled.select`
  border: 0px;
  background-color: transparent;
  ${font.medium}
  color: #172b4d;
  margin-left: -5px;
`;
const Filter = styled.div`
  top: 4px;
  right: 4px;
  ${font.medium}
  position: absolute;
  padding: 2px;
`;
