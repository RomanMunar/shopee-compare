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
      {isSearchPanelOpen ? (
        <ToolbarButton onClick={(e) => handleClick(e)}>
          <Icon type='ExpandLeft' size={16} />
        </ToolbarButton>
      ) : (
        <ToolbarButton onClick={(e) => handleClick(e)}>
          <Icon type='ExpandRight' size={16} />
        </ToolbarButton>
      )}
      <ToolbarButton>
        <Icon type='Pdf' size={16} />
      </ToolbarButton>
      <ToolbarButton>
        <Icon type='Grid' size={16} />
      </ToolbarButton>
      <ToolbarButton>
        A<Icon type='Sort' size={16} />
      </ToolbarButton>
      <ToolbarButton>
        ₱<Icon type='Sort' size={16} />
      </ToolbarButton>
      <ToolbarButton>
        <Icon type='Star' size={17} />
        <Icon type='Sort' size={16} />
      </ToolbarButton>
    </Toolbar>
  );
};
