import React, { ReactElement, useRef, useState } from "react";
import { Icon } from "../../components/Icon";
import Select from "../../components/Select";
import useOnOutsideClick from "../../shared/hooks/useOnOutsideClick";
import {Filter,IconWrapper, StyledInput, InputElement } from "./Styles";

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
      <IconWrapper>
        <Icon size={24} type='SearchBar' />
      </IconWrapper>
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
