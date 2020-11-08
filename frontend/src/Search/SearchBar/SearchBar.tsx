import React, { ReactElement, useRef, useState } from "react";
import { Icon } from "../../components/Icon";
import Select from "../../components/Select";
import useOnOutsideClick from "../../shared/hooks/useOnOutsideClick";
import {
  Filter,
  IconWrapper,
  StyledInput,
  InputElement,
} from "./SearchBar.styles";

const SearchBar = (): ReactElement => {
  const [PriceDropdownOpen, setPriceDropdownOpen] = useState(false);
  const [SortDropdownOpen, setSortDropdownOpen] = useState(false);
  const $priceRef = useRef<HTMLDivElement>(null);
  const $sortRef = useRef<HTMLDivElement>(null);

  return (
    <StyledInput>
      <IconWrapper>
        <Icon size={24} type='SearchBar' />
      </IconWrapper>
      <InputElement />
      <Filter>
        <Select
          DropdownOpen={PriceDropdownOpen}
          setDropdownOpen={setPriceDropdownOpen}
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

export default SearchBar;
