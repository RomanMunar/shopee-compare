import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import Flex from "../../components/Flex";
import { Layout, List, ListItem, SearchItem } from "../../interfaces";
import { move, reorder } from "../../shared/utils/utils";
import CompareItem from "./CompareItem/CompareItem";
import {
  Compare,
  CompareContainer,
  CompareSelection,
  EmptyContainer,
  MenuButton,
  MenuTitle,
  Title,
  LinkButton,
} from "./Compare.styles";
import { ToolbarButton } from "../../components/Toolbar";
import { Toolbar } from "../../components/Toolbar/Styles";

export default ({
  setIsOverlayHidden,
  selectedItems,
  setSelectedItems,
  setShowCompareSummary,
  setIsSearchPanelOpen,
  initialSelectedItems,
  setInitialSelectedItems,
  setIsSelectPanelOpen,
}: {
  setIsOverlayHidden: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedItems: React.Dispatch<React.SetStateAction<SearchItem[]>>;
  selectedItems: SearchItem[];
  setShowCompareSummary: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSearchPanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setInitialSelectedItems: React.Dispatch<
    React.SetStateAction<ListItem<SearchItem>[]>
  >;
  setIsSelectPanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
  initialSelectedItems: ListItem<SearchItem>[];
}) => {
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
            <Compare layout={layout} isDraggingOver={snapshot.isDraggingOver}>
              <Flex align='flex-end' justify='space-between'>
                <MenuTitle>Compare</MenuTitle>
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
                {/* @ts-ignore */}
                <LinkButton onClick={() => setShowCompareSummary(true)}>
                  Show Summary
                </LinkButton>
              </Flex>
              <Flex
                overflow='hidden'
                gap={1.3}
                dir='row'
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {mainItem.map((res, index) => (
                  <CompareItem
                    initialSelectedItems={initialSelectedItems}
                    setInitialSelectedItems={setInitialSelectedItems}
                    selectedItems={selectedItems}
                    setSelectedItems={setSelectedItems}
                    layout={layout}
                    on='main'
                    res={res}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </Flex>
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
              <Flex dir='row' align='flex-end' justify='space-between'>
                <MenuTitle>Selected Items</MenuTitle>
                <MenuButton
                  onClick={() => {
                    setIsSearchPanelOpen(true);
                    setIsOverlayHidden(false);
                    setIsSelectPanelOpen(true);
                  }}
                >
                  Add more +
                </MenuButton>
              </Flex>
              {sideItems.map((res, index) => (
                <CompareItem
                  initialSelectedItems={initialSelectedItems}
                  setInitialSelectedItems={setInitialSelectedItems}
                  selectedItems={selectedItems}
                  setSelectedItems={setSelectedItems}
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
