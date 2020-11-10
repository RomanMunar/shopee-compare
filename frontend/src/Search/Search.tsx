import React, {
  ReactElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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
    displayHelp,
    openHelp,
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
  const [mainResultsList, setMainResultsList] = useState(
    makeListItems(mainResults)
  );

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

  const sortBy = <T extends keyof SearchItem>(sortmethod: T) => {
    setMainResultsList(
      makeListItems(
        orderBy(
          mainResultsList.map((i) => i.item),
          [sortmethod],
          "asc"
        )
      )
    );
  };

  const n = 4; //tweak this to add more items per line
  // We're not using the real results here because results shouldn't change.
  const newResults = useMemo(
    () =>
      new Array(Math.ceil(mainResultsList.length / n))
        .fill(0)
        .map((_, index) => mainResultsList.slice(4 * index, n + n * index)),
    [mainResultsList]
  );

  const onHelpClick = () => {
    openHelp();
  };

  return (
    <>
      {displayHelp && <Help />}
      {displayOverlay && (
        <Overlay z={displayCompareSummary ? 300 : displayHelp ? 400 : 300} />
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
                <span>Search</span>
              </MenuTitle>
              <SearchBar />
              <MenuWrapper>
                <Label>Search results for "{query}"</Label>
                <Flex align='center' justify='center'>
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
                  <Flex margin='0 0 0 4px'>
                    <ToolbarButton
                      onClick={onHelpClick}
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
            setInitialSelectedItems={setInitialSelectedItems}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        </SelectedItemsProvider>
      </Container>
    </>
  );
};
