import React, { useState } from "react";
import {
  BookmarkTitle,
  Circle,
  Content,
  Item,
  Items,
  ItemTitle,
  Line,
  Timeline,
  TimeLineWrapper,
  AnimatedToolbar,
} from "./BookmarkItem.styles";
import { ToolbarButton } from "../../components/Toolbar";
import { Toolbar } from "../../components/Toolbar/Styles";
import { Icon } from "../../components/Icon";
import { BookMark } from "../../interfaces";
import {
  updateBookmark,
  removeBookmark,
  arrayToNItems,
  getRelativeTimeFormat,
  timeStamptoDate,
} from "../../shared/utils/utils";
import { ResultItemImage } from "../../Search/Results/ResultItemImage";
import Flex from "../../components/Flex";
import toast from "../../shared/hooks/toast";

interface Props {
  bookmark: BookMark;
}

const BookmarkItem = ({ bookmark }: Props) => {
  const newItems = arrayToNItems(bookmark.items, 3);
  const [showDate, setShowDate] = useState(false);
  const [pinned, setPinned] = useState(bookmark.pinned); //Optimistic ui update
  const [removed, setRemoved] = useState(false); //Optimistic ui update
  const [toolbarShown, setToolbarShown] = useState(false); //Optimistic ui update
  const [ShownRemoveWarning, setShownRemoveWarning] = useState(false); //Optimistic ui update

  if (removed) {
    return <div />;
  }
  const onPinClick = () => {
    if (pinned || bookmark.pinned) {
      updateBookmark(bookmark.id, { ...bookmark, pinned: false });
      setPinned(false);
      toast.show({
        type: "success",
        title: "Saved",
        message: "Unpinned bookmark",
      });
      return;
    }
    setPinned(true);
    updateBookmark(bookmark.id, { ...bookmark, pinned: true });
    toast.show({
      type: "success",
      title: "Saved",
      message: "Great! Pinned bookmark",
    });
  };

  const onRemoveClick = (e: MouseEvent) => {
    if (!pinned) {
      removeBookmark(bookmark.id);
      setRemoved(true);
      toast.show({
        type: "success",
        message: "Removed bookmark",
      });
    } else if (pinned) {
      if (!(e.detail >= 2)) {
        if (ShownRemoveWarning) return;
        setShownRemoveWarning(true);
        toast.show({
          type: "warning",
          message: "Are you sure? if yes, double click the delete button",
        });
        return;
      }
      removeBookmark(bookmark.id);
      setRemoved(true);
      toast.show({
        type: "success",
        message: "Removed bookmark",
      });
    }
  };

  return (
    <Timeline
      onMouseEnter={() => setToolbarShown(true)}
      onMouseLeave={() => setToolbarShown(false)}
    >
      <AnimatedToolbar
        showAddRow={toolbarShown}
        style={{
          top: 0,
          right: "90px",
          position: "absolute",
        }}
      >
        <Toolbar withoutShadow withoutMargin place='default'>
          <ToolbarButton
            onClick={onPinClick}
            tooltipPlace='bottom'
            name={pinned ? "Unpin bookmark" : "Pin bookmark"}
          >
            <Pin size={17} />
          </ToolbarButton>
          <ToolbarButton
            onClick={(e) => onRemoveClick(e)}
            tooltipPlace='bottom'
            name='Remove Bookmark'
          >
            <Icon type='Delete' size={17} />
          </ToolbarButton>
        </Toolbar>
      </AnimatedToolbar>
      <TimeLineWrapper
        onMouseEnter={() => setShowDate(true)}
        onMouseLeave={() => setShowDate(false)}
      >
        <Circle pinned={pinned} />
        <Line pinned={pinned} />
      </TimeLineWrapper>
      <Content>
        <div>
          <BookmarkTitle>{bookmark.title}</BookmarkTitle> —{" "}
          {bookmark.description}
          <div>
            {showDate
              ? timeStamptoDate(bookmark.id)
              : getRelativeTimeFormat(bookmark.id, Date.now())}
          </div>
        </div>
        <Items>
          {newItems.map((n) => (
            <Flex margin='0 0 10px'>
              {n.map((i) => (
                <Item>
                  <ResultItemImage src={i.image} direction='left' />
                  <ItemTitle>{i.name}</ItemTitle>
                </Item>
              ))}
            </Flex>
          ))}
        </Items>
      </Content>
    </Timeline>
  );
};

const Pin = ({ size }: { size: number }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 20 20'
    fill='#2f88ff'
  >
    <path
      strokeWidth='2'
      strokeLinecap='butt'
      strokeLinejoin='round'
      stroke='#333'
      d='M11 12h6v-1l-3-1V2l3-1V0H3v1l3 1v8l-3 1v1h6v7l1 1 1-1v-7z'
    />
  </svg>
);

export default BookmarkItem;
