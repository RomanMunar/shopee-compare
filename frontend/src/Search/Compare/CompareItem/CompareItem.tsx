import React, { Dispatch, SetStateAction, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import ReactTooltip from "react-tooltip";
import { Author } from "../../../components/Author";
import Button from "../../../components/Button";
import Flex from "../../../components/Flex";
import GridStats from "../../../components/GridStats";
import { Icon } from "../../../components/Icon";
import Select from "../../../components/Select";
import { ToolbarButton } from "../../../components/Toolbar";
import { Toolbar } from "../../../components/Toolbar/Styles";
import { Layout, ListItem, SearchItem } from "../../../interfaces";
import { useCopyToClipboard } from "../../../shared/hooks/useCopyToClipboard";
import { MultipleImage } from "../MultipleImage";
import { SellerInfo } from "../SellerInfo";
import {
  CItem,
  CompareItemTitle,
  DescriptionParagraph,
  DescriptionTitle,
  RatingBar,
  RatingCount,
  RatingItem,
  RatingsSummary,
  RatingsWrapper,
  SectionTitle,
  SectionWrapper,
  SellerSection,
  Title,
  ToolbarWrapper,
} from "./CompareItem.styles";
import Tags from "./Tags";

interface Props {
  res: ListItem<SearchItem>;
  index: number;
  on: "selection" | "main";
  layout: Layout;
  setSelectedItems: Dispatch<SetStateAction<SearchItem[]>>;
  setInitialSelectedItems: Dispatch<SetStateAction<ListItem<SearchItem>[]>>;
}

const CompareItem = ({
  setSelectedItems,
  layout,
  res,
  index,
  on,
  setInitialSelectedItems,
}: Props) => {
  const [isDescriptionHidden, setIsDescriptionHidden] = useState(true);
  const [isRatingsHidden, setIsRatingsHidden] = useState(true);
  const [isRatingsSummaryHidden, setIsRatingsSummaryHidden] = useState(true);
  const [ratingsDropdownOpen, setRatingsDropdownOpen] = useState(false);
  const str =
    "\u3010Noise Cancelling Microphone&Headphone\u3011New Upgrade online class headset noise cancellation mic with Dual \n  3.5mm port and built-in noise reduction headphones\n                                  ************ Focus on online class use\uff0ckeep to upgrade*********\n    \n   -----------------------------------------------------\n  New Upgrade(Noise Reduction Mic):\n  -----------------------------------------------------\n  \u2605\u2605\u2605 Noise Cancellation Mic \u2605\u2605\u2605\n   -----------------------------------------------------\n  \u2605\u2605\u2605 Mic And Voice Volume Wire Control \u2605\u2605\u2605\n\nTips:\n\u2606Noise Reduction Mic \u2606----------Noise Cancellation Mic+Mic And Voice Volume Wire Control+Free splitter cable\n\u2606Grey\uff08Dual 3.5MM\uff09\u2606-----------Use for Computer. No have Mic and Voice Volume Control on the Headset Wire\n\u2606Gold(Dual 3.5mm\uff09\u2606-----------Use for Computer. No have Mic and Voice Volume Control on the Headset Wire\n\u2606White(Dual 3.5mm\uff09\u2606-----------Use for Computer. No have Mic and Voice Volume Control on the Headset Wire\n\n\u2606Grey\uff08Single 3.5MM\uff09\u2606-----------Use for Laptop and Mobile Phone. No have Mic and Voice Volume Control on the Headset Wire\n\u2606Gold\uff08Single 3.5MM\uff09\u2606-----------Use for Laptop and Mobile Phone. No have Mic and Voice Volume Control on the Headset Wire\n\n\n      Please buy from Us. Because:\n   1>We are only one Official Authorized dealer in Shopee. \n   2>Only us have the After-sale service.\n   3>Only us have stock\n\n\n   \u3010Ready Stock\u3011\n     \ud83d\udc4d100% brand new and high quality\n\n   1>Type\uff1a3.5MM Jack Port\n   2>Length\uff1a1.8M      weight: 270g\n   3>Color:Grey/Gold/White\n   4>Line quilt Material: Nylon Braided\n\n    Design\uff1aComfortable to wear\n    \ud83d\udc4dFast Shipment: Send out within 2 days!!\n\n     Package\uff1a\n    \ud83d\udc4dHave retail package\n\n\n   \ud83d\udc96If you like our store ,please follow our store to get more discount in the future!!\ud83d\udc96\n   \ud83c\udf81To be our follower,get surprise now!!!\ud83c\udf81\n\n\n#headphone #headphones #headset #online classes #online class #business #business headset #Business headset";

  const [copied, copy] = useCopyToClipboard("Lorem ipsum");

  return (
    <Draggable
      key={"draggable-ci-" + res.itemid}
      draggableId={`res-${res.itemid}`}
      index={index}
      isDragDisabled={on === "main"}
    >
      {(provided, snapshot) => (
        <CItem
          layout={layout}
          key={"compare-item-" + res.itemid}
          on={on}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          <ToolbarWrapper>
            <Toolbar withoutMargin place='right-top'>
              <ToolbarButton tooltipPlace='bottom' name='Test' icon='Grid' />
              <ToolbarButton
                onClick={() => {
                  setSelectedItems((prev) =>
                    prev.filter((item) => item.itemid !== res.item.itemid)
                  );
                  setInitialSelectedItems((prev) =>
                    prev.filter((item) => item.item.itemid !== res.item.itemid)
                  );
                }}
                icon='Close'
                name='Remove'
                tooltipPlace='bottom'
              />
            </Toolbar>
          </ToolbarWrapper>
          <MultipleImage layout={layout} on={on} srcs={res.item.images} />
          <CompareItemTitle on={on} layout={layout}>
            <Title>
              {res.item.name
                .replace(/[^a-zA-Z0-9 ]/g, "")
                .split(" ")
                .map((word) => (word.length > 10 ? "" : word + " "))}
            </Title>
            {on === "main" && (
              <>
                <div
                  onClick={() => {
                    if (typeof copy === "boolean") {
                      return copy;
                    } else {
                      return copy();
                    }
                  }}
                  style={{ minWidth: "20px" }}
                  data-for='clipboard'
                  data-tip
                >
                  <Icon type='Clipboard' size={18} />
                </div>
                <ReactTooltip
                  className={"extraClass"}
                  place='bottom'
                  type={"success"}
                  effect='float'
                  arrowColor='rgba(0,0,0,0)'
                  id='clipboard'
                >
                  {copied ? "Copied !" : "Click to copy link"}
                </ReactTooltip>
              </>
            )}
          </CompareItemTitle>
          {on === "main" && (
            <>
              <GridStats layout={layout} item={res.item} on='compare' />
              <Tags item={res.item} />
              <SellerSection>
                <Author />
                <SellerInfo />
              </SellerSection>
              <div
                style={{
                  padding: layout === "main" ? "20px 55px" : "10px 20px",
                }}
              >
                <SectionWrapper>
                  <SectionTitle>
                    <DescriptionTitle>Description</DescriptionTitle>
                    {/*//@ts-ignore */}
                    <Button
                      variant='secondary'
                      onClick={() =>
                        setIsDescriptionHidden(!isDescriptionHidden)
                      }
                    >
                      <span>{isDescriptionHidden ? "Hide" : "Show"}</span>
                    </Button>
                  </SectionTitle>
                  {isDescriptionHidden && (
                    <DescriptionParagraph on='main'>{str}</DescriptionParagraph>
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
                      <span>{isRatingsSummaryHidden ? "Hide" : "Show"}</span>
                    </Button>
                  </SectionTitle>

                  {isRatingsSummaryHidden && (
                    <RatingsSummary>
                      {res.item.item_rating.rating_count
                        .slice(1)
                        .map((rating, index) => (
                          <RatingItem
                            key={`${5 - index}-rating of${res.item.itemid}`}
                            style={{ display: "flex" }}
                          >
                            <RatingCount>
                              {index + 1}
                              <Icon type='Star' size={16} />
                            </RatingCount>
                            <RatingBar
                              percent={
                                (rating /
                                  res.item.item_rating.rating_count[0]) *
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
                    <Select
                      DropdownOpen={ratingsDropdownOpen}
                      setDropdownOpen={setRatingsDropdownOpen}
                      title='Sort By'
                      options={["Lowest", "Highest", "Recent"]}
                    />
                    <span>Ratings 1-10</span>
                  </SectionTitle>
                  {isRatingsHidden && (
                    <RatingsWrapper layout={layout}>
                      {[0, 0, 0].map((_) => (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            borderBottom: "1px solid rgba(0,0,0,0.5)",
                            padding: "20px 0",
                          }}
                        >
                          <Flex dir='column'>
                            <Author />
                            <div style={{ width: "80%", marginLeft: "40px" }}>
                              <DescriptionParagraph>
                                {
                                  "• average sounds with good quality microphone\n• long wire for single connector (2m)\n• not zero cancelling but noise reduction \n• well packaged (box, plastic foam, plastic) \n• working properly (tested already)\nPS. CHECK THE VOLUME ON THE LEFT SIDE.\n\nRECOMMENDED! WORTH THE PRICE!"
                                }
                              </DescriptionParagraph>
                              <MultipleImage
                                layout={layout}
                                on={on}
                                srcs={[
                                  "663c0665ecd4d9dc80d78e9130f21d47",
                                  "780749423db8f5ce3ccbcf3b8c859702",
                                  "7b7e62d34a4c3ac046737564252a652e",
                                ]}
                              />
                            </div>
                          </Flex>
                        </div>
                      ))}
                    </RatingsWrapper>
                  )}
                </SectionWrapper>
              </div>
            </>
          )}
        </CItem>
      )}
    </Draggable>
  );
};

export default CompareItem;
