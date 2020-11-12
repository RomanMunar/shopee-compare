import React, { ReactElement, useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { ListItem, SearchItem } from "../../interfaces";
import { ResultItem } from "./ResultItem/";
import { AddRowButton, ResultSection } from "./Results.styles";

type Props = {
  results: ListItem<SearchItem>[];
  initialSelectedItems: ListItem<SearchItem>[];
  dropId: string;
  setInitialSelectedItems: React.Dispatch<
    React.SetStateAction<ListItem<SearchItem>[]>
  >;
};

function Results({
  dropId,
  results,
  initialSelectedItems,
  setInitialSelectedItems,
}: Props): ReactElement {
  const [showAddRow, setShowAddRow] = useState(false);
  const [addedRow, setAddedRow] = useState(false);
  const selected = results.every((r) =>
    initialSelectedItems.map((i) => i.itemid).includes(r.itemid)
  );
  return (
    <>
      <Droppable
        key={`droppable-1344${dropId}`}
        droppableId={dropId}
        isDropDisabled={true}
        direction='horizontal'
      >
        {(provided, snapshot) => (
          <>
            <ResultSection
              onMouseEnter={() => {
                if (addedRow === true) return;
                setShowAddRow(true);
              }}
              onMouseLeave={() => setShowAddRow(false)}
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
              {...provided.droppableProps}
            >
              {results.map((item, index) => (
                <ResultItem
                  setInitialSelectedItems={setInitialSelectedItems}
                  initialSelectedItems={initialSelectedItems}
                  item={item}
                  index={index}
                />
              ))}
              {provided.placeholder}
              {!selected && !addedRow && (
                <AddRowButton
                  onClick={() => {
                    setInitialSelectedItems((prev) =>
                      prev.concat(
                        results.filter(
                          (p) => !prev.map((r) => r.itemid).includes(p.itemid)
                        )
                      )
                    );
                    setAddedRow(true);
                  }}
                  showAddRow={showAddRow}
                >
                  Add row +
                </AddRowButton>
              )}
            </ResultSection>
          </>
        )}
      </Droppable>
    </>
  );
}

export default Results;
