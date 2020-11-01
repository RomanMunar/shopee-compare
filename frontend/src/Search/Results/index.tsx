import React, { ReactElement, useContext, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import styled from "styled-components";
import Button from "../../components/Button/index.jsx";
import GridStats from "../../components/GridStats";
import { ToolbarButton } from "../../components/Toolbar";
import { Toolbar } from "../../components/Toolbar/Styles";
import { SearchItem } from "../../interfaces";
import { moveBetween, reorder } from "../../shared/utils/utils";
import { SelectedItemsContext } from "../../useSelectedItemsContext";
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
  const [items, setItems] = useState(results);
  const { setSelectedItems } = useContext(SelectedItemsContext);
  const [initialSelectedItems, setInitialSelectedItems] = useState<
    SearchItem[]
  >([]);

  const onSelectItemsSubmit = () => {
    setSelectedItems(initialSelectedItems);
    setIsSearchPanelOpen(false);
  };
  const onDragEnd = function onDragEnd(result: DropResult) {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      if (source.droppableId === "SELECTEDRESULTS") {
        setItems(reorder(items, source.index, destination.index));
      }
      // In our current UI it won't be possible to reorder trash
      return;
    }

    const { list1, list2 } = moveBetween<SearchItem>({
      list1: {
        id: "RESULTS",
        values: items,
      },
      list2: {
        id: "SELECTEDRESULTS",
        values: initialSelectedItems,
      },
      source,
      destination,
    });

    setItems(list1.values);
    setInitialSelectedItems(list2.values);
  };
  const onBeforeCapture = () => setIsSelectPanelOpen(true);

  return (
    <DragDropContext onBeforeCapture={onBeforeCapture} onDragEnd={onDragEnd}>
      <Droppable
        droppableId='RESULTS'
        isDropDisabled={true}
        direction='horizontal'
      >
        {(provided, snapshot) => (
          <ResultSection
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            {...provided.droppableProps}
          >
            {results.map((res, index) => (
              <Draggable
                isDragDisabled={initialSelectedItems
                  .map((item) => item.itemid)
                  .includes(res.itemid)}
                key={res.itemid}
                draggableId={`${res.itemid}`}
                index={index}
              >
                {(provided, snapshot) => (
                  <ResultItem
                    selected={initialSelectedItems
                      .map((item) => item.itemid)
                      .includes(res.itemid)}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}
                    draggingStyle={provided.draggableProps.style}
                  >
                    <ResultItemImage src={res.image} />
                    <ResultItemTitle>
                      {res.name.replace(/[^a-zA-Z0-9 ]/g, "")}
                    </ResultItemTitle>
                    <GridStats item={res} on='results' />
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
          <Droppable droppableId='SELECTEDRESULTS' direction='vertical'>
            {(provided, snapshot) => (
              <Items
                isSelectedItemsEmpty={initialSelectedItems.length === 0}
                ref={provided.innerRef}
                isDraggingOver={snapshot.isDraggingOver}
                {...provided.droppableProps}
              >
                {initialSelectedItems.map((res, index) => (
                  <Item>
                    <ResultItemImage src={res.image} direction='left' />
                    <ItemText>
                      {res.name
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
