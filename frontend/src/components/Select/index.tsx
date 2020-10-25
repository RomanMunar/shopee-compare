import React, { ReactElement, useRef, useState } from "react";
import useOnOutsideClick from "../../useOnOutsideClick";
import { Icon } from "../Icon";
import {
  SelectContainer,
  SelectButton,
  SelectBody,
  SelectItem,
} from "./Styles";
interface Props {
  title: string;
  DropdownOpen: boolean;
  setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  options: string[];
}
export default ({
  title,
  DropdownOpen,
  setDropdownOpen,
  options,
}: Props): ReactElement => {
  const $sortRef = useRef<HTMLDivElement>(null);
  useOnOutsideClick($sortRef, () => setDropdownOpen(!DropdownOpen));
  const [newTitle, setNewTitle] = useState(title);
  return (
    <SelectContainer>
      <SelectButton onClick={() => setDropdownOpen(!DropdownOpen)}>
        {newTitle}
        <Icon type='ChevronDown' size={24} />
      </SelectButton>
      {DropdownOpen && (
        <SelectBody ref={$sortRef}>
          {options.map((option) =>
            option === newTitle ? (
              ""
            ) : (
              <SelectItem onClick={() => setNewTitle(option)}>
                {option}
              </SelectItem>
            )
          )}
        </SelectBody>
      )}
    </SelectContainer>
  );
};
