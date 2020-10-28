import React, { ReactElement, useContext, useState } from "react";
import { Icon } from "../../components/Icon";
import { SearchItem } from "../../interfaces";
import {
  Badges,
  GridContainer,
  Price,
  ResultItem,
  ResultSection,
  Small,
  ResultItemTitle,
  SelectPanel,
  Item,
  Items,
  Title,
  ItemText,
} from "./Styles";
import ResultItemImage from "./ResultItemImage";
import {
  kFormatter,
  moveBetween,
  priceCompare,
  reorder,
} from "../../shared/utils/utils";
import {
  DragDropContext,
  Draggable,
  DragStart,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { SelectedItemsContext } from "../../useSelectedItemsContext";
interface Props {
  results: SearchItem[];
}

function Results({ results }: Props): ReactElement {
  const [items, setItems] = useState(results);
  const { selectedItems, setSelectedItems } = useContext(SelectedItemsContext);
  const [isSelectedDisabled, setIsSelectedDisabled] = useState(false);

  const onDragEnd = function onDragEnd(result: DropResult) {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      if (source.droppableId === "SELECTEDRESULTS") {
        setItems(reorder(items, source.index, destination.index));
      }
      // In our current UI it won't be possible to reorder trash
      return;
    }

    const { list1, list2 } = moveBetween<SearchItem>({
      list1: {
        id: "RESULTS",
        values: items,
      },
      list2: {
        id: "SELECTEDRESULTS",
        values: selectedItems,
      },
      source,
      destination,
    });

    setItems(list1.values);
    setSelectedItems(list2.values);
  };

  const onDragStart = (initial: DragStart) => {
    const { draggableId } = initial;
    if (
      selectedItems.map((item) => item.itemid).includes(parseInt(draggableId))
    ) {
      // setIsSelectedDisabled(true);
    } else {
      setIsSelectedDisabled(false);
    }
  };

  // onBeforeCapture={onBeforeCapture}
  return (
    <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <Droppable
        droppableId='RESULTS'
        isDropDisabled={true}
        direction='horizontal'
      >
        {(provided, snapshot) => (
          <ResultSection
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            {...provided.droppableProps}
          >
            {results.map((res, index) => (
              <Draggable
                isDragDisabled={selectedItems
                  .map((item) => item.itemid)
                  .includes(res.itemid)}
                key={res.itemid}
                draggableId={`${res.itemid}`}
                index={index}
              >
                {(provided, snapshot) => (
                  <ResultItem
                    selected={selectedItems
                      .map((item) => item.itemid)
                      .includes(res.itemid)}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}
                    draggingStyle={provided.draggableProps.style}
                  >
                    <ResultItemImage src={res.image} />
                    <ResultItemTitle>
                      {res.name.replace(/[^a-zA-Z0-9 ]/g, "")}
                    </ResultItemTitle>
                    <GridContainer>
                      <div>
                        <span style={{ fontSize: "0.8rem" }}>₱</span>
                        <Price>
                          {priceCompare({
                            price: res.price,
                            price_max: res.price_max,
                            price_min: res.price_min,
                          })}
                        </Price>
                      </div>
                      <div style={{ justifySelf: "end" }}>
                        {res.item_rating.rating_star.toFixed(1)}{" "}
                        <Icon
                          type='Star'
                          size={16}
                          percent={
                            res.item_rating.rating_star === 0
                              ? 0
                              : res.item_rating.rating_star * 20 - 20
                          }
                        />
                      </div>
                      <div>
                        {kFormatter(res.sold)}
                        <Small>sold/mon</Small>
                      </div>
                      <div style={{ justifySelf: "end" }}>
                        {kFormatter(res.liked_count)}
                        <Icon size={16} type='Like' />
                      </div>
                      <Badges>
                        {res.shopee_verified && (
                          <Icon size={16} type='Checkmark' />
                        )}
                        {res.is_adult && <Icon size={16} type='Fire' />}
                        {res.has_lowest_price_guarantee && (
                          <Icon size={16} type='PriceLow' />
                        )}
                        {res.raw_discount && (
                          <Icon
                            size={16}
                            type='Discount'
                            percent={res.raw_discount}
                          />
                        )}
                        {res.item_rating.rating_count[0] !== 0 && (
                          <Icon
                            size={16}
                            percent={
                              res.item_rating.rating_star === 0
                                ? 0
                                : Math.abs(
                                    ((res.item_rating.rating_count[1] +
                                      res.item_rating.rating_count[2]) /
                                      res.item_rating.rating_count[0]) *
                                      100
                                  ).toFixed(1)
                            }
                            type='LowStarsCount'
                          />
                        )}
                      </Badges>
                      {/* {res.brand !== "No Brand" && <div>{res.brand}</div>} */}
                    </GridContainer>
                  </ResultItem>
                )}
              </Draggable>
            ))}
          </ResultSection>
        )}
      </Droppable>
      <SelectPanel>
        <Title>Selected Items</Title>
        <Droppable
          droppableId='SELECTEDRESULTS'
          direction='vertical'
          isDropDisabled={isSelectedDisabled}
        >
          {(provided, snapshot) => (
            <Items
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
              {...provided.droppableProps}
            >
              {selectedItems.map((res, index) => (
                <Draggable
                  key={index}
                  draggableId={`res-${index}`}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <Item
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      isDragging={snapshot.isDragging}
                      draggingStyle={provided.draggableProps.style}
                    >
                      <ResultItemImage src={res.image} direction='left' />
                      <ItemText>
                        {res.name
                          .replace(/[^a-zA-Z0-9 ]/g, "")
                          .split("")
                          .slice(0, 40)}
                      </ItemText>
                    </Item>
                  )}
                </Draggable>
              ))}
            </Items>
          )}
        </Droppable>
      </SelectPanel>
    </DragDropContext>
  );
}

export default Results;
