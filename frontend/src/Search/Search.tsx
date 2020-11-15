import React, { ReactElement, useEffect, useRef, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { mockData } from "../App/apireponses/mochResponses";
import Container from "../components/Container";
import { List, ListItem, SearchItem } from "../interfaces";
import SelectedItemsProvider from "../shared/contexts/useSelectedItemsContext";
import { useUI } from "../shared/contexts/useUIContext";
import useOnOutsideClick from "../shared/hooks/useOnOutsideClick";
import { getDialogs } from "../shared/utils/localStorage";
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
import Help from "./Help";
import { SearchPanel } from "./SearchPanel";
import { SelectPanel } from "./SelectPanel";

export default (): ReactElement => {
  const dialogs = getDialogs();
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {dialogs.includes("showHelpGuide") && displayHelp && <Help />}
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
