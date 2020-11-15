import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import GridStats from "../../../components/GridStats";
import { ListItem, SearchItem } from "../../../interfaces";
import { useUI } from "../../../shared/contexts/useUIContext";
import { ResultItemImage } from "../ResultItemImage";
import { AddRowButton } from "../Results.styles";
import { ResultItemTitle, RItem } from "./ResultItem.stlyes";

interface Props {
  index: number;
  item: ListItem<SearchItem>;
  initialSelectedItems: ListItem<SearchItem>[];
  setInitialSelectedItems: React.Dispatch<
    React.SetStateAction<ListItem<SearchItem>[]>
  >;
}

const ResultItem = ({
  initialSelectedItems,
  item,
  index,
  setInitialSelectedItems,
}: Props) => {
  const { item: itm } = item;

  const { displayMaxSearchPanel, openSelectPanel } = useUI();
  const [showAddRow, setShowAddRow] = useState(false);
  const [showRemoveRow, setShowRemoveRow] = useState(false);
  const selected = initialSelectedItems
    .map((i) => i.itemid)
    .includes(item.itemid);
  return (
    <Draggable
      isDragDisabled={initialSelectedItems
        .map((i) => i.itemid)
        .includes(item.itemid)}
      key={"compare-item-" + itm.itemid}
      draggableId={`res-${item.itemid}`}
      index={index}
    >
      {(provided, snapshot) => (
        <RItem
          onMouseEnter={() => {
            setShowAddRow(true);
            setShowRemoveRow(true);
          }}
          onMouseLeave={() => {
            setShowAddRow(false);
            setShowRemoveRow(false);
          }}
          big={displayMaxSearchPanel}
          key={`initialItem-${itm.itemid}`}
          selected={selected}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          <ResultItemImage src={itm.image} />
          <div style={{ padding: "2px 8px 5px 8px" }}>
            <ResultItemTitle>
              {itm.name.replace(/[^a-zA-Z0-9 ]/g, "")}
            </ResultItemTitle>
            <GridStats item={itm} on='results' />
          </div>
          {!selected ? (
            <AddRowButton
              onClick={() => {
                openSelectPanel();
                setInitialSelectedItems((prev) => [...prev, item]);
              }}
              right
              showAddRow={showAddRow}
            >
              +
            </AddRowButton>
          ) : (
            <AddRowButton
              onClick={() => {
                openSelectPanel();
                setInitialSelectedItems((prev) =>
                  prev.filter((res) => item.itemid !== res.itemid)
                );
              }}
              right
              remove
              showAddRow={showRemoveRow}
            >
              -
            </AddRowButton>
          )}
        </RItem>
      )}
    </Draggable>
  );
};

export default ResultItem;
