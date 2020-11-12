import React, { Dispatch, SetStateAction } from "react";
import { Droppable } from "react-beautiful-dnd";
import toast from "../../../shared/hooks/toast";
import Flex from "../../../components/Flex";
import { ToolbarButton } from "../../../components/Toolbar";
import { Toolbar } from "../../../components/Toolbar/Styles";
import { Layout, List, ListItem, SearchItem } from "../../../interfaces";
import { useUI } from "../../../shared/contexts/useUIContext";
import { Compare, LinkButton } from "../Compare.styles";
import { MenuTitle } from "../SelectionPanel/SelectionPanel.styles";
import { CompareItem } from "../CompareItem";
import { Icon } from "../../../components/Icon";

interface Props {
  list: List;
  layout: Layout;
  setInitialSelectedItems: Dispatch<SetStateAction<ListItem<SearchItem>[]>>;
  setSelectedItems: Dispatch<SetStateAction<SearchItem[]>>;
  selectedItems: SearchItem[];
  setLayout: Dispatch<React.SetStateAction<Layout>>;
}

const MainPanel = ({
  list,
  setInitialSelectedItems,
  setSelectedItems,
  setLayout,
  layout,
  selectedItems,
}: Props) => {
  const { openCompareSummary, openCompareGuide, openAddToBookmarks } = useUI();

  return (
    <Droppable
      key='droppable-1'
      droppableId={list.id}
      direction={layout === "main" ? "vertical" : "horizontal"}
    >
      {(provided, snapshot) => (
        <Compare layout={layout} isDraggingOver={snapshot.isDraggingOver}>
          <Flex align='flex-end' justify='space-between'>
            <Flex justify='flex-start'>
              <ToolbarButton
                onClick={() => openAddToBookmarks()}
                name='Add to bookmarks'
                icon='Bookmark'
                tooltipPlace='bottom'
                size={24}
              />
              <MenuTitle>Compare</MenuTitle>
            </Flex>
            <Flex align='center'>
              <Toolbar withoutMargin place='right-top'>
                <ToolbarButton
                  onClick={() => {
                    setLayout("main");
                  }}
                  name='Main Layout'
                  icon='MainLayout'
                  tooltipPlace='bottom'
                />
                <ToolbarButton
                  onClick={() =>
                    layout === "double"
                      ? list.setItems((prev) => [
                          prev[1],
                          prev[0],
                          ...prev.slice(2),
                        ])
                      : setLayout("double")
                  }
                  name={layout === "double" ? "Swap" : "Double Layout"}
                  icon={layout === "double" ? "Swap" : "DoubleLayout"}
                  tooltipPlace='bottom'
                />
                <ToolbarButton
                  onClick={() => setLayout("none")}
                  name='No Layout'
                  icon='Column'
                  tooltipPlace='bottom'
                />
              </Toolbar>
              <ToolbarButton
                onClick={() => openCompareGuide()}
                name='Help'
                size={20}
                icon='Help'
                tooltipPlace='bottom'
              />
            </Flex>
            {/* @ts-ignore */}
            <LinkButton onClick={() => openCompareSummary()}>
              Show Summary
            </LinkButton>
          </Flex>
          <Flex
            overflow='auto'
            scrollType='snap'
            gap={1.3}
            dir='row'
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {list.items.map((res, index) => (
              <CompareItem
                selectedItems={selectedItems}
                setInitialSelectedItems={setInitialSelectedItems}
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
