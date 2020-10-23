import React, { ReactElement } from "react";
import { Icon } from "../../components/Icon";
import { StyledInput, InputElement } from "./Styles";

export default (): ReactElement => (
  <StyledInput>
    <div
      style={{
        position: "absolute",
        pointerEvents: "none",
        top: "4px",
        left: "8px",
      }}
    >
      <Icon size={24} type='SearchBar' />
    </div>
    <InputElement />
  </StyledInput>
);
