import styled from "styled-components";
import { color, font } from "../../shared/styles";

export const SelectContainer = styled.div`
  position: relative;
  display: inline-block;

  text-transform: capitalize;
`;

export const SelectButton = styled.button`
  text-transform: capitalize;
  display: inline-flex;
  align-items: center;
  border: 0px;
  background-color: transparent;
  ${font.medium}
  color: #172b4d;
  margin-left: -5px;
  text-align-last: right;
`;
export const SelectBody = styled.div`
  z-index: 10;
  padding-top: 10px;
  padding-bottom: 10px;
  transform-origin: top right;
  border: 1px solid ${color.backgroundMedium};
  background-color: #f4f5f7;
  text-align: right;
  border-radius: 8px;
  position: absolute;
  right: 0;
  margin-top: 8px;
  /* absolute right-0 mt-2 w-56 */
`;
export const SelectItem = styled.a`
  word-wrap: none;
  white-space: nowrap;
  display: block;
  padding: 5px 8px;
  margin: auto;
  overflow: hidden;
  &:hover {
    background: #eaeaea;
  }
`;
