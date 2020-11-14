import React, { useState } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { Select } from "../components/Select";
import { Toolbar } from "../components/Toolbar/Styles";
import { getBookmarks } from "../shared/utils/localStorage";
import BookmarkItem from "./BookmarkItem/BookmarkItem";
import { ContainedRoute, Title } from "./Bookmarks.styles";
const Bookmarks = () => {
  const rawBookmarks = getBookmarks();
  const [sortedBookMarks, setSortedBookMarks] = useState(
    rawBookmarks
      .filter((r) => r.pinned)
      .sort((a, b) => b.id - a.id)
      .concat(rawBookmarks.filter((r) => !r.pinned).sort((a, b) => b.id - a.id))
  );
  const [dateOption, setDateOption] = useState<
    ["Most Recent" | "This Week" | "This Month" | "This Year"]
  >();

  return (
    <Container>
      <ContainedRoute>
        <Flex dir='row'>
          <Title>Bookmarks</Title>
          <Toolbar withoutMargin place='default'>
            <Select
              selectedOption={dateOption}
              setSelectedOption={setDateOption}
              options={["Most Recent", "This Week", "This Month", "This Year"]}
            />
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
            <BookmarkItem
              pinned={bookmark.pinned}
              setSortedBookMarks={setSortedBookMarks}
              bookmark={bookmark}
            />
          ))}
        </div>
      </ContainedRoute>
    </Container>
  );
};

export default Bookmarks;
