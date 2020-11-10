import React, { Dispatch, SetStateAction } from "react";
import { Droppable } from "react-beautiful-dnd";
import Flex from "../../../components/Flex";
import { Layout, List, ListItem, SearchItem } from "../../../interfaces";
import { useUI } from "../../../shared/contexts/useUIContext";
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
}

const MainPanel = ({
  list,
  setInitialSelectedItems,
  setSelectedItems,
  layout,
}: Props) => {
  const { openOverlay, openSearchPanel, openSelectPanel } = useUI();

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

export default MainPanel;
