import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import styled from "styled-components";
import { color, mixin, shadows } from "../../styles";
import { SearchItem } from "../../interfaces";

// a little function to help us with reordering the result
const reorder = (list: SearchItem[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default ({ results }: { results: SearchItem[] }) => {
  const displayedResults: SearchItem[] = [];
  const filteredResults = results.filter(function (item) {
    return displayedResults.findIndex((x) => x.itemid === item.itemid) === -1
      ? displayedResults.push(item)
      : null;
  });
  console.log({ filteredResults });
  const [items, setItems] = useState(displayedResults);

  const onDragEnd = (result: DropResult) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const newItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    setItems(newItems);
  };
  return displayedResults ? (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='droppable' direction='horizontal'>
        {(provided, snapshot) => (
          <Compare
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            {...provided.droppableProps}
          >
            {items.map((item, index) => (
              <Draggable
                key={item.itemid}
                draggableId={`item-${item.itemid}`}
                index={index}
              >
                {(provided, snapshot) => (
                  <CompareItem
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}
                    draggingStyle={provided.draggableProps.style}
                  >
                    {item.itemid}
                  </CompareItem>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Compare>
        )}
      </Droppable>
    </DragDropContext>
  ) : (
    <EmptyContainer />
  );
};

const Compare = styled.div<{ isDraggingOver: boolean }>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5%;
  padding: 20px;
  ${mixin.scrollableY}
  ${mixin.customScrollbar()}
  position: absolute;
  width: 93%;
  height: 90%;
  top: 50px;
  border-radius: 15px;
  background-color: ${(props) =>
    props.isDraggingOver ? color.backgroundLight : color.backgroundMedium};
`;

const EmptyContainer = styled.div`
  position: absolute;
  width: 93%;
  height: 90%;
  top: 50px;
  border: 5px dashed #333;
`;

const CompareItem = styled.div<{ draggingStyle: any; isDragging: boolean }>`
  border-radius: 15px;
  ${(props) => (props.isDragging ? shadows.shadow2Xl : shadows.shadowMd)};
  ${(props) => props.draggingStyle}
  background-color: ${(props) =>
    props.isDragging ? "#fef3ab" : color.backgroundLight};
`;
