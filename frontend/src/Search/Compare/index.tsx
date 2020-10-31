import React, { useContext, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import styled from "styled-components";
import Button from "../../components/Button";
import GridStats from "../../components/GridStats";
import { Icon } from "../../components/Icon";
import Select from "../../components/Select";
import { reorder } from "../../shared/utils/utils";
import { color, font, mixin, shadows } from "../../styles";
import { SelectedItemsContext } from "../../useSelectedItemsContext";
import { MultipleImage } from "./MultipleImage";
import { ratings } from "./ratings";
import Tags from "./Tags";

type Layout = "single" | "double" | "none";

export default () => {
  const { selectedItems, setSelectedItems } = useContext(SelectedItemsContext);
  const [layout, setLayout] = useState<Layout>("single");
  const [isDescriptionHidden, setIsDescriptionHidden] = useState(false);
  const [isRatingsHidden, setIsRatingsHidden] = useState(true);
  const [ratingsDropdownOpen, setRatingsDropdownOpen] = useState(false);
  const shop = {
    account: {
      portrait: "b07ac6d8449d4f84abb1ba58d9371759",
      total_avg_star: 4.893882,
    },
    name: "PIDO YOGA",
    follower_count: 35344,
    response_rate: 100,
    response_time: 166,
  };
  const { data } = ratings;

  const onDragEnd = (result: DropResult) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const newItems = reorder(
      selectedItems,
      result.source.index,
      result.destination.index
    );

    setSelectedItems(newItems);
  };
  return selectedItems.length !== 0 ? (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='droppable' direction='horizontal'>
        {(provided, snapshot) => (
          <Compare
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            {...provided.droppableProps}
          >
            {selectedItems.map((res, index) => (
              <Draggable
                key={res.itemid}
                draggableId={`res-${res.itemid}`}
                index={index}
              >
                {(provided, snapshot) => (
                  <CompareItem
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}
                    draggingStyle={provided.draggableProps.style}
                  >
                    <MultipleImage srcs={res.images} />
                    <CompareItemTitle>
                      {res.name
                        .replace(/[^a-zA-Z0-9 ]/g, "")
                        .split(" ")
                        .map((word) => (word.length > 10 ? "" : word + " "))}
                    </CompareItemTitle>
                    <GridStats item={res} on='compare' />
                    <Tags item={res} />
                    <SectionWrapper>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          width: "max-content",
                          margin: "auto",
                        }}
                      >
                        <AuthorImage src={"https://cf.shopee.ph/file/"+shop.account.portrait} />
                        <div>
                          <div>
                            {shop.account.total_avg_star.toFixed(1)}{" "}
                            <Icon type='Star' size={12} />
                          </div>
                      <span>-{shop.name}</span>
                        </div>
                      </div>
                    </SectionWrapper>
                    <SectionWrapper>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <DescriptionTitle>Description</DescriptionTitle>
                        {/*//@ts-ignore */}
                        <Button
                          variant='secondary'
                          onClick={() =>
                            setIsDescriptionHidden(!isDescriptionHidden)
                          }
                        >
                          {isDescriptionHidden ? (
                            <span>Hide</span>
                          ) : (
                            <span>Show</span>
                          )}
                        </Button>
                      </div>
                      {isDescriptionHidden && (
                        <DescriptionParagraph>
                          {"\u3010Noise Cancelling Microphone&Headphone\u3011New Upgrade online class headset noise cancellation mic with Dual \n  3.5mm port and built-in noise reduction headphones\n                                  ************ Focus on online class use\uff0ckeep to upgrade*********\n    \n   -----------------------------------------------------\n  New Upgrade(Noise Reduction Mic):\n  -----------------------------------------------------\n  \u2605\u2605\u2605 Noise Cancellation Mic \u2605\u2605\u2605\n   -----------------------------------------------------\n  \u2605\u2605\u2605 Mic And Voice Volume Wire Control \u2605\u2605\u2605\n\nTips:\n\u2606Noise Reduction Mic \u2606----------Noise Cancellation Mic+Mic And Voice Volume Wire Control+Free splitter cable\n\u2606Grey\uff08Dual 3.5MM\uff09\u2606-----------Use for Computer. No have Mic and Voice Volume Control on the Headset Wire\n\u2606Gold(Dual 3.5mm\uff09\u2606-----------Use for Computer. No have Mic and Voice Volume Control on the Headset Wire\n\u2606White(Dual 3.5mm\uff09\u2606-----------Use for Computer. No have Mic and Voice Volume Control on the Headset Wire\n\n\u2606Grey\uff08Single 3.5MM\uff09\u2606-----------Use for Laptop and Mobile Phone. No have Mic and Voice Volume Control on the Headset Wire\n\u2606Gold\uff08Single 3.5MM\uff09\u2606-----------Use for Laptop and Mobile Phone. No have Mic and Voice Volume Control on the Headset Wire\n\n\n      Please buy from Us. Because:\n   1>We are only one Official Authorized dealer in Shopee. \n   2>Only us have the After-sale service.\n   3>Only us have stock\n\n\n   \u3010Ready Stock\u3011\n     \ud83d\udc4d100% brand new and high quality\n\n   1>Type\uff1a3.5MM Jack Port\n   2>Length\uff1a1.8M      weight: 270g\n   3>Color:Grey/Gold/White\n   4>Line quilt Material: Nylon Braided\n\n    Design\uff1aComfortable to wear\n    \ud83d\udc4dFast Shipment: Send out within 2 days!!\n\n     Package\uff1a\n    \ud83d\udc4dHave retail package\n\n\n   \ud83d\udc96If you like our store ,please follow our store to get more discount in the future!!\ud83d\udc96\n   \ud83c\udf81To be our follower,get surprise now!!!\ud83c\udf81\n\n\n#headphone #headphones #headset #online classes #online class #business #business headset #Business headset"
                            .replace(/[^\x00-\x7F]/g, "")
                            .replace(/\\n|\\r\\n|\\n\\r|\\r/g, " ")}
                        </DescriptionParagraph>
                      )}
                    </SectionWrapper>
                    <RatingsSummary>
                      {res.item_rating.rating_count
                        .slice(1)
                        .map((rating, index) => (
                          <RatingItem style={{ display: "flex" }}>
                            <RatingCount>
                              {5 - index}
                              <Icon type='Star' size={16} />
                            </RatingCount>
                            <RatingBar
                              percent={
                                (res.item_rating.rating_count[index] /
                                  res.item_rating.rating_count[0]) *
                                100
                              }
                            ></RatingBar>
                          </RatingItem>
                        ))}
                    </RatingsSummary>
                    <SectionWrapper>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <DescriptionTitle>Ratings</DescriptionTitle>
                        {/*//@ts-ignore */}
                        <Button
                          variant='secondary'
                          onClick={() => setIsRatingsHidden(!isRatingsHidden)}
                        >
                          {isRatingsHidden ? (
                            <span>Hide</span>
                          ) : (
                            <span>Show</span>
                          )}
                        </Button>
                        <Select
                          DropdownOpen={ratingsDropdownOpen}
                          setDropdownOpen={setRatingsDropdownOpen}
                          title='Sort By'
                          options={["Lowest", "Highest", "Recent"]}
                        />
                      </div>
                      {isRatingsHidden && (
                        <div>
                          <div
                            style={{
                              width: "60%",
                              borderRadius: "10px",
                              overflow: "hidden",
                              margin: "10px auto ",
                            }}
                          >
                            <MultipleImage
                              srcs={[
                                "663c0665ecd4d9dc80d78e9130f21d47",
                                "780749423db8f5ce3ccbcf3b8c859702",
                                "7b7e62d34a4c3ac046737564252a652e",
                              ]}
                            />
                          </div>
                          <DescriptionParagraph>
                            {"• average sounds with good quality microphone\n• long wire for single connector (2m)\n• not zero cancelling but noise reduction \n• well packaged (box, plastic foam, plastic) \n• working properly (tested already)\nPS. CHECK THE VOLUME ON THE LEFT SIDE.\n\nRECOMMENDED! WORTH THE PRICE!"
                              .replace(/[^\x00-\x7F]/g, "")
                              .replace(/\\n|\\r\\n|\\n\\r|\\r/g, " ")}
                          </DescriptionParagraph>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              width: "max-content",
                              margin: "auto",
                            }}
                          >
                            <AuthorImage src='https://cf.shopee.ph/file/17ecb7da7687475a52f4b9d730c6d9b9' />
                            <div>
                              <div>
                                {res.item_rating.rating_star.toFixed(1)}{" "}
                                <Icon type='Star' size={12} />
                              </div>
                              <span>-a*******u</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </SectionWrapper>
                  </CompareItem>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Compare>
        )}
      </Droppable>
    </DragDropContext>
  ) : (
    <EmptyContainer>
      <Title>Hey Search</Title> Search Some items then drag them in this area so
      I can render them
    </EmptyContainer>
  );
};
const Title = styled.span`
  display: block;
  font-size: 24px;
  ${font.bold}
  margin-bottom: 10px;
`;

const Compare = styled.div<{ isDraggingOver: boolean }>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5%;
  padding: 20px;
  position: absolute;
  width: 93%;
  height: 95vh;
  bottom: 15px;
  border-radius: 15px;
  background-color: ${(props) =>
    props.isDraggingOver ? color.backgroundLight : color.backgroundMedium};
`;

const EmptyContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 25%;
  top: 25vh;
  left: 30vw;
  border: 5px dashed rgba(51, 51, 51, 0.6);
`;

const CompareItem = styled.div<{ draggingStyle: any; isDragging: boolean }>`
  display: flex;
  ${mixin.scrollableX}
  ${mixin.customScrollbar()}
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  ${(props) => (props.isDragging ? shadows.shadow2Xl : shadows.shadowMd)};
  ${(props) => props.draggingStyle}
  background-color: ${(props) =>
    props.isDragging ? "#fef3ab" : color.backgroundLight};
`;

const CompareItemTitle = styled.div`
  margin-top: 15px;
  width: 95%;
  padding-right: 0.3rem;
  padding-left: 0.3rem;
`;
const DescriptionTitle = styled.span`
  ${font.bold}
  font-size:20px;
`;

const DescriptionParagraph = styled.p`
  flex-grow: 1;
  font-size: 14px;
  margin: 8px 0;
  padding-right: 0.3rem;
  padding-left: 0.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;
const AuthorImage = styled.img`
  border-radius: 50%;
  width: 40px;
  margin-right: 5px;
`;
const RatingsSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
  margin: 10px 0;
`;

const RatingItem = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  margin: 5px 0;
`;
const RatingBar = styled.div<{ percent: number }>`
  width: ${(props) => `${props.percent}%`};
  background-color: #f6c84c;
  border-radius: 4px;
  margin-left: 8px;
`;
const RatingCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  align-items: center;
  margin-top: 15px;
`;
