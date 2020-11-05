import React, { ReactElement, useContext, useState } from "react";
import {
  DragDropContext,
  Draggable,
  DraggableLocation,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import styled from "styled-components";
import Button from "../../components/Button/index.jsx";
import GridStats from "../../components/GridStats";
import { ToolbarButton } from "../../components/Toolbar";
import { Toolbar } from "../../components/Toolbar/Styles";
import { List, ListItem, SearchItem } from "../../interfaces";
import { reorder } from "../../shared/utils/utils";
import { SelectedItemsContext } from "../../shared/hooks/useSelectedItemsContext";
import ResultItemImage from "./ResultItemImage";
import {
  Item,
  Items,
  ItemText,
  ResultItem,
  ResultItemTitle,
  ResultSection,
  SelectPanel,
  Title,
} from "./Styles";

interface Props {
  results: SearchItem[];
  isSelectPanelOpen: boolean;
  setIsSelectPanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSearchPanelOpen: boolean;
  setIsSearchPanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSearchPanelMaximized: boolean;
  setIsSearchPanelMaximized: React.Dispatch<React.SetStateAction<boolean>>;
}

function Results({
  results,
  isSelectPanelOpen,
  setIsSelectPanelOpen,
  isSearchPanelOpen,
  setIsSearchPanelOpen,
  isSearchPanelMaximized,
  setIsSearchPanelMaximized,
}: Props): ReactElement {
  const resultsList: ListItem<SearchItem>[] = results.map((item, itemid) => {
    return { itemid, item };
  });
  const [items, setItems] = useState(resultsList);
  const { setSelectedItems } = useContext(SelectedItemsContext);
  const [initialSelectedItems, setInitialSelectedItems] = useState<
    ListItem<SearchItem>[]
  >([]);

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

  const onSelectItemsSubmit = () => {
    setSelectedItems(initialSelectedItems.map((isi) => isi.item));
    setIsSearchPanelOpen(false);
  };
  const lists: List[] = [
    {
      set: setItems,
      items: items,
      id: "RESULTS",
    },
    {
      set: setInitialSelectedItems,
      items: initialSelectedItems,
      id: "SELECTRESULTS",
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
      console.log(newSourceItems, newDestinationItems);
      console.log(desList, sourceList);

      desList.set(newDestinationItems);
      // sourceList.set(newSourceItems);
    }
  };

  const onBeforeCapture = () => setIsSelectPanelOpen(true);

  return (
    <DragDropContext onBeforeCapture={onBeforeCapture} onDragEnd={onDragEnd}>
      <Droppable
        key='droppable-1344'
        droppableId={lists[0].id}
        isDropDisabled={true}
        direction='horizontal'
      >
        {(provided, snapshot) => (
          <ResultSection
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            {...provided.droppableProps}
          >
            {resultsList.map(({ item, itemid }, index) => (
              <Draggable
                isDragDisabled={initialSelectedItems
                  .map((i) => i.itemid)
                  .includes(itemid)}
                key={"compare-item-" + item.itemid}
                draggableId={`res-${itemid}`}
                index={index}
              >
                {(provided, snapshot) => (
                  <ResultItem
                    selected={initialSelectedItems
                      .map((i) => i.itemid)
                      .includes(itemid)}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}
                    draggingStyle={provided.draggableProps.style}
                  >
                    <ResultItemImage src={item.image} />
                    <ResultItemTitle>
                      {item.name.replace(/[^a-zA-Z0-9 ]/g, "")}
                    </ResultItemTitle>
                    <GridStats item={item} on='results' />
                  </ResultItem>
                )}
              </Draggable>
            ))}
          </ResultSection>
        )}
      </Droppable>
      {!isSearchPanelMaximized && (
        <SelectPanel isSelectPanelOpen={isSelectPanelOpen}>
          <MenuWrapper>
            <Title>Selected Items</Title>
            <Toolbar withoutMargin place='right-top'>
              <ToolbarButton
                onClick={() => setIsSelectPanelOpen(false)}
                name='Minimize'
                icon='ArrowCircleLeft'
              />
              <ToolbarButton
                onClick={() => setIsSearchPanelMaximized(true)}
                name='Maximize'
                icon='Grid'
              />
              <ToolbarButton
                onClick={() => setIsSearchPanelOpen(false)}
                name='Close'
              />
            </Toolbar>
          </MenuWrapper>
          <Droppable
            key='droppable-155'
            droppableId={lists[1].id}
            direction='vertical'
          >
            {(provided, snapshot) => (
              <Items
                isSelectedItemsEmpty={initialSelectedItems.length === 0}
                ref={provided.innerRef}
                isDraggingOver={snapshot.isDraggingOver}
                {...provided.droppableProps}
              >
                {lists[1].items.map(({ item }, index) => (
                  <Item>
                    <ResultItemImage src={item.image} direction='left' />
                    <ItemText>
                      {item.name
                        .replace(/[^a-zA-Z0-9 ]/g, "")
                        .split("")
                        .slice(0, 50)}
                      ...
                    </ItemText>
                  </Item>
                ))}
              </Items>
            )}
          </Droppable>
          <div style={{ display: "flex", flexShrink: 0 }}>
            {/*//@ts-ignore */}
            <Button
              variant='secondary'
              onClick={() => setIsSelectPanelOpen(false)}
            >
              Hide
            </Button>
            {/*//@ts-ignore */}
            <Button variant='primary' onClick={onSelectItemsSubmit}>
              Compare
            </Button>
          </div>
        </SelectPanel>
      )}
    </DragDropContext>
  );
}

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export default Results;
