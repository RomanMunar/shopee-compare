import React, { ReactElement, useState } from "react";
import { SearchItem } from "../interfaces";
import { useQueryParams } from "../shared/hooks/useQueryParams";
import Searchbar from "./Searchbar";
import Results from "./Results";
import { Label, SearchPanel } from "./Styles";
import Toolbar from "./Toolbar";
import Compare from "./Compare/index";
import Container from "../components/Container";
import { filterByField } from "../shared/utils/utils";
import { mockData } from "./mochResponses";
import SelectedItemsProvider from "../useSelectedItemsContext";

export default (): ReactElement => {
  let query = useQueryParams().get("keyword");
  const [results] = useState<SearchItem[]>(filterByField(mockData, "itemid"));
  const [isSearchPanelOpen, setIsSearchPanelOpen] = useState(true);

  return (
    <Container>
      <Toolbar
        isSearchPanelOpen={isSearchPanelOpen}
        setIsSearchPanelOpen={setIsSearchPanelOpen}
      />
      <SelectedItemsProvider>
        <SearchPanel isSearchPanelOpen={isSearchPanelOpen}>
          <Searchbar />
          <Label>Search results for "{query}"</Label>
          <Results results={results} />
        </SearchPanel>
        <Compare />
      </SelectedItemsProvider>
    </Container>
  );
};
