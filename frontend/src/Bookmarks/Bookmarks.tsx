import React, { useState } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { Icon } from "../components/Icon";
import Select from "../components/Select";
import { ToolbarButton } from "../components/Toolbar";
import { Toolbar } from "../components/Toolbar/Styles";
import { getBookmarks, orderBy } from "../shared/utils/utils";
import BookmarkItem from "./BookmarkItem/BookmarkItem";
import { ContainedRoute, Title } from "./Bookmarks.styles";
const Bookmarks = () => {
  const rawBookmarks = getBookmarks();
  const sortedBookMarks = rawBookmarks
    .filter((r) => r.pinned)
    .sort((a, b) => b.id - a.id)
    .concat(rawBookmarks.filter((r) => !r.pinned).sort((a, b) => b.id - a.id));
  const [showDate, setShowDate] = useState(false);
  const [showDateDropdown, setShowDateDropdown] = useState(false);

  return (
    <Container>
      <ContainedRoute>
        <Flex dir='row'>
          <Title>Bookmarks</Title>
          <Toolbar withoutMargin place='default'>
            <Select
              DropdownOpen={showDateDropdown}
              setDropdownOpen={setShowDateDropdown}
              title='Date'
              options={["Most Recent", "This Week", "This Month", "This Year"]}
            />
            <ToolbarButton
              onClick={() => ""}
              tooltipPlace='bottom'
              name='Price'
            >
              ₱<Icon type='Sort' size={16} />
            </ToolbarButton>
            <ToolbarButton
              onClick={() => ""}
              tooltipPlace='bottom'
              name='Sales/mon'
            >
              <Icon type='Fire' size={17} />
              <Icon type='Sort' size={16} />
            </ToolbarButton>
          </Toolbar>
        </Flex>
        <div
          style={{
            width: "70%",
            marginTop: "20px",
            overflow: "auto",
            height: "90vh",
          }}
        >
          {sortedBookMarks.map((bookmark) => (
            <BookmarkItem bookmark={bookmark} />
          ))}
        </div>
      </ContainedRoute>
    </Container>
  );
};

export default Bookmarks;
