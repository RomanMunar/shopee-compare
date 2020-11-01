import React, { useContext, useState } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { reorder } from "../../shared/utils/utils";
import { SelectedItemsContext } from "../../useSelectedItemsContext";
import CompareItem from "./CompareItem";
import { ratings } from "./ratings";
import { Compare, EmptyContainer, Title } from "./Styles";

type Layout = "single" | "double" | "none";

export default () => {
  const { selectedItems, setSelectedItems } = useContext(SelectedItemsContext);
  const [layout, setLayout] = useState<Layout>("single");
  const { data } = ratings;

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
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='droppable' direction='horizontal'>
        {(provided, snapshot) => (
          <Compare
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            {...provided.droppableProps}
          >
            {selectedItems.map((res, index) => (
              <CompareItem res={res} index={index} />
            ))}
            {provided.placeholder}
          </Compare>
        )}
      </Droppable>
    </DragDropContext>
  ) : (
    <EmptyContainer>
      <Title>Hey Search</Title> Search Some items then drag them in this area so
      I can render them
    </EmptyContainer>
  );
};
