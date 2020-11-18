import styled, { css } from "styled-components";
import { color } from "../../../shared/styles";

export const CancelButton = styled.button`
  background: ${color.secondary};
  padding: 5px;
  border-radius: 5px;
  color: ${color.textDarkest};
  margin-left: 10px;
`;

export const SaveButton = styled.button`
  background: ${color.backgroundDarkPrimary};
  padding: 5px;
  border-radius: 5px;
  color: #fff;
  margin-left: 10px;
`;

export const InputElement = styled.input<{ invalid?: boolean }>`
  height: 30px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #dfe1e6;
  color: #172b4d;
  background: #f4f5f7;
  -webkit-transition: background 0.1s;
  transition: background 0.1s;
  font-family: "Roboto-Regular";
  font-weight: normal;
  font-size: 15px;
  padding-left: 15px;
  &:hover {
    background: ${color.backgroundLight};
  }
  &:focus {
    background: #fff;
    border: 1px solid ${color.borderInputFocus};
    box-shadow: 0 0 0 1px ${color.borderInputFocus};
  }
  ${(props) =>
    props.invalid &&
    css`
      &,
      &:focus {
        border: 1px solid ${color.danger};
        box-shadow: none;
      }
    `}
`;

export const TextAreaElement = styled.textarea<{
  height?: string;
  width?: number;
  invalid?: boolean;
}>`
  ${(props) => (props.height ? props.height + "px" : "height: 100px")};
  ${(props) => (props.width ? props.width + "%" : "width: 100%")};
  resize: none;
  border-radius: 5px;
  border: 1px solid #dfe1e6;
  color: #172b4d;
  background: #f4f5f7;
  -webkit-transition: background 0.1s;
  transition: background 0.1s;
  font-family: "Roboto-Regular";
  font-weight: normal;
  font-size: 15px;
  padding-left: 15px;
  &:hover {
    background: ${color.backgroundLight};
  }
  &:focus {
    background: #fff;
    border: 1px solid ${color.borderInputFocus};
    box-shadow: 0 0 0 1px ${color.borderInputFocus};
  }
  ${(props) =>
    props.invalid &&
    css`
      &,
      &:focus {
        border: 1px solid ${color.danger};
        box-shadow: none;
      }
    `}
`;
