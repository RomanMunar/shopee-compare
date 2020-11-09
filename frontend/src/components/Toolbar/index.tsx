import React, { ReactNode } from "react";
import ReactTooltip from "react-tooltip";
import { IconType } from "../../interfaces";
import { Icon } from "../Icon";
import { TButton as Button } from "./Styles";
import "./styles.css";

type Props = {
  name: string;
  icon?: IconType;
  onClick?: () => void;
  tooltipPlace: "top" | "bottom" | "left" | "right";
  size?: number;
  children?: ReactNode;
};

export const ToolbarButton = ({
  tooltipPlace,
  name,
  icon,
  onClick,
  children,
  size,
}: Props) => {
  return (
    <>
      <Button onClick={onClick} data-tip={name} data-for={name}>
        {icon ? <Icon type={icon} size={size ? size : 16} /> : children}
      </Button>
      <ReactTooltip
        resizeHide={true}
        className={"extraClass"}
        place={tooltipPlace}
        type='dark'
        effect='solid'
        arrowColor='rgba(0,0,0,0)'
        id={name}
      />
    </>
  );
};
