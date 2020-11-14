import React, { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Flex from "../../components/Flex";
import { Icon } from "../../components/Icon";
import { ToolbarButton } from "../../components/Toolbar";
import { Toolbar } from "../../components/Toolbar/Styles";
import { List, ListItem, SearchItem } from "../../interfaces";
import { useUI } from "../../shared/contexts/useUIContext";
import useOnOutsideClick from "../../shared/hooks/useOnOutsideClick";
import { arrayToNItems, sortBy } from "../../shared/utils/utils";
import { MenuTitle } from "../Compare/SelectionPanel/SelectionPanel.styles";
import { Results } from "../Results";
import { Label, MenuWrapper, SearchPanelStyle } from "./SearchPanel.styles";
import { SearchBar } from "../SearchBar";

interface Props {
  selectedItems: SearchItem[];
  searchResult: ListItem<SearchItem>[][];
  lists: List[];
  initialSelectedItems: ListItem<SearchItem>[];
  setInitialSelectedItems: React.Dispatch<
    React.SetStateAction<ListItem<SearchItem>[]>
  >;
}

const SearchPanel = ({
  selectedItems,
  searchResult,
  lists,
  initialSelectedItems,
  setInitialSelectedItems,
}: Props) => {
  const {
    closeOverlay,
    closeSearchPanel,
    closeSelectPanel,
    displaySearchPanel,
    displayMaxSearchPanel,
    toggleMaxSearchPanel,
    maximizeSearchPanel,
    openHelp,
  } = useUI();

  const $searchPanel = useRef<HTMLDivElement>(null);
  useOnOutsideClick($searchPanel, () => {
    if (selectedItems.length >= 1 && displaySearchPanel === true) {
      closeOverlay();
      closeSearchPanel();
      closeSelectPanel();
    }
  });
  const [params, setParams] = useSearchParams();
  const n = 4;
  const sort = (sortmethod: keyof SearchItem) =>
    arrayToNItems(sortBy(searchResult, sortmethod), n).map(
      (row, index) => lists[index + 1].setItems(row) //Plus one because our first element here is the initialselected items list
    );
  return (
    <SearchPanelStyle
      ref={$searchPanel}
      isSearchPanelMaximized={displayMaxSearchPanel}
      isSearchPanelOpen={displaySearchPanel}
    >
      <Toolbar style={{ position: "absolute" }} place='right-top'>
        <ToolbarButton
          onClick={() => {
            toggleMaxSearchPanel();
          }}
          name={displayMaxSearchPanel ? "Minimize" : "Maximize"}
          icon={displayMaxSearchPanel ? "ArrowCircleLeft" : "ArrowCircleRight"}
          tooltipPlace='bottom'
        />
        <ToolbarButton
          tooltipPlace='bottom'
          onClick={() => maximizeSearchPanel()}
          name='Test'
          icon='Grid'
        />
        <ToolbarButton
          onClick={() => closeSearchPanel()}
          icon='Close'
          name='Close'
          tooltipPlace='bottom'
        />
      </Toolbar>
      <MenuTitle style={{ marginRight: "auto", marginTop: "15px" }}>
        Search
      </MenuTitle>
      <SearchBar />
      <MenuWrapper>
        <Label>Search results for "{params.get("keyword")}"</Label>
        <Flex align='center' justify='center'>
          <Toolbar withoutMargin place='default'>
            <ToolbarButton
              onClick={() => sort("name")}
              tooltipPlace='bottom'
              name='Alphabetical'
            >
              A<Icon type='Sort' size={16} />
            </ToolbarButton>
            <ToolbarButton
              onClick={() => sort("price")}
              tooltipPlace='bottom'
              name='Price'
            >
              ₱<Icon type='Sort' size={16} />
            </ToolbarButton>
            <ToolbarButton
              onClick={() => sort("sold")}
              tooltipPlace='bottom'
              name='Sales/mon'
            >
              <Icon type='Fire' size={17} />
              <Icon type='Sort' size={16} />
            </ToolbarButton>
          </Toolbar>
          <Flex margin='0 0 0 4px'>
            <ToolbarButton
              onClick={() => openHelp()}
              tooltipPlace='bottom'
              name='Help'
            >
              <Icon type='Help' size={18} />
            </ToolbarButton>
          </Flex>
        </Flex>
      </MenuWrapper>
      <Flex align='center' justify='flex-start' wrap='wrap' overflow='auto'>
        {searchResult.map((row, index) => {
          return (
            <Results
              lists={lists}
              dropId={`results-${index}`}
              results={row}
              initialSelectedItems={initialSelectedItems}
              setInitialSelectedItems={setInitialSelectedItems}
            />
          );
        })}
      </Flex>
    </SearchPanelStyle>
  );
};

export default SearchPanel;
