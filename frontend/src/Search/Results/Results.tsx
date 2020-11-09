import React, { ReactElement } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import GridStats from "../../components/GridStats";
import { ListItem, SearchItem } from "../../interfaces";
import { useUI } from "../../shared/contexts/useUIContext";
import { ResultItemImage } from "./ResultItemImage";
import { ResultItem, ResultItemTitle, ResultSection } from "./Results.styles";

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

  console.log({ results });
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
                    big={displayMaxSearchPanel}
                    key={`initialItem-${item.itemid}`}
                    selected={initialSelectedItems
                      .map((i) => i.itemid)
                      .includes(itemid)}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}
                  >
                    <ResultItemImage src={item.image} />
                    <div style={{ padding: "2px 8px 5px 8px" }}>
                      <ResultItemTitle>
                        {item.name.replace(/[^a-zA-Z0-9 ]/g, "")}
                      </ResultItemTitle>
                      <GridStats item={item} on='results' />
                    </div>
                  </ResultItem>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ResultSection>
        )}
      </Droppable>
    </>
  );
}

export default Results;
