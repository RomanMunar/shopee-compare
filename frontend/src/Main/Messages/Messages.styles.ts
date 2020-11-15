import styled from "styled-components";
import { color, font } from "../../shared/styles";
export {
  MessageWrapper,
  MessageTitle,
  MessageDescription,
  VoteContainer,
  ReplyContainer,
};

const MessageWrapper = styled.div<{ type: "bug" | "suggestion" | "question" }>`
  flex-direction: column;
  border: 2px solid
    ${(props) =>
      props.type === "bug"
        ? color.danger
        : props.type === "suggestion"
        ? color.warning
        : color.primary};
  background: ${(props) =>
    props.type === "bug"
      ? "#ffe5e86b"
      : props.type === "suggestion"
      ? "#fffbbd6b"
      : "#d8dcff6b"};
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  padding: 5px;
  width: 70%;
  position: relative;
`;

const MessageTitle = styled.div`
  ${font.medium}
`;

const MessageDescription = styled.div``;

const VoteContainer = styled.div`
  position: absolute;
  margin-left: -50px;
`;

const ReplyContainer = styled.div`
  align-self: flex-end;
  margin-right: 10px;
  background: #d2f5ce;
  border: 2px solid #52bb6f;
  padding: 1px 4px 1px 20px;
  border-radius: 999px;
  position: relative;
`;
