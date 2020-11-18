import React, { ReactElement, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Icon } from "../../components/Icon";
import { Select } from "../../components/Select";
import { useKeyPress } from "../../shared/hooks/useKeyPressed";
import useTimeoutFn from "../../shared/hooks/useTimeout";
import { getSettings } from "../../shared/utils/localStorage";
import {
  Filter,
  IconWrapper,
  InputElement,
  StyledInput,
} from "./SearchBar.styles";

interface Props {
  setNewest: React.Dispatch<React.SetStateAction<number>>;
  newest: number;
}

const SearchBar = ({ newest, setNewest }: Props): ReactElement => {
  const { preference } = getSettings();
  const [params, setParams] = useSearchParams();
  const search = () => setParams({ ...params, ...paramsSession });
  const [, cancel, reset] = useTimeoutFn(search, 1000);
  // This is page btw
  const [order] = useState<"desc" | "asc">("desc");
  const [keywordInput, setKeywordInput] = useState("");
  const [sortOption, setSortOption] = useState(preference.searchSort);
  const [priceRangeOption, setPriceRangeOption] = useState("");
  const [pastKeywordInput, setPastKeywordInput] = useState("");
  const [paramsSession, setParamsSession] = useState({});
  const [price_min, price_max] = priceRangeOption
    .split("-")
    .map((i) => parseInt(i));
  useEffect(() => {
    const newParams: any = {};
    if (sortOption) newParams.by = sortOption;
    if (price_min) newParams.price_min = price_min;
    if (price_max) newParams.price_max = price_max;
    if (newest) newParams.newest = newest;
    if (order) newParams.order = order;
    setParamsSession({
      locations: preference.sellerLocation.toString(),
      keyword: keywordInput.trim(),
      ...newParams,
    });
  }, [newest, order, keywordInput, sortOption, priceRangeOption]);
  const escKeyPressed = useKeyPress("Escape");

  useEffect(() => {
    if (
      escKeyPressed ||
      !keywordInput ||
      keywordInput === "" ||
      pastKeywordInput === keywordInput
    )
      return cancel();
    setPastKeywordInput(keywordInput);
    reset();
  }, [keywordInput, escKeyPressed]);

  return (
    <StyledInput>
      <IconWrapper>
        <Icon size={24} type='SearchBar' />
      </IconWrapper>
      <InputElement onChange={(e) => setKeywordInput(e.target.value)} />
      <Filter>
        <Select
          selectedOption={priceRangeOption}
          setSelectedOption={setPriceRangeOption}
          title='Price'
          lead='₱'
          options={["0-200", "200-500", "500-1000", "1000-2000"]}
        />
        <Select
          selectedOption={sortOption}
          setSelectedOption={setSortOption}
          title='Sort By'
          lead='By '
          options={["relevance", "sales", "price", "latest"]}
        />
      </Filter>
    </StyledInput>
  );
};

export default SearchBar;
