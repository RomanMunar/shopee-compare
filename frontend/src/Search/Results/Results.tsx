import React, { ReactElement } from "react";
import { Droppable } from "react-beautiful-dnd";
import { ListItem, SearchItem } from "../../interfaces";
import { useUI } from "../../shared/contexts/useUIContext";
import { ResultItem } from "./ResultItem/";
import { ResultSection } from "./Results.styles";

type Props = {
  results: ListItem<SearchItem>[];
  initialSelectedItems: ListItem<SearchItem>[];
  dropId: string;
};

function Results({
  dropId,
  results,
  initialSelectedItems,
}: Props): ReactElement {
  const { displayMaxSearchPanel } = useUI();

  return (
    <>
      <Droppable
        key={`droppable-1344${dropId}`}
        droppableId={dropId}
        isDropDisabled={true}
        direction='horizontal'
      >
        {(provided, snapshot) => (
          <ResultSection
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            {...provided.droppableProps}
          >
            {results.map(({ item, itemid }, index) => (
              <ResultItem
                initialSelectedItems={initialSelectedItems}
                item={item}
                itemid={itemid}
                index={index}
              />
            ))}
            {provided.placeholder}
          </ResultSection>
        )}
      </Droppable>
    </>
  );
}

export default Results;
