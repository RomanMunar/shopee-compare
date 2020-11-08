import React, { ReactElement, useRef, useState } from "react";
import {
  DragDropContext,
  DraggableLocation,
  DropResult,
} from "react-beautiful-dnd";
import Container from "../components/Container";
import { Icon } from "../components/Icon";
import { ToolbarButton } from "../components/Toolbar";
import { Toolbar } from "../components/Toolbar/Styles";
import { List, ListItem, SearchItem } from "../interfaces";
import useOnOutsideClick from "../shared/hooks/useOnOutsideClick";
import { useQueryParams } from "../shared/hooks/useQueryParams";
import SelectedItemsProvider from "../shared/hooks/useSelectedItemsContext";
import { filterByField, reorder } from "../shared/utils/utils";
import Compare from "./Compare";
import { CompareSummary } from "./Compare/CompareSummary/";
import { MenuTitle } from "./Compare/Compare.styles";
import { mockData } from "./mochResponses";
import { Results } from "./Results";
import { SelectPanel } from "./SelectPanel";
import { SearchBar } from "./SearchBar";
import { Label, MenuWrapper, SearchPanel } from "./Styles";

export default (): ReactElement => {
  let query = useQueryParams().get("keyword");
  const [selectedItems, setSelectedItems] = useState<SearchItem[]>([]);
  const [isSearchPanelOpen, setIsSearchPanelOpen] = useState(true);
  const [isSearchPanelMaximized, setIsSearchPanelMaximized] = useState(false);
  const [isSelectPanelOpen, setIsSelectPanelOpen] = useState(true);
  const [showCompareSummary, setShowCompareSummary] = useState(false);
  const [isOverlayHidden, setIsOverlayHidden] = useState(true);
  const [initialSelectedItems, setInitialSelectedItems] = useState<
    ListItem<SearchItem>[]
  >([]);
  const mainResults = filterByField(mockData, "itemid");
  const mainResultsList = mainResults.map((item, itemid) => {
    return {
      itemid,
      item,
    };
  });
  const [results, setResults] = useState<ListItem<SearchItem>[]>(
    mainResultsList
  );

  const onSelectItemsSubmit = () => {
    setSelectedItems(initialSelectedItems.map((isi) => isi.item));
    setIsSearchPanelOpen(false);
    setIsOverlayHidden(true);
    setIsSelectPanelOpen(false);
  };

  const move = (
    source: ListItem<SearchItem>[],
    destination: ListItem<SearchItem>[],
    droppableSource: DraggableLocation,
    droppableDestination: DraggableLocation
  ) => {
    let sourceClone = Array.from(source);
    let destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    destClone.splice(droppableDestination.index, 0, removed);
    /* 
      uncomment nextline if we want to be able to drag 
      initialselecteditems back to resultsitems  */
    // const newSourceItems = sourceClone;
    // return { newSourceItems, newDestinationItems };
    const newDestinationItems = destClone;

    return { newDestinationItems };
  };
  const onBeforeCapture = () => setIsSelectPanelOpen(true);

  const lists: List[] = [
    {
      set: setResults,
      items: results,
      id: "results",
    },
    {
      set: setInitialSelectedItems,
      items: initialSelectedItems,
      id: "initialSelectedItems",
    },
  ];

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    // dropped outside the list
    if (!destination) {
      return;
    }

    const desList = lists.find((dList) => dList.id === destination.droppableId);
    if (!desList) return;
    const sourceList = lists.find((sList) => sList.id === source.droppableId);
    if (!sourceList) return;

    if (source.droppableId === destination.droppableId) {
      const items = reorder(sourceList.items, source.index, destination.index);

      sourceList.set(items);
    } else {
      const { newDestinationItems } = move(
        sourceList.items,
        desList.items,
        source,
        destination
      );

      desList.set(newDestinationItems);
      // sourceList.set(newSourceItems);
    }
  };

  const $searchPanel = useRef<HTMLDivElement>(null);
  const $selectPanel = useRef<any>(null);
  useOnOutsideClick($searchPanel, () => {
    if (
      selectedItems.length >= 1 &&
      isSelectPanelOpen === true &&
      isSearchPanelOpen === true
    ) {
      setIsOverlayHidden(true);
      setIsSearchPanelOpen(false);
      setIsSelectPanelOpen(false);
    }
  }); // useOnOutsideClick($selectPanel, () => setIsOverlayHidden(true));

  return (
    <>
      {showCompareSummary && (
        <CompareSummary setShowCompareSummary={setShowCompareSummary} />
      )}
      {!isOverlayHidden && (
        <div
          style={{
            zIndex: 2,
            position: "absolute",
            background: "rgba(0,0,0, 0.3)",
            width: "100%",
            height: "100%",
          }}
        />
      )}
      <Container>
        <SelectedItemsProvider>
          <DragDropContext
            onDragEnd={onDragEnd}
            onBeforeCapture={onBeforeCapture}
          >
            <SearchPanel
              ref={$searchPanel}
              isSearchPanelMaximized={isSearchPanelMaximized}
              isSearchPanelOpen={isSearchPanelOpen}
            >
              <Toolbar place='right-top'>
                <ToolbarButton
                  onClick={() =>
                    setIsSearchPanelMaximized(!isSearchPanelMaximized)
                  }
                  name={isSearchPanelMaximized ? "Minimize" : "Maximize"}
                  icon={
                    isSearchPanelMaximized
                      ? "ArrowCircleLeft"
                      : "ArrowCircleRight"
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
              <MenuTitle style={{ marginRight: "auto" }}>Search</MenuTitle>
              <SearchBar />
              <MenuWrapper>
                <Label>Search results for "{query}"</Label>
                <Toolbar withoutMargin place='default'>
                  <ToolbarButton tooltipPlace='bottom' name='Layout'>
                    <Icon type='Grid' size={16} />
                    <Icon type='Sort' size={16} />
                  </ToolbarButton>
                  <ToolbarButton tooltipPlace='bottom' name='AlphabetSort'>
                    A<Icon type='Sort' size={16} />
                  </ToolbarButton>
                  <ToolbarButton tooltipPlace='bottom' name='PriceSort'>
                    ₱<Icon type='Sort' size={16} />
                  </ToolbarButton>
                  <ToolbarButton tooltipPlace='bottom' name='StarSort'>
                    <Icon type='Star' size={17} />
                    <Icon type='Sort' size={16} />
                  </ToolbarButton>
                </Toolbar>
              </MenuWrapper>
              <Results
                results={results}
                initialSelectedItems={initialSelectedItems}
              />
              {!isSearchPanelMaximized && (
                <div ref={$selectPanel}>
                  <SelectPanel
                    initialSelectedItems={initialSelectedItems}
                    setInitialSelectedItems={setInitialSelectedItems}
                    isSelectPanelOpen={isSelectPanelOpen}
                    setIsSelectPanelOpen={setIsSelectPanelOpen}
                    setIsSearchPanelMaximized={setIsSearchPanelMaximized}
                    setIsSearchPanelOpen={setIsSearchPanelOpen}
                    onSelectItemsSubmit={onSelectItemsSubmit}
                  />
                </div>
              )}
            </SearchPanel>
          </DragDropContext>
          <Compare
            initialSelectedItems={initialSelectedItems}
            setInitialSelectedItems={setInitialSelectedItems}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            setShowCompareSummary={setShowCompareSummary}
            setIsSearchPanelOpen={setIsSearchPanelOpen}
            setIsSelectPanelOpen={setIsSelectPanelOpen}
            setIsOverlayHidden={setIsOverlayHidden}
          />
        </SelectedItemsProvider>
      </Container>
    </>
  );
};
