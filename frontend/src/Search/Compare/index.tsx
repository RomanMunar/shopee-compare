import React, { useContext, useEffect, useState } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { Layout, List, ListItem, SearchItem } from "../../interfaces";
import { SelectedItemsContext } from "../../shared/hooks/useSelectedItemsContext";
import { move, reorder } from "../../shared/utils/utils";
import CompareItem from "./CompareItem";
import LayoutToolbarMenu from "./LayoutToolbarMenu";
import {
  Compare,
  CompareContainer,
  CompareSelection,
  EmptyContainer,
  MenuTitle,
  Title
} from "./Styles";

export default () => {
  const { selectedItems } = useContext(SelectedItemsContext);
  const selectedItemsList: ListItem<SearchItem>[] = selectedItems.map(
    (item, itemid) => {
      return { itemid, item };
    }
  );
  const [mainItem, setMainItem] = useState(selectedItemsList.slice(0, 2));
  const [sideItems, setSideItems] = useState(selectedItemsList.slice(2));
  const [layout, setLayout] = useState<Layout>("double");
  const lists: List[] = [
    {
      set: setMainItem,
      items: mainItem,
      id: "MAIN",
    },
    {
      set: setSideItems,
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
  }, [layout, selectedItems]);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    // dropped outside the list
    if (!destination) {
      return;
    }

    const desList = lists.find((dList) => dList.id === destination.droppableId);
    if (!desList) return;
    const sourceList = lists.find(
      (sList) => sList.id === source.droppableId
    );
    if (!sourceList) return;

    if (source.droppableId === destination.droppableId) {
      const items = reorder(sourceList.items, source.index, destination.index);
      sourceList.set(items);
    } else {
      const { newSourceItems, newDestinationItems } = move(
        sourceList.items,
        desList.items,
        source,
        destination,
        layout,
        mainItem.length
      );

      desList.set(newDestinationItems);
      sourceList.set(newSourceItems);
    }
  };

  return selectedItems.length !== 0 ? (
    <CompareContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          key='droppable-1'
          droppableId={lists[0].id}
          direction={layout === "main" ? "vertical" : "horizontal"}
        >
          {(provided, snapshot) => (
            <Compare layout={layout} isDraggingOver={snapshot.isDraggingOver}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                }}
              >
                <MenuTitle>Compare</MenuTitle>
                <LayoutToolbarMenu setLayout={setLayout} />
                {/* @ts-ignore */}
                <button
                  style={{
                    color: " #172B4D",
                    borderBottom: " 2px solid rgb(47, 136, 255)",
                    padding: " 5px",
                  }}
                >
                  Show Summary
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  overflow: "hidden",
                  gap: "3%",
                }}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {mainItem.map((res, index) => (
                  <CompareItem
                    layout={layout}
                    on='main'
                    res={res}
                    index={index + 1}
                  />
                ))}
                {provided.placeholder}
              </div>
            </Compare>
          )}
        </Droppable>
        <Droppable
          key='droppable-2'
          droppableId={lists[1].id}
          direction='vertical'
        >
          {(provided, snapshot) => (
            <CompareSelection
              hidden={layout === "none"}
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
              {...provided.droppableProps}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <MenuTitle>Selected Items</MenuTitle>
                <button
                  style={{
                    color: " #172B4D",
                  }}
                >
                  Add more +
                </button>
              </div>
              {sideItems.map((res, index) => (
                <CompareItem
                  layout={layout}
                  on='selection'
                  res={res}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </CompareSelection>
          )}
        </Droppable>
      </DragDropContext>
    </CompareContainer>
  ) : (
    <EmptyContainer>
      <Title>Hey Search</Title> Search Some items then drag them in this area so
      I can render them
    </EmptyContainer>
  );
};
