import React, { useContext, useLayoutEffect, useState } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { Layout, List } from "../../interfaces";
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
  const [mainItem, setMainItem] = useState([selectedItems[0]]);
  const [sideItems, setSideItems] = useState(selectedItems.slice(1));
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

  // Finally, a chance to use useLayoutEffect
  useLayoutEffect(() => {
    switch (layout) {
      case "main":
        setMainItem([selectedItems[0]]);
        setSideItems(selectedItems.slice(1));
        break;
      case "double":
        setMainItem(selectedItems.slice(0, 2));
        setSideItems(selectedItems.slice(2));
        break;
      case "none":
        setMainItem(selectedItems);
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
            <Compare
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
              {...provided.droppableProps}
            >
              <LayoutToolbarMenu setLayout={setLayout} />
              {mainItem.map((res, index) => (
                <CompareItem
                  layout={layout}
                  on='main'
                  res={res}
                  index={index}
                />
              ))}
              {provided.placeholder}
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
              <MenuTitle>Selected Items</MenuTitle>
              {sideItems.map((res, index) => (
                <CompareItem on='selection' res={res} index={index} />
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
