import React, { ReactElement, useEffect, useState } from "react";
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
import ListsProvider from "../shared/hooks/useListContext";
import { useQueryParams } from "../shared/hooks/useQueryParams";
import SelectedItemsProvider from "../shared/hooks/useSelectedItemsContext";
import { filterByField, reorder } from "../shared/utils/utils";
import Compare from "./Compare";
import ShowSummary from "./Compare/ShowSummary";
import { MenuTitle } from "./Compare/Styles";
import { mockData } from "./mochResponses";
import Results from "./Results";
import SelectPanel from "./Results/SelectPanel";
import Searchbar from "./Searchbar";
import { Label, MenuWrapper, SearchPanel } from "./Styles";

export default (): ReactElement => {
  let query = useQueryParams().get("keyword");
  const [selectedItems, setSelectedItems] = useState<SearchItem[]>([]);
  const [isSearchPanelOpen, setIsSearchPanelOpen] = useState(true);
  const [isSearchPanelMaximized, setIsSearchPanelMaximized] = useState(false);
  const [isSelectPanelOpen, setIsSelectPanelOpen] = useState(true);
  const [showSummary, setShowSummary] = useState(false);
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
  const [initialSelectedItems, setInitialSelectedItems] = useState<
    ListItem<SearchItem>[]
  >([]);

  const onSelectItemsSubmit = () => {
    setSelectedItems(initialSelectedItems.map((isi) => isi.item));
    setIsSearchPanelOpen(false);
  };

  useEffect(() => console.log(selectedItems), [selectedItems]);

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
    const newSourceItems = sourceClone;
    const newDestinationItems = destClone;

    return { newSourceItems, newDestinationItems };
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
      const { newSourceItems, newDestinationItems } = move(
        sourceList.items,
        desList.items,
        source,
        destination
      );

      desList.set(newDestinationItems);
      // sourceList.set(newSourceItems);
    }
  };

  return (
    <>
      {showSummary && <ShowSummary setShowSummary={setShowSummary} />}
      <Container>
        <SelectedItemsProvider>
          <DragDropContext
            onDragEnd={onDragEnd}
            onBeforeCapture={onBeforeCapture}
          >
            <SearchPanel
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
              <Searchbar />
              <MenuWrapper>
                <Label>Search results for "{query}"</Label>
                <Toolbar withoutMargin place='default'>
                  <ToolbarButton name='Layout'>
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
                initialSelectedItems={initialSelectedItems}
              />
            </SearchPanel>
            {!isSearchPanelMaximized && (
              <SelectPanel
                initialSelectedItems={initialSelectedItems}
                setInitialSelectedItems={setInitialSelectedItems}
                isSelectPanelOpen={isSelectPanelOpen}
                setIsSelectPanelOpen={setIsSelectPanelOpen}
                setIsSearchPanelMaximized={setIsSearchPanelMaximized}
                setIsSearchPanelOpen={setIsSearchPanelOpen}
                onSelectItemsSubmit={onSelectItemsSubmit}
              />
            )}
          </DragDropContext>
          <Compare
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            setShowSummary={setShowSummary}
            setIsSearchPanelOpen={setIsSearchPanelOpen}
          />
        </SelectedItemsProvider>
      </Container>
    </>
  );
};
