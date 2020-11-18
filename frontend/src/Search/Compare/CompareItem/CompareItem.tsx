import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import ReactTooltip from "react-tooltip";
import { Author } from "../../../components/Author";
import Button from "../../../components/Button";
import Flex from "../../../components/Flex";
import GridStats from "../../../components/GridStats";
import { Icon } from "../../../components/Icon";
import { Select } from "../../../components/Select";
import { ToolbarButton } from "../../../components/Toolbar";
import { Toolbar } from "../../../components/Toolbar/Styles";
import {
  Layout,
  ListItem,
  Model,
  Rating,
  SearchItem,
  Shop,
} from "../../../interfaces";
import toast from "../../../shared/hooks/toast";
import { useCopyToClipboard } from "../../../shared/hooks/useCopyToClipboard";
import { MultipleImage } from "../MultipleImage";
import { Indexes, SubImages } from "../MultipleImage/MultipleImage.styles";
import { SellerInfo } from "../SellerInfo";
import {
  CItem,
  CompareItemTitle,
  DescriptionParagraph,
  DescriptionTitle,
  PaginationWrapper,
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
  UpperpartContainer,
} from "./CompareItem.styles";
import Models from "./Models/Models";
import Tags from "./Tags";

interface Props {
  res: ListItem<SearchItem>;
  index: number;
  on: "selection" | "main";
  layout: Layout;
  selectedItems: SearchItem[];
  setSelectedItems: Dispatch<SetStateAction<SearchItem[]>>;
  setInitialSelectedItems: Dispatch<SetStateAction<ListItem<SearchItem>[]>>;
}

