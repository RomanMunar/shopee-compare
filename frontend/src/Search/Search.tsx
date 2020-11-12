import React, { ReactElement, useEffect, useRef, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { mockData } from "../App/apireponses/mochResponses";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { Icon } from "../components/Icon";
import { ToolbarButton } from "../components/Toolbar";
import { Toolbar } from "../components/Toolbar/Styles";
import { List, ListItem, SearchItem } from "../interfaces";
import SelectedItemsProvider from "../shared/contexts/useSelectedItemsContext";
import { useUI } from "../shared/contexts/useUIContext";
import toast from "../shared/hooks/toast";
import useOnOutsideClick from "../shared/hooks/useOnOutsideClick";
import { useQueryParams } from "../shared/hooks/useQueryParams";
import {
  arrayToNItems,
  filterByUniqueField,
  makeListItems,
  reorder,
  resultsMove,
  sortBy,
} from "../shared/utils/utils";
import { Compare } from "./Compare";
import { Overlay } from "./Compare/CompareSummary/CompareSummary.styles";
import { MenuTitle } from "./Compare/SelectionPanel/SelectionPanel.styles";
import Help from "./Help";
import { Results } from "./Results";
import { Label, MenuWrapper, SearchPanel } from "./Search.styles";
import { SearchBar } from "./SearchBar";
import { SelectPanel } from "./SelectPanel";

export default (): ReactElement => {
  let query = useQueryParams().get("keyword");
  const {
    displayAddToBookmarks,
    displayOverlay,
    displaySearchPanel,
    closeSearchPanel,
    closeOverlay,
    openSelectPanel,
    closeSelectPanel,
    displayCompareSummary,
    maximizeSearchPanel,
    toggleMaxSearchPanel,
    displayMaxSearchPanel,
    displayHelp,
    openHelp,
    openSearchPanel,
  } = useUI();
  const [selectedItems, setSelectedItems] = useState<SearchItem[]>([]);
  const [initialSelectedItems, setInitialSelectedItems] = useState<
    ListItem<SearchItem>[]
  >([]);
  const n = 4; // items per row, change for maximized panel
  // Mock data, will remove non-alphabet characts
  // FilterUniqueField, Removes duplicate items, for ads specifically
  // MakeListItems adds itemid for dragging and indexing in lists
  const searchResult = arrayToNItems(
    makeListItems(
      filterByUniqueField(
        mockData
          .map((i) => {
            return { ...i, name: i.name.replace(/[^a-zA-Z0-9 ]/g, "") };
          })
          .slice(0, 12),
        "itemid"
      )
    ),
    n
  );

  const lists: List[] = [
    {
      setItems: setInitialSelectedItems,
      items: initialSelectedItems,
      id: "initialSelectedItems",
    },
  ];

  useEffect(() => openSearchPanel(), []);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const desList = lists.find((dList) => dList.id === destination.droppableId);
    if (!desList) return;
    const sourceList = lists.find((sList) => sList.id === source.droppableId);
    if (!sourceList) return;

    if (source.droppableId === destination.droppableId) {
      const items = reorder(sourceList.items, source.index, destination.index);
      sourceList.setItems(items);
    } else {
      const { newDestinationItems } = resultsMove(
        sourceList.items,
        desList.items,
        source,
        destination
      );

      desList.setItems(newDestinationItems);
    }
  };

  const $searchPanel = useRef<HTMLDivElement>(null);
  useOnOutsideClick($searchPanel, () => {
    if (selectedItems.length >= 1 && displaySearchPanel === true) {
      closeOverlay();
      closeSearchPanel();
      closeSelectPanel();
    }
  });

  const sort = (sortmethod: keyof SearchItem) =>
    arrayToNItems(sortBy(searchResult, sortmethod), n).map(
      (row, index) => lists[index + 1].setItems(row) //Plus one because our first element here is the initialselected items list
    );

  return (
    <>
      {displayHelp && <Help />}
      {displayOverlay && (
        <Overlay
          z={
            displayCompareSummary
              ? 300
              : displayHelp || displayAddToBookmarks
              ? 400
              : 300
          }
        />
      )}
      <Container>
        <SelectedItemsProvider>
          <DragDropContext
            onDragEnd={onDragEnd}
            onBeforeCapture={() => openSelectPanel()}
          >
            <SearchPanel
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
                  icon={
                    displayMaxSearchPanel
                      ? "ArrowCircleLeft"
                      : "ArrowCircleRight"
                  }
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
                <Label>Search results for "{query}"</Label>
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
              <Flex
                align='center'
                justify='flex-start'
                wrap='wrap'
                overflow='auto'
              >
                {searchResult.map((row, index) => {
                  const dropId = `result-${index}`;
                  const [items, setItems] = useState(row);
                  lists.push({ id: dropId, items, setItems });

                  return (
                    <Results
                      dropId={dropId}
                      results={items}
                      initialSelectedItems={initialSelectedItems}
                      setInitialSelectedItems={setInitialSelectedItems}
                    />
                  );
                })}
              </Flex>
              {!displayMaxSearchPanel && (
                <SelectPanel
                  initialSelectedItems={initialSelectedItems}
                  setSelectedItems={setSelectedItems}
                  setInitialSelectedItems={setInitialSelectedItems}
                />
              )}
            </SearchPanel>
          </DragDropContext>
          <Compare
            setInitialSelectedItems={setInitialSelectedItems}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        </SelectedItemsProvider>
      </Container>
    </>
  );
};
