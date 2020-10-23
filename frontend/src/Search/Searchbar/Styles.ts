import styled, { css } from "styled-components";
import { color, font } from "../../styles";

export const StyledInput = styled.div`
  position: relative;
  display: inline-block;
  height: 32px;
  width: 80%;
  margin-top: 2rem;
  margin-bottom: 1.1rem;
`;

export const InputElement = styled.input`
  height: 100%;
  width: 100%;
  padding: 0 7px;
  border-radius: 999px;
  text-align: center;
  border: 1px solid ${color.borderLightest};
  color: ${color.textDarkest};
  background: ${color.backgroundLightest};
  transition: background 0.1s;
  ${font.regular}
  font-size:15px;
  padding-left: 32px;
  padding-right: 32px;
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
