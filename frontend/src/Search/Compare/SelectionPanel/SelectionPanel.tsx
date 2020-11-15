import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Droppable } from "react-beautiful-dnd";
import Flex from "../../../components/Flex";
import { Layout, List, ListItem, SearchItem } from "../../../interfaces";
import { useUI } from "../../../shared/contexts/useUIContext";
import { useKeyPress } from "../../../shared/hooks/useKeyPressed";
import { CompareItem } from "../CompareItem";
import {
  CompareSelection,
  MenuButton,
  MenuTitle,
} from "./SelectionPanel.styles";

interface Props {
  list: List;
  layout: Layout;
  setInitialSelectedItems: Dispatch<SetStateAction<ListItem<SearchItem>[]>>;
  setSelectedItems: Dispatch<SetStateAction<SearchItem[]>>;
  selectedItems: SearchItem[];
}

const SelectionPanel = ({
  list,
  setInitialSelectedItems,
  setSelectedItems,
  layout,
  selectedItems,
}: Props) => {
  const {
    openOverlay,
    closeOverlay,
    openSearchPanel,
    closeSearchPanel,
    openSelectPanel,
  } = useUI();
  const keyPressed = useKeyPress("Escape");
  useEffect(() => {
    if (keyPressed) {
      closeOverlay();
      closeSearchPanel();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyPressed]);
  return (
    <Droppable key='droppable-2' droppableId={list.id} direction='vertical'>
      {(provided, snapshot) => (
        <CompareSelection
          hidden={layout === "none"}
          ref={provided.innerRef}
          isDraggingOver={snapshot.isDraggingOver}
          {...provided.droppableProps}
        >
          <Flex dir='row' align='flex-end' justify='space-between'>
            <MenuTitle>Selected Items</MenuTitle>
            <MenuButton
              onClick={() => {
                openSearchPanel();
                openOverlay();
                openSelectPanel();
              }}
            >
              Add more +
            </MenuButton>
          </Flex>
          <div>
            {list.items.map((res, index) => (
              <div style={{ marginBottom: "15px" }}>
                <CompareItem
                  selectedItems={selectedItems}
                  setInitialSelectedItems={setInitialSelectedItems}
                  setSelectedItems={setSelectedItems}
                  layout={layout}
                  on='selection'
                  res={res}
                  index={index}
                />
              </div>
            ))}
          </div>
          {provided.placeholder}
        </CompareSelection>
      )}
    </Droppable>
  );
};

export default SelectionPanel;
