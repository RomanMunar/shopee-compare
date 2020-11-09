import React, { ReactElement, useState } from "react";
import { Icon } from "../../components/Icon";
import Select from "../../components/Select";
import {
  Filter,
  IconWrapper,
  InputElement,
  StyledInput,
} from "./SearchBar.styles";

const SearchBar = (): ReactElement => {
  const [PriceDropdownOpen, setPriceDropdownOpen] = useState(false);
  const [SortDropdownOpen, setSortDropdownOpen] = useState(false);

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
