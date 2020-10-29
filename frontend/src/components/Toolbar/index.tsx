import React, { ReactNode } from "react";
import ReactTooltip from "react-tooltip";
import { IconType } from "../../interfaces";
import { Icon } from "../Icon";
import { ToolbarButton } from "./Styles";

type Props = {
  name: string;
  icon?: IconType;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  tooltipPlace?: "top" | "bottom" | "left" | "right";
  size?: number;
  children?: ReactNode;
};

export const TestToolbarButton = ({
  tooltipPlace = "top",
  name,
  icon,
  onClick,
  children,
  size,
}: Props) => {
  return (
    <>
      <ToolbarButton onClick={onClick} data-tip={name} data-for={name}>
        {icon ? <Icon type={icon} size={size ? size : 16} /> : children}
      </ToolbarButton>
      <ReactTooltip place={tooltipPlace} type='dark' effect='float' id={name} />
    </>
  );
};
// const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//   setIsSearchPanelOpen(!isSearchPanelOpen);
// };
// return (
//   <Toolbar place='default'>
//     {/* {isSearchPanelOpen ? ( */}
//     <ToolbarButton>
//       <Icon type='ExpandLeft' size={16} />
//     </ToolbarButton>
//     {/* ) : ( */}
//     <ToolbarButton>
//       <Icon type='ExpandRight' size={16} />
//     </ToolbarButton>
//     {/* )} */}
//     <ToolbarButton>
//       <Icon type='Pdf' size={16} />
//     </ToolbarButton>
//     <ToolbarButton>
//       <Icon type='Grid' size={16} />
//     </ToolbarButton>
//     <ToolbarButton>
//       A<Icon type='Sort' size={16} />
//     </ToolbarButton>
//     <ToolbarButton>
//       ₱<Icon type='Sort' size={16} />
//     </ToolbarButton>
//     <ToolbarButton>
//       <Icon type='Star' size={17} />
//       <Icon type='Sort' size={16} />
//     </ToolbarButton>
//   </Toolbar>
// );
