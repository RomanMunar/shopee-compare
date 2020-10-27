import React, { ReactElement, useState } from "react";
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
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import styled from "styled-components";
import { color } from "../../styles";

interface Props {
  results: SearchItem[];
}

function Results({ results }: Props): ReactElement {
  const [items, setItems] = useState(results);
  const [selecteditems, setSelecteditems] = useState<SearchItem[]>([
    {
      raw_discount: 22,
      has_lowest_price_guarantee: true,
      is_adult: true,
      itemid: 653931079621,
      name:
        "【Noise Cancelling Microphone&Headphone】New Upgrade online class headset noise cancellation mic with Dual 3.5mm port and built-in noise reduction headphones",
      adsid: 1423743,
      brand: "No Brand",
      image: "c64b792e4163a401233d483d6fe55efa",
      images: [
        "c64b792e4163a401233d483d6fe55efa",
        "d99f8b6b86a20557aa12876404ecf4c2",
        "c7de1b9bd3688d6647ed704e3d75bb44",
        "1100512d6bf48f1360801fd04a23c87a",
        "c9cd90eb2e846c2953816eeff5550c5f",
        "aff4a7ea8b9d11cb228b8dae5d577371",
        "c2cbe8b4fdfe31b5583f1943f2cef992",
        "43097c1f0bf98ce025135eb78b804a86",
        "d3469b08df904e91e17b835561dd90d9",
      ],
      item_rating: {
        rating_count: [10721, 96, 48, 203, 830, 9544],
        rating_star: 4.835977,
        rcount_with_context: 3593,
        rcount_with_image: 2228,
      },
      price_min: 54900000,
      price_max: 549200000,
      price: 54900000,
      sold: 4067,
      shopee_verified: true,
      shopid: 181860033,
      shop_location: "Overseas",
      tier_variations: [
        {
          images: [
            "558ae7630c7207f045febfd7ad92745f",
            "76ca44b377c44b505a3e5c20ed152b2d",
            "28ab2fd9eaba0c7069bbed7074526f29",
            "91aca3db6b3aa56c57f500829ec24d15",
            "2252e4de59d4026fc554051a63d3f106",
            "b576ca60a5da046de54b40e28cac3b41",
          ],
          name: "Type",
          options: [
            "Noise Reduction Mic",
            "Grey（Dual 3.5MM）",
            "Grey（Single 3.5MM)",
            "White(Dual 3.5mm）",
            "Gold(Dual 3.5mm）",
            "Gold（Single 3.5MM）",
          ],
        },
      ],
      liked_count: 7110,
    },
  ]);
  const [isShowingSelecteditems, setIsShowingSelecteditems] = useState(false);

  function onBeforeCapture() {
    setIsShowingSelecteditems(true);
  }

  const onDragEnd = function onDragEnd(result: DropResult) {
    setIsShowingSelecteditems(false);
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
        values: selecteditems,
      },
      source,
      destination,
    });

    setItems(list1.values);
    setSelecteditems(list2.values);
  };
  return (
    <DragDropContext onBeforeCapture={onBeforeCapture} onDragEnd={onDragEnd}>
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
                key={res.itemid}
                draggableId={`res-${res.itemid}`}
                index={index}
              >
                {(provided, snapshot) => (
                  <ResultItem
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}
                    draggingStyle={provided.draggableProps.style}
                  >
                    <ResultItemImage src={res.image} />
                    <ResultItemTitle
                      text={res.name.replace(/[^a-zA-Z0-9 ]/g, "")}
                    />
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
      {true && (
        //     <SelectPanel>
        //   <Title>Selected Items</Title>
        //   <Items>
        //     {results.map((res) => (
        //       <Item>{res.name.replace(/[^a-zA-Z0-9 ]/g, "")}</Item>
        //     ))}
        //   </Items>
        // </SelectPanel>
        <SelectPanel>
          <Title>Selected Items</Title>
          <Droppable droppableId='SELECTEDRESULTS' direction='horizontal'>
            {(provided, snapshot) => (
              <Items
                ref={provided.innerRef}
                isDraggingOver={snapshot.isDraggingOver}
                {...provided.droppableProps}
              >
                {selecteditems.map((res, index) => (
                  <Draggable
                    key={res.itemid}
                    draggableId={`res-${res.itemid + 1}`}
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
                        {res.name.replace(/[^a-zA-Z0-9 ]/g, "")}
                      </Item>
                    )}
                  </Draggable>
                ))}
              </Items>
            )}
          </Droppable>
        </SelectPanel>
      )}
    </DragDropContext>
  );
}

const FloatingResults = styled.div`
  background-color: ${color.backgroundLight};
  position: absolute;
  width: 100%;
  top: 100px;
  left: 600px;
`;
export default Results;
