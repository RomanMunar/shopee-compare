import React, { ReactElement, useRef, useState } from "react";
import useOnOutsideClick from "../../shared/hooks/useOnOutsideClick";
import { Icon } from "../Icon";
import {
  SelectContainer,
  SelectButton,
  SelectBody,
  SelectItem,
} from "./Select.styles";
interface Props {
  title?: string;
  options: string[];
  selectedOption?: any;
  setSelectedOption?: React.Dispatch<React.SetStateAction<any>>;
  lead?: string;
}
export default ({
  title,
  options,
  selectedOption,
  setSelectedOption,
  lead,
}: Props): ReactElement => {
  const [DropdownOpen, setDropdownOpen] = useState(false);
  const $sortRef = useRef<HTMLDivElement>(null);
  const $buttonRef = useRef<HTMLButtonElement>(null);
  useOnOutsideClick($sortRef, (e) => {
    if (!$buttonRef.current || $buttonRef.current.contains(e.target)) {
      return;
    }
    setDropdownOpen(false);
  });
  const notitle = title === undefined;
  const [newTitle, setNewTitle] = useState(notitle ? options[0] : title);
  return (
    <SelectContainer>
      <SelectButton
        ref={$buttonRef}
        onClick={() => setDropdownOpen(!DropdownOpen)}
      >
        {lead ? lead : ""}
        {selectedOption ? selectedOption : newTitle}
        <Icon type='ChevronDown' size={24} />
      </SelectButton>
      {DropdownOpen && (
        <SelectBody ref={$sortRef}>
          {options.map((option) =>
            option === newTitle ? (
              ""
            ) : (
              <SelectItem
                onClick={() => {
                  setSelectedOption
                    ? setSelectedOption(option)
                    : setNewTitle(option);
                  setDropdownOpen(false);
                }}
              >
                {lead ? lead + option : option}
              </SelectItem>
            )
          )}
        </SelectBody>
      )}
    </SelectContainer>
  );
};
