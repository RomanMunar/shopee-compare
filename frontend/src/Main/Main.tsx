import React, { useState } from "react";
import styled from "styled-components";
import { BookmarkItem } from "../Bookmarks/BookmarkItem";
import { Title } from "../Bookmarks/Bookmarks.styles";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { Icon } from "../components/Icon";
import { ToolbarButton } from "../components/Toolbar";
import { getBookmarks } from "../shared/utils/localStorage";
import { Messages } from "./Messages";

const Main = () => {
  const bookmarks = getBookmarks();
  const [sortedBookMarks, setSortedBookMarks] = useState(
    bookmarks
      .filter((r) => r.pinned)
      .sort((a, b) => b.id - a.id)
      .concat(bookmarks.filter((r) => !r.pinned).sort((a, b) => b.id - a.id))
  );
  const [toolbarShown, setToolbarShown] = useState(false);

  return (
    <Container>
      <Flex style={{ height: "100vh" }}>
        <SupportWrapper>
          <Flex margin='20px 0 0' justify='space-between' dir='row'>
            <Title>Support</Title>
            <Flex align='center' justify='flex-start' dir='column'>
              <ToolbarButton
                name='Add issue'
                onClick={() => setToolbarShown(!toolbarShown)}
                tooltipPlace='bottom'
                noTransform
              >
                Click here to add an issue
                <Icon type='Plus' size={20} />
              </ToolbarButton>
            </Flex>
          </Flex>
          <Messages toolbarShown={toolbarShown} />
        </SupportWrapper>

        <RecentBookmarksWrapper>
          <Title>Recent Bookmarks</Title>
          {sortedBookMarks.map((b) => (
            <BookmarkItem
              dontShowToolbar={true}
              pinned={b.pinned}
              bookmark={b}
              setSortedBookMarks={setSortedBookMarks}
            />
          ))}
        </RecentBookmarksWrapper>
      </Flex>
    </Container>
  );
};

const SupportWrapper = styled.div`
  overflow-x: auto;
  border-right: 2px solid #ececec;
  border-left: 2px solid #ececec;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #f4f5f7;
  margin-right: 40px;
  padding: 0 20px;
  height: 100%;
  gap: 1.5%;
  width: 40%;
`;

const RecentBookmarksWrapper = styled.div`
  overflow-x: auto;
  border-left: 2px solid #ececec;
  border-right: 2px solid #ececec;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #f4f5f7;
  margin-right: 40px;
  padding: 20px 35px;
  height: 100%;
  gap: 1.5%;
  /* width: 55%; */
`;

export default Main;
