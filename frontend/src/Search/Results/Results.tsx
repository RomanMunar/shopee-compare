import React, { ReactElement, useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { List, ListItem, SearchItem } from "../../interfaces";
import { ResultItem } from "./ResultItem/";
import { ResultSection } from "./Results.styles";

type Props = {
  results: ListItem<SearchItem>[];
  initialSelectedItems: ListItem<SearchItem>[];
  dropId: string;
  setInitialSelectedItems: React.Dispatch<
    React.SetStateAction<ListItem<SearchItem>[]>
  >;
  lists: List[];
};

function Results({
  dropId,
  results,
  initialSelectedItems,
  setInitialSelectedItems,
  lists,
}: Props): ReactElement {
  const [items, setItems] = useState(results);
  lists.push({ id: dropId, items, setItems });
  return (
    <Droppable
      key={`droppable-1344${dropId}`}
      droppableId={dropId}
      isDropDisabled={true}
      direction='horizontal'
    >
      {(provided, snapshot) => (
        <>
          <ResultSection
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            {...provided.droppableProps}
          >
            {items.map((item, index) => (
              <ResultItem
                setInitialSelectedItems={setInitialSelectedItems}
                initialSelectedItems={initialSelectedItems}
                item={item}
                index={index}
              />
            ))}
            {provided.placeholder}
          </ResultSection>
        </>
      )}
    </Droppable>
  );
}

export default Results;
