import styled, { css } from "styled-components";
import { color, font } from "../../shared/styles";

export const StyledInput = styled.div`
  position: relative;
  display: inline-block;
  height: 32px;
  width: 100%;
  margin-top: 0.8rem;
  margin-bottom: 1.1rem;
`;

export const InputElement = styled.input`
  height: 100%;
  width: 100%;
  border-radius: 999px;
  text-align: center;
  border: 1px solid ${color.borderLightest};
  color: ${color.textDarkest};
  background: ${color.backgroundLightest};
  transition: background 0.1s;
  ${font.regular}
  font-size:15px;
  padding-left: 32px;
  padding-right: 45%;
  &:hover {
    background: ${color.backgroundLight};
  }
  &:focus {
    background: #fff;
    border: 1px solid ${color.borderInputFocus};
    box-shadow: 0 0 0 1px ${color.borderInputFocus};
  }
  ${(props) =>
    // @ts-ignore
    props.invalid &&
    css`
      &,
      &:focus {
        border: 1px solid ${color.danger};
        box-shadow: none;
      }
    `}
`;
export const Filter = styled.div`
  top: 2px;
  right: 4px;
  ${font.medium}
  position: absolute;
  padding: 2px;
`;
export const IconWrapper = styled.div`
  position: absolute;
  pointer-events: none;
  top: 5px;
  left: 9px;
`;
