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
} from "../../shared/utils/localStorage";
import { arrayToNItems, timeStamptoDate } from "../../shared/utils/utils";
import { ResultItemImage } from "../../Search/Results/ResultItemImage";
import Flex from "../../components/Flex";
import toast from "../../shared/hooks/toast";
import { getSettings } from "../../shared/utils/localStorage";
import { color } from "../../shared/styles";

interface Props {
  bookmark: BookMark;
  setSortedBookMarks: React.Dispatch<React.SetStateAction<BookMark[]>>;
  pinned: boolean;
}

const BookmarkItem = ({ pinned, bookmark, setSortedBookMarks }: Props) => {
  const newItems = arrayToNItems(bookmark.items, 3);
  const autoExpand = getSettings().action.includes("expandBookmarks");
  const [showItems, setShowItems] = useState(!autoExpand || false);
  const [removed, setRemoved] = useState(false); //Optimistic ui update
  const [toolbarShown, setToolbarShown] = useState(false);
  const [ShownRemoveWarning, setShownRemoveWarning] = useState(false);

  if (removed) {
    return <div />;
  }

  const onPinClick = () => {
    if (pinned) {
      updateBookmark(bookmark.id, { ...bookmark, pinned: false });
      setSortedBookMarks((prev) => [
        ...prev.filter((p) => p.id !== bookmark.id),
        { ...bookmark, pinned: false },
      ]);
      toast.show({
        type: "success",
        title: "Saved",
        message: "Unpinned bookmark",
      });
      return;
    }
    // Pushes the current bookmark to the top and as pinned
    setSortedBookMarks((prev) => [
      { ...bookmark, pinned: true },
      ...prev.filter((p) => p.id !== bookmark.id),
    ]);
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
      length={newItems.length * 50}
      showItems={showItems}
      onMouseEnter={() => setToolbarShown(true)}
      onMouseLeave={() => setToolbarShown(false)}
    >
      <AnimatedToolbar
        showAddRow={toolbarShown}
        style={{
          top: 0,
          display: "flex",
          right: "90px",
          position: "absolute",
        }}
      >
        <Toolbar withoutShadow withoutMargin place='default'>
          <ToolbarButton
            noTransform
            onClick={() => ""}
            tooltipPlace='bottom'
            name='Compare Items'
          >
            Compare Now +
          </ToolbarButton>
        </Toolbar>
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
      <TimeLineWrapper showItems={showItems}>
        <Circle
          onClick={() => setShowItems(!showItems)}
          showItems={showItems}
          pinned={pinned}
        />
        <Line
          onClick={() => setShowItems(!showItems)}
          showItems={showItems}
          pinned={pinned}
        />
      </TimeLineWrapper>
      <Content>
        <div style={{ display: "flex" }}>
          <div>
            <BookmarkTitle>{bookmark.title}</BookmarkTitle>
            <span>{timeStamptoDate(bookmark.id)}</span>
          </div>
          —{" "}
          <div style={{ marginRight: "20px", width: "50%" }}>
            {bookmark.description}
          </div>
        </div>
        <Items showItems={showItems}>
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
    fill={color.primary}
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