const CompareItem = ({
  setSelectedItems,
  selectedItems,
  layout,
  res,
  on,
  setInitialSelectedItems,
  index,
}: Props) => {
  const [isDescriptionHidden, setIsDescriptionHidden] = useState(true);
  const [isRatingsHidden] = useState(true);
  const [isRatingsSummaryHidden, setIsRatingsSummaryHidden] = useState(true);
  const [isRatingsFetched, setIsRatingsFetched] = useState(false);
  const [ratingsOption, setRatingsOption] = useState<
    "Lowest" | "Highest" | "Recent"
  >();
  const [description, setDescription] = useState();
  const [ratings, setRatings] = useState<Rating[]>([]);
  const [copied, copy] = useCopyToClipboard(
    `https://shopee.ph/${res.item.name.replace(/\s/gi, "-")}-i.${
      res.item.shopid
    }.${res.item.itemid}`
  );
  const onRemoveClick = () => {
    if (selectedItems.length <= 2 && layout === "double") {
      toast.show({
        type: "warning",
        message: "On doubled layout, you must have atleast 2 items",
        duration: 8,
      });
      return;
    }
    setSelectedItems((prev) =>
      prev.filter((item) => item.itemid !== res.item.itemid)
    );
    setInitialSelectedItems((prev) =>
      prev.filter((item) => item.item.itemid !== res.item.itemid)
    );
  };
  const [showToolbar, setShowToolbar] = useState(false);
  const [shop, setShop] = useState<Shop>();
  const [models, setModels] = useState<Model[]>();
  const [offset, setOffset] = useState(0);
  // &type=0 All
  // &type=5 5 stars only
  // &type=5 4 stars only
  //  ...
  // &filter=3 With Media
  // &filter=1 With Comments
  const [type] = useState(0);
  const [filter] = useState(0);
  useEffect(() => {
    // fetch
    if (on !== "main") return;
    // checks if we already have info we need return if yes
    // @ts-ignore
    if (description || res.item!.description) return;
    // @ts-ignore
    if (models || res.item!.models) return;
    if (shop) return;
    fetch(`/api/item/get?itemid=${res.item.itemid}&shopid=${res.item.shopid}`)
      .then((res) => res.json())
      .then((item) => {
        setModels(item.data.models);
        setDescription(item.data.description);
      });

    fetch(`/api/shop/get?shopid=${res.item.shopid}`)
      .then((res) => res.json())
      .then((shop) => setShop(shop.data));
  }, [on]);

  useEffect(() => {
    if (on !== "main") return;
    if (isRatingsFetched && offset === 0) return;
    setIsRatingsFetched(true);
    const params = new URLSearchParams({
      offset: offset.toString(),
      filter: filter.toString(),
      type: type.toString(),
      itemid: res.item.itemid.toString(),
      shopid: res.item.shopid.toString(),
      limit: "10",
    });
    fetch(`/api/item/get_ratings?${params.toString()}`)
      .then((res) => res.json())
      .then((r) => setRatings(r.data));
  }, [offset, filter, type]);

  return (
    <Draggable
      key={"draggable-ci-" + res.itemid}
      draggableId={`res-${res.itemid}`}
      index={index}
      isDragDisabled={
        (layout !== "none" && on === "main") || on !== "selection"
      }
    >
      {(provided, snapshot) => (
        <CItem
          onMouseEnter={() => setShowToolbar(true)}
          onMouseLeave={() => setShowToolbar(false)}
          layout={layout}
          key={"compare-item-" + res.itemid}
          on={on}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          {showToolbar && (
            <ToolbarWrapper>
              <Toolbar withoutMargin place='right-top'>
                <ToolbarButton tooltipPlace='bottom' name='Test' icon='Grid' />
                <ToolbarButton
                  onClick={onRemoveClick}
                  icon='Close'
                  name='Remove'
                  tooltipPlace='bottom'
                />
              </Toolbar>
            </ToolbarWrapper>
          )}
          <MultipleImage layout={layout} on={on} srcs={res.item.images} />
          <UpperpartContainer>
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
                    data-for={`clipboard-${index}`}
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
                    id={`clipboard-${index}`}
                  >
                    {copied ? "Copied !" : "Click to copy link"}
                  </ReactTooltip>
                </>
              )}
            </CompareItemTitle>
            {on === "main" && (
              <>
                {models ||
                  /*//@ts-ignore */
                  (res.item!.models && (
                    <Models
                      /*//@ts-ignore */
                      models={models || res.item!.models}
                    />
                  ))}
                <GridStats layout={layout} item={res.item} on='compare' />
                <Tags item={res.item} />
              </>
            )}
          </UpperpartContainer>
          {on === "main" && (
            <>
              {shop && (
                <SellerSection>
                  <Author
                    aveStar={shop.account.total_avg_star}
                    name={shop.name}
                    src={shop.account.portrait}
                  />
                  <SellerInfo
                    follower_count={shop.follower_count}
                    response_rate={shop.response_rate}
                    response_time={shop.response_time}
                    last_active_time={shop.last_active_time}
                  />
                </SellerSection>
              )}
              <div
                style={{
                  padding: layout === "main" ? "20px 55px" : "10px 20px",
                  width: "100%",
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
                    <DescriptionParagraph on='main'>
                      {/* @ts-ignore */}
                      {description || res.item!.description}
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
                            />
                            <span
                              style={{ marginLeft: "5px", fontSize: "13px" }}
                            >
                              {(
                                (rating /
                                  res.item.item_rating.rating_count[0]) *
                                100
                              ).toFixed(1) + "%"}
                            </span>
                          </RatingItem>
                        ))}
                    </RatingsSummary>
                  )}
                </SectionWrapper>
                <SectionWrapper>
                  <SectionTitle>
                    <DescriptionTitle>Ratings</DescriptionTitle>
                    <Select
                      selectedOption={ratingsOption}
                      setSelectedOption={setRatingsOption}
                      title='Options'
                      options={["Any", "With media", "With comment"]}
                    />
                    {/*//@ts-ignore */}
                    {/* <Button
                      variant='secondary'
                      onClick={() => setIsRatingsHidden(!isRatingsHidden)}
                    >
                      <span>{isRatingsHidden ? "Hide" : "Show"}</span>
                    </Button> */}
                  </SectionTitle>
                  <PaginationWrapper>
                    {/*//@ts-ignore */}
                    <Button
                      variant='primary'
                      onClick={() => setOffset(offset - 10)}
                    >
                      <span>Prev</span>
                    </Button>
                    <span>Show only:</span>
                    <span>
                      1<Icon type='Star' size={13} />
                    </span>
                    <span>
                      2<Icon type='Star' size={13} />
                    </span>
                    <span>
                      3<Icon type='Star' size={13} />
                    </span>
                    <span>
                      4<Icon type='Star' size={13} />
                    </span>
                    <span>
                      5<Icon type='Star' size={13} />
                    </span>
                    {/*//@ts-ignore */}
                    <Button
                      variant='primary'
                      onClick={() => setOffset(offset + 10)}
                    >
                      <span>Next</span>
                    </Button>
                  </PaginationWrapper>
                  {isRatingsHidden && (
                    <RatingsWrapper layout={layout}>
                      {ratings.map((rate) => (
                        /*                             display: "flex",
                            justifyContent: "center",
                            borderBottom: "1px solid rgba(0,0,0,0.5)",
                            padding: "20px 0", */
                        <Flex
                          style={{ minWidth: "100%" }}
                          justify='flex-start'
                          margin='10px 0'
                          borderBottom='1px solid rgba(0,0,0,0.5)'
                          dir='column'
                        >
                          <Author
                            name={rate.author_username}
                            src={rate.author_portrait}
                            aveStar={rate.rating_star}
                          />
                          <div style={{ width: "80%", marginLeft: "40px" }}>
                            <DescriptionParagraph>
                              {rate.comment}
                            </DescriptionParagraph>
                            {rate.images ? (
                              <div style={{ minHeight: "80px" }}>
                                <Indexes on='ratings'>
                                  {rate.images.map((src, index) => (
                                    <>
                                      <SubImages
                                        active={false}
                                        key={`index-${index}-of-${src}`}
                                        src={"https://cf.shopee.ph/file/" + src}
                                        data-for={`rating-img-${src}`}
                                        data-tip
                                      />
                                      <ReactTooltip
                                        className={"extraClass"}
                                        place='bottom'
                                        effect='float'
                                        arrowColor='rgba(0,0,0,0)'
                                        id={`rating-img-${src}`}
                                      >
                                        <img
                                          alt={`${rate.author_username} rating`}
                                          src={
                                            "https://cf.shopee.ph/file/" + src
                                          }
                                          style={{
                                            width: "300px",
                                            height: "300px",
                                          }}
                                        />
                                      </ReactTooltip>
                                    </>
                                  ))}
                                </Indexes>
                              </div>
                            ) : (
                              <div
                                style={{
                                  padding: "10px",
                                  border: "2px dashed #2F88FF",
                                  marginBottom: "20px",
                                }}
                              >
                                No image
                              </div>
                            )}
                          </div>
                        </Flex>
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
