import React, { Dispatch, SetStateAction } from "react";
import { Droppable } from "react-beautiful-dnd";
import Flex from "../../../components/Flex";
import { Layout, List, ListItem, SearchItem } from "../../../interfaces";
import { useUI } from "../../../shared/contexts/useUIContext";
import {
  CompareSelection,
  MenuButton,
  MenuTitle,
} from "./SelectionPanel.styles";
import { CompareItem } from "../CompareItem";

interface Props {
  list: List;
  layout: Layout;
  initialSelectedItems: ListItem<SearchItem>[];
  setInitialSelectedItems: Dispatch<SetStateAction<ListItem<SearchItem>[]>>;
  selectedItems: SearchItem[];
  setSelectedItems: Dispatch<SetStateAction<SearchItem[]>>;
  setLayout: Dispatch<React.SetStateAction<Layout>>;
}

const MainPanel = ({
  list,
  initialSelectedItems,
  setInitialSelectedItems,
  selectedItems,
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
                  initialSelectedItems={initialSelectedItems}
                  setInitialSelectedItems={setInitialSelectedItems}
                  selectedItems={selectedItems}
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
