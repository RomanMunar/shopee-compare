import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import styled from "styled-components";
import { color, font, mixin, shadows } from "../../styles";
import { SearchItem } from "../../interfaces";

// a little function to help us with reordering the result
const reorder = (list: SearchItem[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default ({ results }: { results: SearchItem[] }) => {
  const [items, setItems] = useState(results);

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
  return false ? (
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
    <EmptyContainer>
      <Title>Hey Search</Title> Some items and added them to the list so I can
      render them
    </EmptyContainer>
  );
};
const Title = styled.span`
  display: block;
  font-size: 24px;
  ${font.bold}
  margin-bottom: 10px;
`;

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 25%;
  top: 25vh;
  left: 30vw;
  border: 5px dashed rgba(51, 51, 51, 0.6);
`;

const CompareItem = styled.div<{ draggingStyle: any; isDragging: boolean }>`
  border-radius: 15px;
  ${(props) => (props.isDragging ? shadows.shadow2Xl : shadows.shadowMd)};
  ${(props) => props.draggingStyle}
  background-color: ${(props) =>
    props.isDragging ? "#fef3ab" : color.backgroundLight};
`;
