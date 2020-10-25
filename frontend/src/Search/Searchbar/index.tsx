import React, { ReactElement, useRef, useState } from "react";
import styled from "styled-components";
import { Icon } from "../../components/Icon";
import Select from "../../components/Select";
import { font } from "../../styles";
import useOnOutsideClick from "../../useOnOutsideClick";
import { StyledInput, InputElement } from "./Styles";

export default (): ReactElement => {
  const [PriceDropdownOpen, setPriceDropdownOpen] = useState(false);
  const [testDropdownOpen, setTestDropdownOpen] = useState(false);
  const $priceRef = useRef<HTMLDivElement>(null);
  const [SortDropdownOpen, setSortDropdownOpen] = useState(false);
  const $sortRef = useRef<HTMLDivElement>(null);
  useOnOutsideClick($sortRef, () => setSortDropdownOpen(!SortDropdownOpen));
  useOnOutsideClick($priceRef, () => setPriceDropdownOpen(!PriceDropdownOpen));
  return (
    <StyledInput>
      <div
        style={{
          position: "absolute",
          pointerEvents: "none",
          top: "5px",
          left: "9px",
        }}
      >
        <Icon size={24} type='SearchBar' />
      </div>
      <InputElement />
      <Filter>
        <Select
          DropdownOpen={testDropdownOpen}
          setDropdownOpen={setTestDropdownOpen}
          title='Price'
          options={["₱0-200", "₱200-500", "₱500-1000", "₱1000-2000"]}
        />
        <Select
          DropdownOpen={SortDropdownOpen}
          setDropdownOpen={setSortDropdownOpen}
          title='Sort By'
          options={["Relevance", "Sales", "Price", "Rating"]}
        />
      </Filter>
    </StyledInput>
  );
};

const Filter = styled.div`
  top: 2px;
  right: 4px;
  ${font.medium}
  position: absolute;
  padding: 2px;
`;
