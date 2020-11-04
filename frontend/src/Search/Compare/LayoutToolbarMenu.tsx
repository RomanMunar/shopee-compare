import React from "react";
import { ToolbarButton } from "../../components/Toolbar";
import { Toolbar } from "../../components/Toolbar/Styles";
import { Layout } from "../../interfaces";

interface Props {
  setLayout: React.Dispatch<React.SetStateAction<Layout>>;
}

const LayoutToolbarMenu = ({ setLayout }: Props) => {
  return (
    <Toolbar withoutMargin place='right-top'>
      <ToolbarButton
        onClick={() => setLayout("main")}
        name='Main Layout'
        icon='MainLayout'
        tooltipPlace='bottom'
      />
      <ToolbarButton
        onClick={() => setLayout("double")}
        name='Double Layout'
        icon='DoubleLayout'
        tooltipPlace='bottom'
      />
      <ToolbarButton
        onClick={() => setLayout("none")}
        name='No Layout'
        icon='Column'
        tooltipPlace='bottom'
      />
    </Toolbar>
  );
};

export default LayoutToolbarMenu;
