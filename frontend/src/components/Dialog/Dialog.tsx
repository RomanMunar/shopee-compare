import React, { ReactNode } from "react";
import { IconType } from "../../interfaces";
import Flex from "../Flex";
import { Icon } from "../Icon";
import { ToolbarButton } from "../Toolbar";
import { ContentDescription, DialogTitle } from "./Dialog.styles";

export const DialogHeader = ({
  handleClose,
  children,
}: {
  handleClose: () => void;
  children: ReactNode;
}) => (
  <Flex padding='0 20px' align='center' justify='space-between'>
    <DialogTitle>{children}</DialogTitle>
    <ToolbarButton
      size={24}
      name='Close'
      tooltipPlace='bottom'
      onClick={handleClose}
      icon='Close'
    />
  </Flex>
);

export const IconDescription = ({
  icon,
  children,
}: {
  icon: IconType;
  children: ReactNode;
}) => (
  <Flex margin='2px 0'>
    <Icon size={18} type={icon} />
    <ContentDescription>{children}</ContentDescription>
  </Flex>
);
