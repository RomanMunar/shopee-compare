import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import {
  DragDropContext,
  DraggableLocation,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { ToolbarButton } from "../../components/Toolbar";
import { Toolbar } from "../../components/Toolbar/Styles";
import { SearchItem } from "../../interfaces";
import { SelectedItemsContext } from "../../shared/hooks/useSelectedItemsContext";
// import { reorder } from "../../shared/utils/utils";
import CompareItem from "./CompareItem";
import {
  Compare,
  CompareContainer,
  CompareSelection,
  EmptyContainer,
  MenuTitle,
  MenuWrapper,
  Title,
} from "./Styles";

type Layout = "main" | "double" | "none";

const reorder = (list: SearchItem[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default () => {
  const { selectedItems } = useContext(SelectedItemsContext);
  const [mainItem, setMainItem] = useState([selectedItems[0]]);
  const [sideItems, setSideItems] = useState(selectedItems.slice(1));
  const [layout, setLayout] = useState<Layout>("double");
  const lists: list[] = [
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

  type list = {
    set: React.Dispatch<React.SetStateAction<SearchItem[]>>;
    items: SearchItem[];
    id: string;
  };
  const move = (
    source: SearchItem[],
    destination: SearchItem[],
    droppableSource: DraggableLocation,
    droppableDestination: DraggableLocation
  ) => {
    let sourceClone = Array.from(source);
    let destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    if (
      layout === "main" &&
      mainItem.length >= 1 &&
      droppableSource.droppableId === "SELECTION"
    ) {
      sourceClone.push(destClone[0]);
      destClone = [removed];
    } else {
      destClone.splice(droppableDestination.index, 0, removed);
    }
    const newSourceItems = sourceClone;
    const newDestinationItems = destClone;

    return { newSourceItems, newDestinationItems };
  };

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
        destination
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
              <MenuWrapper>
                <Toolbar withoutMargin place='right-top'>
                  <ToolbarButton
                    onClick={() => setLayout("main")}
                    name='Main Layout'
                    icon='MainLayout'
                    tooltipPlace='bottom'
                  />
                  <ToolbarButton
                    onClick={() => setLayout("double")}
                    name='Double Layout'
                    icon='DoubleLayout'
                    tooltipPlace='bottom'
                  />
                  <ToolbarButton
                    onClick={() => setLayout("none")}
                    name='No Layout'
                    icon='Column'
                    tooltipPlace='bottom'
                  />
                </Toolbar>
              </MenuWrapper>
              {mainItem.map((res, index) => (
                <CompareItem on='main' res={res} index={index} />
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
