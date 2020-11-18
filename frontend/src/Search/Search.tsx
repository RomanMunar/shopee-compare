import React, { ReactElement, useEffect, useRef, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useSearchParams } from "react-router-dom";
import Container from "../components/Container";
import { List, ListItem, SearchItem } from "../interfaces";
import SelectedItemsProvider from "../shared/contexts/useSelectedItemsContext";
import { useUI } from "../shared/contexts/useUIContext";
import useOnOutsideClick from "../shared/hooks/useOnOutsideClick";
import {
  arrayToNItems,
  filterByUniqueField,
  makeListItems,
  reorder,
  resultsMove,
} from "../shared/utils/utils";
import { Compare } from "./Compare";
import { Overlay } from "./Compare/CompareSummary/CompareSummary.styles";
import Help from "./Help";
import { SearchPanel } from "./SearchPanel";
import { SelectPanel } from "./SelectPanel";

export default (): ReactElement => {
  const {
    displayAddToBookmarks,
    displayOverlay,
    displaySearchPanel,
    closeSearchPanel,
    closeOverlay,
    openSelectPanel,
    closeSelectPanel,
    displayCompareSummary,
    displayMaxSearchPanel,
    displayHelp,
    openSearchPanel,
    closeHelp,
  } = useUI();
  const [selectedItems, setSelectedItems] = useState<SearchItem[]>([]);
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const [initialSelectedItems, setInitialSelectedItems] = useState<
    ListItem<SearchItem>[]
  >([]);
  const n = 4; // items per row, change for maximized panel
  const [params] = useSearchParams();

  useEffect(() => {
    const keyword = params.get("keyword");
    if (params.toString().search("keyword") === -1 || !keyword) return;
    const fetchResults = async () => {
      const response = await fetch(`/api/search?${params.toString()}`);
      const data: { newItems: SearchItem[] } = await response.json();
      setSearchResults(data.newItems);
    };
    fetchResults();
  }, [params]);
  // Mock data, will remove non-alphabet characts
  // FilterUniqueField, Removes duplicate items, for ads specifically
  // MakeListItems adds itemid for dragging and indexing in lists
  const searchResult = arrayToNItems(
    makeListItems(filterByUniqueField(searchResults, "itemid")),
    n
  );

  const lists: List[] = [
    {
      setItems: setInitialSelectedItems,
      items: initialSelectedItems,
      id: "initialSelectedItems",
    },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const items = params.get("items");
    if (items) {
      closeHelp();
      closeSearchPanel();
      closeSelectPanel();
      closeOverlay();
      return;
    }
    openSearchPanel();
  }, []);

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

  return (
    <>
      {displayHelp && <Help />}
      {displayOverlay && (
        <Overlay
          z={
            displayCompareSummary
              ? 400
              : displayHelp || displayAddToBookmarks
              ? 400
              : 200
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
              searchResult={searchResult}
              lists={lists}
              initialSelectedItems={initialSelectedItems}
              setInitialSelectedItems={setInitialSelectedItems}
              selectedItems={selectedItems}
            />
            {!displayMaxSearchPanel && (
              <SelectPanel
                initialSelectedItems={initialSelectedItems}
                setSelectedItems={setSelectedItems}
                setInitialSelectedItems={setInitialSelectedItems}
              />
            )}
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
