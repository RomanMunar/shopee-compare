import React, { useState } from "react";
import { AnimatedToolbar } from "../../Bookmarks/BookmarkItem/BookmarkItem.styles";
import Flex from "../../components/Flex";
import { Icon } from "../../components/Icon";
import { Select } from "../../components/Select";
import { Message } from "../../interfaces";
import {
  InputElement,
  TextAreaElement,
} from "../../Search/Compare/AddToBookmarks/AddToBookmarks.styles";
import { color } from "../../shared/styles";
import { getUserID } from "../../shared/utils/localStorage";
import {
  MessageDescription,
  MessageTitle,
  MessageWrapper,
  ReplyContainer,
  VoteContainer,
} from "./Messages.styles";
type Props = { toolbarShown: boolean };

const Messages = ({ toolbarShown }: Props) => {
  const messages: Message[] = [
    {
      type: "bug",
      createdAt: Date.now(),
      downvote: 3,
      upvote: 20,
      message: "This is a bug report",
      removed: false,
      updatedAt: null,
      userId: getUserID(),
      reply: "Yep, bug",
    },
    {
      type: "suggestion",
      createdAt: Date.now(),
      downvote: 5,
      upvote: 20,
      message: "Lessen the blue color, i think it's too much :(",
      removed: false,
      updatedAt: null,
      userId: Date.now() + 1,
    },
    {
      type: "question",
      createdAt: Date.now(),
      downvote: 5,
      upvote: 20,
      message:
        "How do you remove the add row popup when mouse's pointing in item",
      removed: false,
      updatedAt: null,
      userId: Date.now() + 2,
      reply: "Yep, it's on the preferences section in the settings page",
    },
    {
      type: "suggestion",
      createdAt: Date.now(),
      downvote: 5,
      upvote: 20,
      title: "Default layout option",
      message: "An option to change the default layout",
      removed: false,
      updatedAt: null,
      userId: Date.now() + 3,
      reply: "Yep, it's on the preferences section in the settings page",
    },
    {
      type: "suggestion",
      createdAt: Date.now(),
      downvote: 5,
      upvote: 20,
      message: "How to search actual products from shopee",
      removed: false,
      updatedAt: null,
      userId: Date.now() + 4,
    },
    {
      type: "bug",
      createdAt: Date.now(),
      downvote: 5,
      upvote: 20,
      message: "Dropping items to select panel shakes the panel",
      removed: false,
      updatedAt: null,
      userId: Date.now() + 4,
    },
  ];
  const [type, setType] = useState<"bug" | "suggestion" | "question">();
  return (
    <Flex dir='column'>
      <AnimatedToolbar showAddRow={toolbarShown}>
        {toolbarShown && (
          <div>
            <Flex gap={2} justify='space-between'>
              <InputElement
                placeholder='Title'
                id='#bookmarkTitle'
                onChange={() => ""}
              />
              <Select
                selectedOption={type}
                setSelectedOption={setType}
                title='Type'
                options={["bug", "suggestion", "question"]}
              />
            </Flex>
            <Flex gap={2} margin='0 0 15px' justify='space-between'>
              <TextAreaElement
                height='100'
                placeholder='Description'
                id='#bookmarkDescription'
                onChange={() => ""}
              />
              <button
                style={{
                  padding: "0 12px",
                  whiteSpace: "nowrap",
                  margin: "12px 0",
                  borderRadius: "5px",
                  color: "white",
                  background: color.backgroundDarkPrimary,
                }}
              >
                Add +
              </button>
            </Flex>
          </div>
        )}
      </AnimatedToolbar>
      <Flex overflow='auto' align='center' justify='flex-start' dir='column'>
        {messages.map(
          (m) =>
            !m.removed && (
              <MessageWrapper type={m.type}>
                {m.title && <MessageTitle>{m.title}</MessageTitle>}
                <MessageDescription>
                  {m.title && "— "}
                  {m.message}
                </MessageDescription>
                <VoteContainer>
                  <div>
                    <Icon type='Upvote' size={16} /> {m.upvote}
                  </div>
                  <div>
                    <Icon type='Downvote' size={16} /> {m.downvote}
                  </div>
                </VoteContainer>
                {m.reply && (
                  <ReplyContainer>
                    <div style={{ position: "absolute", left: "3px" }}>
                      <Icon type='ReplyCheck' size={16} />
                    </div>
                    {m.reply}
                  </ReplyContainer>
                )}
              </MessageWrapper>
            )
        )}
      </Flex>
    </Flex>
  );
};

export default Messages;
