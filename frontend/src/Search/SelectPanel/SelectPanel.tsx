import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { useSearchParams } from "react-router-dom";
import Button from "../../components/Button";
import { ToolbarButton } from "../../components/Toolbar/index";
import { Toolbar } from "../../components/Toolbar/Styles";
import { ListItem, SearchItem } from "../../interfaces";
import { useUI } from "../../shared/contexts/useUIContext";
import toast from "../../shared/hooks/toast";
import SelectItem from "./SelectItem/SelectItem";
import {
  Title,
  Items,
  MenuWrapper,
  SelectPanelStyle,
} from "./SelectPanel.styles";

type Props = {
  initialSelectedItems: ListItem<SearchItem>[];
  setInitialSelectedItems: React.Dispatch<
    React.SetStateAction<ListItem<SearchItem>[]>
  >;
  setSelectedItems: React.Dispatch<React.SetStateAction<SearchItem[]>>;
};

const SelectPanel = ({
  setInitialSelectedItems,
  setSelectedItems,
  initialSelectedItems,
}: Props) => {
  const {
    openSearchPanel,
    closeSelectPanel,
    displaySelectPanel,
    closeSearchPanel,
    closeOverlay,
    maximizeSearchPanel,
  } = useUI();
  const [params, setParams] = useSearchParams();
  const onRemoveClick = (itemid: number) => {
    setInitialSelectedItems((prev) =>
      prev.filter((res) => itemid !== res.item.itemid)
    );
  };
  const onSelectItemsSubmit = () => {
    setParams({
      items: initialSelectedItems.map((i) => i.item.itemid).toString(),
    });
    if (initialSelectedItems.length < 2) {
      toast.show({
        type: "primary",
        message: "Please select atleast 2 items",
      });
      return;
    }

    setSelectedItems(initialSelectedItems.map((isi) => isi.item));
    closeSearchPanel();
    closeOverlay();
    closeSelectPanel();
  };

  return (
    <SelectPanelStyle isSelectPanelOpen={displaySelectPanel}>
      <MenuWrapper>
        <Title>Selected Items</Title>
        <Toolbar withoutMargin place='right-top'>
          <ToolbarButton
            tooltipPlace='bottom'
            onClick={() => closeSelectPanel()}
            name='Minimize'
            icon='ArrowCircleLeft'
          />
          <ToolbarButton
            tooltipPlace='bottom'
            onClick={() => maximizeSearchPanel()}
            name='Maximize'
            icon='Grid'
          />
          <ToolbarButton
            tooltipPlace='bottom'
            onClick={() => openSearchPanel()}
            name='Close'
          />
        </Toolbar>
      </MenuWrapper>
      <Droppable
        key='droppable-155'
        droppableId='initialSelectedItems'
        direction='vertical'
      >
        {(provided, snapshot) => (
          <Items
            isSelectedItemsEmpty={initialSelectedItems.length === 0}
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            {...provided.droppableProps}
          >
            {initialSelectedItems.map(({ item }) => (
              <SelectItem onRemoveClick={onRemoveClick} item={item} />
            ))}
            {provided.placeholder}
          </Items>
        )}
      </Droppable>
      <div style={{ display: "flex", flexShrink: 0 }}>
        {/*//@ts-ignore */}
        <Button variant='secondary' onClick={() => closeSelectPanel()}>
          Hide
        </Button>
        {/*//@ts-ignore */}
        <Button variant='primary' onClick={onSelectItemsSubmit}>
          Compare
        </Button>
      </div>
    </SelectPanelStyle>
  );
};

export default SelectPanel;
