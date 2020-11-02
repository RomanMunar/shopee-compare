import { SelectedItemsContext } from "../../shared/hooks/useSelectedItemsContext";
import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import GridStats from "../../components/GridStats";
import Button from "../../components/Button";
import Select from "../../components/Select";
import { Icon } from "../../components/Icon";
import { SearchItem } from "../../interfaces";
import { MultipleImage } from "./MultipleImage";
import {
  AuthorImage,
  AuthorWrapper,
  CompareItem as CItem,
  CompareItemTitle,
  DescriptionParagraph,
  DescriptionTitle,
  RatingBar,
  RatingCount,
  RatingItem,
  RatingsSummary,
  SectionTitle,
  SectionWrapper,
} from "./Styles";
import Tags from "./Tags";
import { getRelativeTimeFormat } from "../../shared/utils/utils";
import { Toolbar } from "../../components/Toolbar/Styles";
import { ToolbarButton } from "../../components/Toolbar";

interface Props {
  res: SearchItem;
  index: number;
  on: "selection" | "main";
}

const CompareItem = ({ res, index, on }: Props) => {
  const { selectedItems, setSelectedItems } = useContext(SelectedItemsContext);
  const [isDescriptionHidden, setIsDescriptionHidden] = useState(true);
  const [isRatingsHidden, setIsRatingsHidden] = useState(true);
  const [isRatingsSummaryHidden, setIsRatingsSummaryHidden] = useState(true);
  const [ratingsDropdownOpen, setRatingsDropdownOpen] = useState(false);
  const responseTime = (ms: number) => {
    const minute = Math.round(ms / 60);
    const hour = minute * 60;
    if (minute < 60) return "within " + minute + " minutes";
    if (minute > 60) return "within " + Math.round(ms / 3600) + " hour";
    if (minute < 1) return "within seconds";
    if (hour > 24) return "inactive";
  };

  const shop = {
    account: {
      portrait: "b07ac6d8449d4f84abb1ba58d9371759",
      total_avg_star: 4.893882,
    },
    name: "PIDO YOGA",
    follower_count: 35344,
    response_rate: 100,
    response_time: 166,
    last_active_time: 1602848596,
  };

  const onClick = () => console.log("clicked");

  return (
    <Draggable key={res.itemid} draggableId={`res-${res.itemid}`} index={index}>
      {(provided, snapshot) => (
        <CItem
          on={on}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
          draggingStyle={provided.draggableProps.style}
        >
          <div
            style={{
              zIndex: 10,
              position: "absolute",
              right: "20px",
              top: "20px",
            }}
          >
            <Toolbar withoutMargin place='right-top'>
              <ToolbarButton
                tooltipPlace='bottom'
                onClick={onClick}
                name='Test'
                icon='Grid'
              />
              <ToolbarButton
                onClick={() =>
                  setSelectedItems(selectedItems.filter((item) => item.itemid !== res.itemid))}
                icon='Close'
                name='Close'
                tooltipPlace='bottom'
              />
            </Toolbar>
          </div>
          <MultipleImage srcs={res.images} />
          <CompareItemTitle>
            {res.name
              .replace(/[^a-zA-Z0-9 ]/g, "")
              .split(" ")
              .map((word) => (word.length > 10 ? "" : word + " "))}
          </CompareItemTitle>
          {on === "main" && (
            <>
              <GridStats item={res} on='compare' />
              <Tags item={res} />
              <SellerSection>
                <AuthorWrapper>
                  <AuthorImage
                    src={"https://cf.shopee.ph/file/" + shop.account.portrait}
                  />
                  <div>
                    <div>
                      {shop.account.total_avg_star.toFixed(1)}{" "}
                      <Icon type='Star' size={12} />
                    </div>
                    <span>-{shop.name}</span>
                  </div>
                </AuthorWrapper>
                <GridCompare>
                  <div>
                    <div>Followers</div>
                    <span
                      style={{ color: "#2F88FF", fontFamily: "Roboto-Bold" }}
                    >
                      {shop.follower_count}
                    </span>
                  </div>

                  <div>
                    <div>Active</div>
                    <span
                      style={{ color: "#2F88FF", fontFamily: "Roboto-Bold" }}
                    >
                      {getRelativeTimeFormat(
                        new Date(),
                        new Date(shop.last_active_time * 1000)
                      )}
                    </span>
                  </div>
                  <div>
                    <div>Responds</div>
                    <span
                      style={{ color: "#2F88FF", fontFamily: "Roboto-Bold" }}
                    >
                      {shop.response_rate}%
                    </span>
                  </div>
                  <div>
                    <div>Replies</div>
                    <span
                      style={{ color: "#2F88FF", fontFamily: "Roboto-Bold" }}
                    >
                      {responseTime(shop.response_time)}
                    </span>
                  </div>
                </GridCompare>
              </SellerSection>
              <SectionWrapper>
                <SectionTitle>
                  <DescriptionTitle>Description</DescriptionTitle>
                  {/*//@ts-ignore */}
                  <Button
                    variant='secondary'
                    onClick={() => setIsDescriptionHidden(!isDescriptionHidden)}
                  >
                    {isDescriptionHidden ? (
                      <span>Hide</span>
                    ) : (
                      <span>Show</span>
                    )}
                  </Button>
                </SectionTitle>
                {isDescriptionHidden && (
                  <DescriptionParagraph>
                    {"\u3010Noise Cancelling Microphone&Headphone\u3011New Upgrade online class headset noise cancellation mic with Dual \n  3.5mm port and built-in noise reduction headphones\n                                  ************ Focus on online class use\uff0ckeep to upgrade*********\n    \n   -----------------------------------------------------\n  New Upgrade(Noise Reduction Mic):\n  -----------------------------------------------------\n  \u2605\u2605\u2605 Noise Cancellation Mic \u2605\u2605\u2605\n   -----------------------------------------------------\n  \u2605\u2605\u2605 Mic And Voice Volume Wire Control \u2605\u2605\u2605\n\nTips:\n\u2606Noise Reduction Mic \u2606----------Noise Cancellation Mic+Mic And Voice Volume Wire Control+Free splitter cable\n\u2606Grey\uff08Dual 3.5MM\uff09\u2606-----------Use for Computer. No have Mic and Voice Volume Control on the Headset Wire\n\u2606Gold(Dual 3.5mm\uff09\u2606-----------Use for Computer. No have Mic and Voice Volume Control on the Headset Wire\n\u2606White(Dual 3.5mm\uff09\u2606-----------Use for Computer. No have Mic and Voice Volume Control on the Headset Wire\n\n\u2606Grey\uff08Single 3.5MM\uff09\u2606-----------Use for Laptop and Mobile Phone. No have Mic and Voice Volume Control on the Headset Wire\n\u2606Gold\uff08Single 3.5MM\uff09\u2606-----------Use for Laptop and Mobile Phone. No have Mic and Voice Volume Control on the Headset Wire\n\n\n      Please buy from Us. Because:\n   1>We are only one Official Authorized dealer in Shopee. \n   2>Only us have the After-sale service.\n   3>Only us have stock\n\n\n   \u3010Ready Stock\u3011\n     \ud83d\udc4d100% brand new and high quality\n\n   1>Type\uff1a3.5MM Jack Port\n   2>Length\uff1a1.8M      weight: 270g\n   3>Color:Grey/Gold/White\n   4>Line quilt Material: Nylon Braided\n\n    Design\uff1aComfortable to wear\n    \ud83d\udc4dFast Shipment: Send out within 2 days!!\n\n     Package\uff1a\n    \ud83d\udc4dHave retail package\n\n\n   \ud83d\udc96If you like our store ,please follow our store to get more discount in the future!!\ud83d\udc96\n   \ud83c\udf81To be our follower,get surprise now!!!\ud83c\udf81\n\n\n#headphone #headphones #headset #online classes #online class #business #business headset #Business headset"
                      .replace(/[^\x00-\x7F]/g, "")
                      .replace(/\\n|\\r\\n|\\n\\r|\\r/g, " ")}
                  </DescriptionParagraph>
                )}
              </SectionWrapper>
              <SectionWrapper>
                <SectionTitle>
                  <DescriptionTitle>Ratings Summary</DescriptionTitle>
                  {/*//@ts-ignore */}
                  <Button
                    variant='secondary'
                    onClick={() =>
                      setIsRatingsSummaryHidden(!isRatingsSummaryHidden)
                    }
                  >
                    {isRatingsSummaryHidden ? (
                      <span>Hide</span>
                    ) : (
                      <span>Show</span>
                    )}
                  </Button>
                </SectionTitle>

                {isRatingsSummaryHidden && (
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
                )}
              </SectionWrapper>
              <SectionWrapper>
                <SectionTitle>
                  <DescriptionTitle>Ratings</DescriptionTitle>
                  {/*//@ts-ignore */}
                  <Button
                    variant='secondary'
                    onClick={() => setIsRatingsHidden(!isRatingsHidden)}
                  >
                    <span>{isRatingsHidden ? "Hide" : "Show"}</span>
                  </Button>
                </SectionTitle>
                <SectionTitle>
                  <span>Ratings 1-10</span>
                  <Select
                    DropdownOpen={ratingsDropdownOpen}
                    setDropdownOpen={setRatingsDropdownOpen}
                    title='Sort By'
                    options={["Lowest", "Highest", "Recent"]}
                  />
                </SectionTitle>
                {isRatingsHidden && (
                  <div>
                    <div>
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
                    <AuthorWrapper>
                      <AuthorImage src='https://cf.shopee.ph/file/17ecb7da7687475a52f4b9d730c6d9b9' />
                      <div>
                        <div>
                          {res.item_rating.rating_star.toFixed(1)}{" "}
                          <Icon type='Star' size={12} />
                        </div>
                        <span>-a*******u</span>
                      </div>
                    </AuthorWrapper>
                  </div>
                )}
              </SectionWrapper>
            </>
          )}
        </CItem>
      )}
    </Draggable>
  );
};

const SellerSection = styled.div`
  background-color: rgba(193, 199, 208, 0.6);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
  margin-top: 20px;
`;

const GridCompare = styled.div`
  margin: 10px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 5px;
  font-size: 13px;
`;

export default CompareItem;
