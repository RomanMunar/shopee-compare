import React, { ReactElement, useState } from "react";
import Container from "../components/Container";
import { Icon } from "../components/Icon";
import { Toolbar } from "../components/Toolbar/Styles";
import { SearchItem } from "../interfaces";
import { useQueryParams } from "../shared/hooks/useQueryParams";
import { filterByField } from "../shared/utils/utils";
import SelectedItemsProvider from "../useSelectedItemsContext";
import { mockData } from "./mochResponses";
import Compare from "./Compare";
import Results from "./Results";
import Searchbar from "./Searchbar";
import { Label, MenuWrapper, SearchPanel } from "./Styles";
import { ToolbarButton } from "../components/Toolbar";

export default (): ReactElement => {
  let query = useQueryParams().get("keyword");
  const [results] = useState<SearchItem[]>(filterByField(mockData, "itemid"));
  const [isSearchPanelOpen, setIsSearchPanelOpen] = useState(false);
  const [isSearchPanelMaximized, setIsSearchPanelMaximized] = useState(true);
  const [isSelectPanelOpen, setIsSelectPanelOpen] = useState(true);

  return (
    <Container>
      <SelectedItemsProvider>
        <SearchPanel
          isSearchPanelMaximized={isSearchPanelMaximized}
          isSearchPanelOpen={isSearchPanelOpen}
        >
          <Toolbar place='right-top'>
            <ToolbarButton
              onClick={() => setIsSearchPanelMaximized(!isSearchPanelMaximized)}
              name={isSearchPanelMaximized ? "Minimize" : "Maximize"}
              icon={
                isSearchPanelMaximized ? "ArrowCircleLeft" : "ArrowCircleRight"
              }
              tooltipPlace='bottom'
            />
            <ToolbarButton
              tooltipPlace='bottom'
              onClick={() => setIsSearchPanelMaximized(true)}
              name='Test'
              icon='Grid'
            />
            <ToolbarButton
              onClick={() => setIsSearchPanelOpen(false)}
              icon='Close'
              name='Close'
              tooltipPlace='bottom'
            />
          </Toolbar>
          <Searchbar />
          <MenuWrapper>
            <Label>Search results for "{query}"</Label>
            <Toolbar withoutMargin place='default'>
              <ToolbarButton name='Layou'>
                <Icon type='Grid' size={16} />
                <Icon type='Sort' size={16} />
              </ToolbarButton>
              <ToolbarButton name='AlphabetSort'>
                A<Icon type='Sort' size={16} />
              </ToolbarButton>
              <ToolbarButton name='PriceSort'>
                ₱<Icon type='Sort' size={16} />
              </ToolbarButton>
              <ToolbarButton name='StarSort'>
                <Icon type='Star' size={17} />
                <Icon type='Sort' size={16} />
              </ToolbarButton>
            </Toolbar>
          </MenuWrapper>
          <Results
            results={results}
            isSelectPanelOpen={isSelectPanelOpen}
            setIsSelectPanelOpen={setIsSelectPanelOpen}
            isSearchPanelOpen={isSearchPanelOpen}
            setIsSearchPanelOpen={setIsSearchPanelOpen}
            isSearchPanelMaximized={isSearchPanelMaximized}
            setIsSearchPanelMaximized={setIsSearchPanelMaximized}
          />
        </SearchPanel>
        <Compare />
      </SelectedItemsProvider>
    </Container>
  );
};
