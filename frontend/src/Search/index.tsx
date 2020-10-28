import React, { Fragment, ReactElement, useState } from "react";
import ReactTooltip from "react-tooltip";
import { Toolbar, ToolbarButton } from "./Toolbar/Styles";
import { SearchItem } from "../interfaces";
import { useQueryParams } from "../shared/hooks/useQueryParams";
import Searchbar from "./Searchbar";
import Results from "./Results";
import { Label, SearchPanel } from "./Styles";
import Compare from "./Compare/index";
import Container from "../components/Container";
import { filterByField } from "../shared/utils/utils";
import { mockData } from "./mochResponses";
import SelectedItemsProvider from "../useSelectedItemsContext";
import { Icon } from "../components/Icon";

export default (): ReactElement => {
  let query = useQueryParams().get("keyword");
  const [results] = useState<SearchItem[]>(filterByField(mockData, "itemid"));
  const [isSearchPanelOpen, setIsSearchPanelOpen] = useState(true);
  const [isSearchPanelMaximized, setIsSearchPanelMaximized] = useState(true);
  const [isSelectPanelOpen, setIsSelectPanelOpen] = useState(true);

  return (
    <Container>
      <SelectedItemsProvider>
        <SearchPanel
          isSearchPanelMaximized={isSearchPanelMaximized}
          isSearchPanelOpen={isSearchPanelOpen}
        >
          <Toolbar isSearchPanelOpen={isSearchPanelOpen} place='right-top'>
            {isSearchPanelMaximized ? (
              <Fragment>
                <ToolbarButton
                  onClick={() => setIsSearchPanelMaximized(false)}
                  data-tip='Minimize'
                  data-for='Minimize'
                >
                  <Icon type='ArrowCircleLeft' size={16} />
                </ToolbarButton>
                <ReactTooltip
                  place='bottom'
                  type='dark'
                  effect='float'
                  id='Minimize'
                />
              </Fragment>
            ) : (
              <Fragment>
                <ToolbarButton
                  onClick={() => setIsSearchPanelMaximized(true)}
                  data-tip='Maximize'
                  data-for='Maximize'
                >
                  <Icon type='ArrowCircleRight' size={16} />
                </ToolbarButton>
                <ReactTooltip
                  place='bottom'
                  type='dark'
                  effect='float'
                  id='Maximize'
                />
              </Fragment>
            )}
            <ToolbarButton
              onClick={() => setIsSearchPanelMaximized(true)}
              data-tip='Maximize'
              data-for='Maximize'
            >
              <Icon type='Grid' size={16} />
            </ToolbarButton>
            <ReactTooltip
              place='bottom'
              type='dark'
              effect='float'
              id='Maximize'
            />
            <ToolbarButton
              onClick={() => setIsSearchPanelOpen(false)}
              data-tip='Close'
              data-for='Close'
            >
              <Icon type='Close' size={16} />
            </ToolbarButton>
            <ReactTooltip
              place='bottom'
              type='dark'
              effect='float'
              id='Close'
            />
          </Toolbar>
          <Searchbar />
          <div
            style={{
              width: "86%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
  marginBottom: "0.5rem"
            }}
          >
            <Label>Search results for "{query}"</Label>
            <Toolbar withoutMargin place='default'>
              <ToolbarButton data-tip='tooltip'>
                <Icon type='Grid' size={16} />
                <Icon type='Sort' size={16} />
              </ToolbarButton>
              <ReactTooltip place='top' type='dark' effect='float' />
              <ToolbarButton>
                A<Icon type='Sort' size={16} />
              </ToolbarButton>
              <ToolbarButton>
                ₱<Icon type='Sort' size={16} />
              </ToolbarButton>
              <ToolbarButton>
                <Icon type='Star' size={17} />
                <Icon type='Sort' size={16} />
              </ToolbarButton>
            </Toolbar>
          </div>
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
