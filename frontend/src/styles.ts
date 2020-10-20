import Color from "color";
import { css } from "styled-components";

export const color = {
  primary: "#2F88FF", // Blue
  success: "#0B875B", // green
  danger: "#D0021B", // red
  warning: "#F89C1C", // orange
  secondary: "#F4F5F7", // light grey

  textDarkest: "#172b4d",
  textDark: "#42526E",
  textMedium: "#5E6C84",
  textLight: "#8993a4",
  textLink: "#0052cc",

  backgroundDarkPrimary: "#0747A6",
  backgroundMedium: "#dfe1e6",
  backgroundLight: "#ebecf0",
  backgroundLightest: "#F4F5F7",
  backgroundLightPrimary: "#D2E5FE",
  backgroundLightSuccess: "#E4FCEF",

  borderLightest: "#dfe1e6",
  borderLight: "#C1C7D0",
  borderInputFocus: "#4c9aff",
};

export const adjustColor = {
  darken: (colorValue: string, amount: number) =>
    Color(colorValue).darken(amount).string(),
  lighten: (colorValue: string, amount: number) =>
    Color(colorValue).lighten(amount).string(),
  rgba: (colorValue: string, opacity: number) =>
    Color(colorValue).alpha(opacity).string(),
};

export const shadows = {
  shadowSm: css`
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  `,
  shadow: css`
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  `,
  shadowMd: css`
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  `,
  shadowLg: css`
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  `,
  shadowXl: css`
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  `,
  shadow2Xl: css`
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  `,
};
