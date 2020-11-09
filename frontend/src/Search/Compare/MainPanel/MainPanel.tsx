import React, { Dispatch, SetStateAction } from "react";
import { Droppable } from "react-beautiful-dnd";
import Flex from "../../../components/Flex";
import { ToolbarButton } from "../../../components/Toolbar";
import { Toolbar } from "../../../components/Toolbar/Styles";
import { Layout, List, ListItem, SearchItem } from "../../../interfaces";
import { useUI } from "../../../shared/contexts/useUIContext";
import { Compare, LinkButton } from "../Compare.styles";
import { MenuTitle } from "../SelectionPanel/SelectionPanel.styles";
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
  setLayout,
  layout,
}: Props) => {
  const { openCompareSummary } = useUI();

  return (
    <Droppable
      key='droppable-1'
      droppableId={list.id}
      direction={layout === "main" ? "vertical" : "horizontal"}
    >
      {(provided, snapshot) => (
        <Compare layout={layout} isDraggingOver={snapshot.isDraggingOver}>
          <Flex align='flex-end' justify='space-between'>
            <MenuTitle>Compare</MenuTitle>
            <Toolbar withoutMargin place='right-top'>
              <ToolbarButton
                onClick={() => setLayout("main")}
                name='Main Layout'
                icon='MainLayout'
                tooltipPlace='bottom'
              />
              <ToolbarButton
                onClick={() => setLayout("double")}
                name='Double Layout'
                icon='DoubleLayout'
                tooltipPlace='bottom'
              />
              <ToolbarButton
                onClick={() => setLayout("none")}
                name='No Layout'
                icon='Column'
                tooltipPlace='bottom'
              />
            </Toolbar>
            {/* @ts-ignore */}
            <LinkButton onClick={() => openCompareSummary()}>
              Show Summary
            </LinkButton>
          </Flex>
          <Flex
            overflow='hidden'
            gap={1.3}
            dir='row'
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {list.items.map((res, index) => (
              <CompareItem
                initialSelectedItems={initialSelectedItems}
                setInitialSelectedItems={setInitialSelectedItems}
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
                layout={layout}
                on='main'
                res={res}
                index={index}
              />
            ))}
            {provided.placeholder}
          </Flex>
        </Compare>
      )}
    </Droppable>
  );
};

export default MainPanel;
