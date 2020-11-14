import React, { useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Layout, List, ListItem, SearchItem } from "../../interfaces";
import { useUI } from "../../shared/contexts/useUIContext";
import { makeListItems, move, reorder } from "../../shared/utils/utils";
import { getDialogs, getSettings } from "../../shared/utils/localStorage";
import { CompareContainer, EmptyContainer, Title } from "./Compare.styles";
import { CompareGuide } from "./CompareGuide";
import { AddToBookmarks } from "./AddToBookmarks";
import { CompareSummary } from "./CompareSummary";
import { MainPanel } from "./MainPanel";
import { SelectionPanel } from "./SelectionPanel";
import { useSearchParams } from "react-router-dom";

export default ({
  selectedItems,
  setSelectedItems,
  setInitialSelectedItems,
}: {
  setSelectedItems: React.Dispatch<React.SetStateAction<SearchItem[]>>;
  selectedItems: SearchItem[];
  setInitialSelectedItems: React.Dispatch<
    React.SetStateAction<ListItem<SearchItem>[]>
  >;
}) => {
  const dialogs = getDialogs();
  const [params] = useSearchParams();
  const items = params.get("items");
  if (items) {
    // setSelectedItems();
  }
  const selectedItemsList = makeListItems(selectedItems);
  const [mainItem, setMainItem] = useState(selectedItemsList.slice(0, 2));
  const [sideItems, setSideItems] = useState(selectedItemsList.slice(2));
  const [layout, setLayout] = useState<Layout>(getSettings().preference.layout);
  const lists: List[] = [
    {
      setItems: setMainItem,
      items: mainItem,
      id: "MAIN",
    },
    {
      setItems: setSideItems,
      items: sideItems,
      id: "SELECTION",
    },
  ];

  useEffect(() => {
    switch (layout) {
      case "main":
        setMainItem([selectedItemsList[0]]);
        setSideItems(selectedItemsList.slice(1));
        break;
      case "double":
        setMainItem(selectedItemsList.slice(0, 2));
        setSideItems(selectedItemsList.slice(2));
        break;
      case "none":
        setMainItem(selectedItemsList);
        setSideItems([]);
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layout, selectedItems]);

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
      sourceList.setItems(items);
    } else {
      const { newSourceItems, newDestinationItems } = move(
        sourceList.items,
        desList.items,
        source,
        destination,
        layout,
        mainItem.length
      );

      desList.setItems(newDestinationItems);
      sourceList.setItems(newSourceItems);
    }
  };

  if (selectedItems.length <= 0) {
    return (
      <EmptyContainer>
        <Title>Hey Search</Title> Search Some items then drag them in this area
        so I can render them
      </EmptyContainer>
    );
  }

  const {
    displayAddToBookmarks,
    displayCompareSummary,
    displayCompareGuide,
  } = useUI();

  return (
    <>
      <CompareContainer>
        {dialogs.includes("showCompareGuide") && displayCompareGuide && (
          <CompareGuide />
        )}
        {displayCompareSummary && (
          <CompareSummary selectedItems={selectedItems} />
        )}
        {displayAddToBookmarks && (
          <AddToBookmarks
            setSelectedItems={setSelectedItems}
            selectedItems={selectedItems}
          />
        )}
        <DragDropContext onDragEnd={onDragEnd}>
          <MainPanel
            list={lists[0]}
            setLayout={setLayout}
            layout={layout}
            setSelectedItems={setSelectedItems}
            selectedItems={selectedItems}
            setInitialSelectedItems={setInitialSelectedItems}
          />
          <SelectionPanel
            selectedItems={selectedItems}
            list={lists[1]}
            layout={layout}
            setSelectedItems={setSelectedItems}
            setInitialSelectedItems={setInitialSelectedItems}
          />
        </DragDropContext>
      </CompareContainer>
    </>
  );
};
