import React from "react";

import { color } from "../../shared/styles";

import { StyledButton, StyledSpinner, Text } from "./Styles";

const Button = ({
  children,
  variant,
  disabled,
  isWorking,
  onClick,
  ...buttonProps
}) => {
  const handleClick = () => {
    if (!disabled && !isWorking) {
      onClick();
    }
  };

  return (
    <StyledButton
      {...buttonProps}
      onClick={handleClick}
      variant={variant}
      disabled={disabled || isWorking}
      iconOnly={!children}
    >
      {isWorking && <StyledSpinner size={26} color={getIconColor(variant)} />}
      {children && <Text withPadding={isWorking}>{children}</Text>}
    </StyledButton>
  );
};

const getIconColor = (variant) =>
  ["secondary", "empty"].includes(variant) ? color.textDark : "#fff";

export default Button;
