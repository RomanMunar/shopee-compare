import React from "react";
import { Draggable } from "react-beautiful-dnd";
import GridStats from "../../../components/GridStats";
import { ListItem, SearchItem } from "../../../interfaces";
import { useUI } from "../../../shared/contexts/useUIContext";
import { ResultItemImage } from "../ResultItemImage";
import { RItem, ResultItemTitle } from "./ResultItem.stlyes";

interface Props {
  index: number;
  item: SearchItem;
  itemid: number;
  initialSelectedItems: ListItem<SearchItem>[];
}

const ResultItem = ({ initialSelectedItems, itemid, item, index }: Props) => {
  const { displayMaxSearchPanel } = useUI();

  return (
    <Draggable
      isDragDisabled={initialSelectedItems
        .map((i) => i.itemid)
        .includes(itemid)}
      key={"compare-item-" + item.itemid}
      draggableId={`res-${itemid}`}
      index={index}
    >
      {(provided, snapshot) => (
        <RItem
          big={displayMaxSearchPanel}
          key={`initialItem-${item.itemid}`}
          selected={initialSelectedItems.map((i) => i.itemid).includes(itemid)}
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
        </RItem>
      )}
    </Draggable>
  );
};

export default ResultItem;
