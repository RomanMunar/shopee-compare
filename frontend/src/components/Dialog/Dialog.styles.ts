import styled from "styled-components";
import { color, font } from "../../shared/styles";

export {
  ContentDescription,
  Dialog,
  DialogBody,
  DialogComponent,
  DialogContent,
  DialogSection,
  DialogHeading,
  DialogTitle,
  DialogWrapper,
  SubText,
};

const DialogWrapper = styled.div<{ guide: "search" | "compare" }>`
  width: 50%;
  position: absolute;
  top: 2%;
  left: 22%;
  z-index: 500;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const Dialog = styled.div`
  width: 100%;
  padding: 10px 0 0 0;
  border-radius: 10px;
  background: ${color.backgroundDarkPrimary};
`;

const DialogSection = styled.div<{ dir?: "column" | "row"; sub?: boolean }>`
  margin: 0 0 ${(props) => (props.sub ? "10px" : "20px")};
  display: flex;
  flex-direction: ${(props) => (props.dir ? props.dir : "column")};
`;

const DialogBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin-top: 5px;
`;

const DialogTitle = styled.div`
  font-size: 20px;
  color: #fff;
  ${font.bold}
`;

const DialogHeading = styled.div<{ sub?: boolean }>`
  font-size: ${(props) => (props.sub ? "15px" : "18px")};
  ${font.bold}
  margin-bottom:5px;
`;

const DialogContent = styled.div`
  margin-left: 20px;
`;

const DialogComponent = styled.div<{
  border?: number | string;
}>`
  width: fit-content;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.6);
  margin-bottom: -10px;
  border-radius: ${(props) => (props.border ? props.border : "10px")};
  overflow: hidden;
`;

const ContentDescription = styled.div`
  margin-left: 5px;
`;

const SubText = styled.span`
  color: #747484;
  font-size: 12px;
  margin-left: 4px;
  ::before {
    content: "“";
  }
`;
