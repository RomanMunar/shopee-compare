import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import Button from "../../components/Button";
import { Icon } from "../../components/Icon";
import { ToolbarButton } from "../../components/Toolbar/index";
import { Toolbar } from "../../components/Toolbar/Styles";
import { ListItem, SearchItem } from "../../interfaces";
import { useUI } from "../../shared/contexts/useUIContext";
import { ResultItemImage } from "../Results/ResultItemImage";
import {
  Item,
  Items,
  ItemText,
  MenuWrapper,
  SelectPanel as SPanel,
  Title,
} from "./SelectPanel.styles";

type Props = {
  onSelectItemsSubmit: () => void;
  initialSelectedItems: ListItem<SearchItem>[];
  setInitialSelectedItems: React.Dispatch<
    React.SetStateAction<ListItem<SearchItem>[]>
  >;
};

const SelectPanel = ({
  setInitialSelectedItems,
  initialSelectedItems,
  onSelectItemsSubmit,
}: Props) => {
  const {
    openSearchPanel,
    closeSelectPanel,
    displaySelectPanel,
    maximizeSearchPanel,
  } = useUI();
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  return (
    <SPanel isSelectPanelOpen={displaySelectPanel}>
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
            {initialSelectedItems.map(({ item }, index) => (
              <Item
                key={`initialItem-${item.itemid}`}
                onMouseEnter={() => setShowCloseIcon(true)}
                onMouseLeave={() => setShowCloseIcon(false)}
              >
                {showCloseIcon && (
                  <div
                    onClick={() => {
                      setInitialSelectedItems((prev) =>
                        prev.filter((res) => item.itemid !== res.item.itemid)
                      );
                    }}
                    style={{ position: "absolute", right: 0, top: "5px" }}
                  >
                    <Icon type='Delete' size={13} />
                  </div>
                )}
                <ResultItemImage src={item.image} direction='left' />
                <ItemText>
                  {item.name
                    .replace(/[^a-zA-Z0-9 ]/g, "")
                    .split("")
                    .slice(0, 50)}
                  ...
                </ItemText>
              </Item>
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
    </SPanel>
  );
};

export default SelectPanel;
