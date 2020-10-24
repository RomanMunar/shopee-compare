import React from "react";
import { Icon } from "../../components/Icon";
import { Toolbar, ToolbarButton } from "./Styles";

interface Props {
  isSearchPanelOpen: boolean;
  setIsSearchPanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default ({ isSearchPanelOpen, setIsSearchPanelOpen }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsSearchPanelOpen(!isSearchPanelOpen);
  };

  return (
    <Toolbar>
      <button onClick={(e) => handleClick(e)}>
        {isSearchPanelOpen ? (
          <ToolbarButton>
            <Icon type='ExpandLeft' size={16} />
          </ToolbarButton>
        ) : (
          <ToolbarButton>
            <Icon type='ExpandRight' size={16} />
          </ToolbarButton>
        )}
      </button>
    </Toolbar>
  );
};
