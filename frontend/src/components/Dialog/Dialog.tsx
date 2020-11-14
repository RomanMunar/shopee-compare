import React, { ReactNode, useEffect, useState } from "react";
import { IconType } from "../../interfaces";
import Flex from "../Flex";
import { Icon } from "../Icon";
import { ToolbarButton } from "../Toolbar";
import {
  ContentDescription,
  DontShowAgainCheckbox,
  DialogTitle,
} from "./Dialog.styles";
import {
  getDialogs,
  Dialog,
  setDialogs,
} from "../../shared/utils/localStorage";

export const DontShowThisAgain = ({ dialog }: { dialog: Dialog }) => {
  const dialogs = getDialogs();
  const [checked, setChecked] = useState(!dialogs.includes(dialog));
  useEffect(() => {
    if (checked) {
      setDialogs(dialogs.filter((d) => d !== dialog));
    } else {
      setDialogs([...dialogs, dialog]);
    }
  }, [checked]);

  return (
    <DontShowAgainCheckbox onClick={() => setChecked(!checked)}>
      <input type='checkbox' checked={checked} />
      Don't show this again
    </DontShowAgainCheckbox>
  );
};

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
