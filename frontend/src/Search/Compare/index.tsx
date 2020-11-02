import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { reorder } from "../../shared/utils/utils";
import { SelectedItemsContext } from "../../shared/hooks/useSelectedItemsContext";
import CompareItem from "./CompareItem";
import { ratings } from "./ratings";
import { Compare, EmptyContainer, Title } from "./Styles";
import styled from "styled-components";
import { color, shadows, font } from "../../styles";
import { Toolbar } from "../../components/Toolbar/Styles";
import { ToolbarButton } from "../../components/Toolbar";
import { SearchItem } from "../../interfaces";
import { Icon } from "../../components/Icon";

type Layout = "main" | "double" | "none";

export default () => {
  const { selectedItems, setSelectedItems } = useContext(SelectedItemsContext);
  const [mainItem, setMainItem] = useState([selectedItems[0]]);
  const [sideItems, setSideItems] = useState(selectedItems.slice(1));
  const [layout, setLayout] = useState<Layout>("main");
  const { data } = ratings;

  // Finally encountered a time to use useLayoutEffect
  useLayoutEffect(() => {
    switch (layout) {
      case "main":
        setMainItem([selectedItems[0]]);
        setSideItems(selectedItems.slice(1));
        break;
      case "double":
        setMainItem([selectedItems[0], selectedItems[1]]);
        setSideItems(selectedItems.slice(2));
        break;
      case "none":
        setMainItem(selectedItems);
        setSideItems([]);
        break;
    }
  }, [layout]);

  useEffect(() => {
    console.log(`On ${layout} Layout`);
    console.log({ mainItem, sideItems });
  }, [mainItem, sideItems]);

  const onDragEnd = (result: DropResult) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const newItems = reorder(
      selectedItems,
      result.source.index,
      result.destination.index
    );

    setSelectedItems(newItems);
  };

  return selectedItems.length !== 0 ? (
    <CompareContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='droppable' direction='horizontal'>
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
        <Droppable droppableId='droppable2' direction='vertical'>
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

const CompareContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 20px;
  width: 93%;
  height: 100%;
  position: absolute;
  background: ${color.backgroundLight};
  gap: 2.5%;
`;

const CompareSelection = styled.div<{
  hidden: boolean;
  isDraggingOver: boolean;
}>`
  ${(props) => props.hidden && "display:none"};
  min-width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1.5%;
  border-radius: 15px;
  background-color: ${(props) =>
    props.isDraggingOver
      ? color.backgroundDarkPrimary
      : color.backgroundLightest};
  ${shadows.shadowLg}
`;
const MenuWrapper = styled.div`
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  z-index: 10;
  position: absolute;
  top: 5px;
  margin: auto;
`;
const MenuTitle = styled.span`
  font-size: 20px;
  ${font.medium}
  line-height: 20px;
`;
const ToolbarLayouts = styled.div`
  ${font.bold}
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  margin-top: 4px;
  margin-right: 15px;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;
