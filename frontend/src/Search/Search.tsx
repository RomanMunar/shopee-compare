import React, { ReactElement, useMemo, useRef, useState } from "react";
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
import useOnOutsideClick from "../shared/hooks/useOnOutsideClick";
import { useQueryParams } from "../shared/hooks/useQueryParams";
import {
  filterByUniqueField,
  makeListItems,
  orderBy,
  reorder,
  resultsMove,
} from "../shared/utils/utils";
import { Compare } from "./Compare";
import { CompareSummary } from "./Compare/CompareSummary";
import { Overlay } from "./Compare/CompareSummary/CompareSummary.styles";
import { MenuTitle } from "./Compare/SelectionPanel/SelectionPanel.styles";
import { Results } from "./Results";
import { Label, MenuWrapper, SearchPanel } from "./Search.styles";
import { SearchBar } from "./SearchBar";
import { SelectPanel } from "./SelectPanel";

export default (): ReactElement => {
  let query = useQueryParams().get("keyword");
  const {
    displayOverlay,
    displaySearchPanel,
    openSearchPanel,
    closeSearchPanel,
    closeOverlay,
    openSelectPanel,
    closeSelectPanel,
    displayCompareSummary,
    maximizeSearchPanel,
    toggleMaxSearchPanel,
    displayMaxSearchPanel,
  } = useUI();
  const [selectedItems, setSelectedItems] = useState<SearchItem[]>([]);
  const [initialSelectedItems, setInitialSelectedItems] = useState<
    ListItem<SearchItem>[]
  >([]);
  const mainResults = filterByUniqueField(
    mockData
      .map((i) => {
        return { ...i, name: i.name.replace(/[^a-zA-Z0-9 ]/g, "") };
      })
      .slice(0, 12),
    "itemid"
  );
  const mainResultsList = makeListItems(mainResults);
  const [results, setResults] = useState(mainResultsList);

  const onSelectItemsSubmit = () => {
    setSelectedItems(initialSelectedItems.map((isi) => isi.item));
    closeSearchPanel();
    closeOverlay();
    closeSelectPanel();
  };

  const lists: List[] = [
    {
      setItems: setInitialSelectedItems,
      items: initialSelectedItems,
      id: "initialSelectedItems",
    },
  ];

  // useEffect(() => openSearchPanel(), []);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    console.log(result);

    const desList = lists.find((dList) => dList.id === destination.droppableId);
    if (!desList) return;
    const sourceList = lists.find((sList) => sList.id === source.droppableId);
    console.log(sourceList);
    if (!sourceList) return;

    if (source.droppableId === destination.droppableId) {
      const items = reorder(sourceList.items, source.index, destination.index);
      sourceList.setItems(items);
    } else {
      console.log("else");
      console.log({
        slist: sourceList.items,
        dlist: desList.items,
        source,
        destination,
      });
      const { newDestinationItems } = resultsMove(
        sourceList.items,
        desList.items,
        source,
        destination
      );
      console.log("newDestinationItems");
      console.log(newDestinationItems);

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

  const sortBy = <T extends keyof SearchItem>(sortmethod: T) => {
    setResults(
      makeListItems(
        orderBy(
          results.map((i) => i.item),
          [sortmethod],
          "asc"
        )
      )
    );
  };

  const n = 4; //tweak this to add more items per line
  const newResults = useMemo(() => {
    console.log(
      new Array(Math.ceil(mainResultsList.length / n))
        .fill(0)
        .map((_, index) => mainResultsList.slice(4 * index, n + n * index))
    );
    return new Array(Math.ceil(mainResultsList.length / n))
      .fill(0)
      .map((_, index) => mainResultsList.slice(4 * index, n + n * index));
  }, []);

  return (
    <>
      {displayCompareSummary && <CompareSummary />}
      {displayOverlay && <Overlay />}
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
              <Toolbar place='right-top'>
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
              <MenuTitle style={{ marginRight: "auto" }}>
                <span>Search</span>
                <Icon type='Question' size={24} />
              </MenuTitle>
              <SearchBar />
              <MenuWrapper>
                <Label>Search results for "{query}"</Label>
                <Toolbar withoutMargin place='default'>
                  <ToolbarButton
                    onClick={() => sortBy("name")}
                    tooltipPlace='bottom'
                    name='Alphabetical'
                  >
                    A<Icon type='Sort' size={16} />
                  </ToolbarButton>
                  <ToolbarButton
                    onClick={() => sortBy("price")}
                    tooltipPlace='bottom'
                    name='Price'
                  >
                    ₱<Icon type='Sort' size={16} />
                  </ToolbarButton>
                  <ToolbarButton
                    onClick={() => sortBy("sold")}
                    tooltipPlace='bottom'
                    name='Sales/mon'
                  >
                    <Icon type='Fire' size={17} />
                    <Icon type='Sort' size={16} />
                  </ToolbarButton>
                </Toolbar>
              </MenuWrapper>
              <Flex
                align='center'
                justify='flex-start'
                wrap='wrap'
                overflow='auto'
              >
                {newResults.map((row, index) => {
                  const dropId = `result-${index}`;
                  const [items, setItems] = useState(row);
                  lists.push({ id: dropId, items, setItems });

                  return (
                    <Results
                      dropId={dropId}
                      results={items}
                      initialSelectedItems={initialSelectedItems}
                    />
                  );
                })}
              </Flex>
              {!displayMaxSearchPanel && (
                <SelectPanel
                  initialSelectedItems={initialSelectedItems}
                  setInitialSelectedItems={setInitialSelectedItems}
                  onSelectItemsSubmit={onSelectItemsSubmit}
                />
              )}
            </SearchPanel>
          </DragDropContext>
          <Compare
            initialSelectedItems={initialSelectedItems}
            setInitialSelectedItems={setInitialSelectedItems}
            selectedItems={mainResults}
            setSelectedItems={setSelectedItems}
          />
        </SelectedItemsProvider>
      </Container>
    </>
  );
};
