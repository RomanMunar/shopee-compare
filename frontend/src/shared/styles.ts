import Color from "color";
import { css } from "styled-components";

export const color = {
  primary: "#2F88FF", // Blue
  success: "#52bb6f", // green
  danger: "#D0021B", // red
  warning: "#f1d335", // orange
  secondary: "#F4F5F7", // light grey
  accent: "#1CEAD1",

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

export const mixin = {
  darken: (colorValue: string, amount: number) =>
    Color(colorValue).darken(amount).string(),
  lighten: (colorValue: string, amount: number) =>
    Color(colorValue).lighten(amount).string(),
  rgba: (colorValue: string, opacity: number) =>
    Color(colorValue).alpha(opacity).string(),
  boxShadowMedium: css`
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  `,
  boxShadowDropdown: css`
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
      rgba(9, 30, 66, 0.31) 0px 0px 1px;
  `,
  truncateText: css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
  clickable: css`
    cursor: pointer;
    user-select: none;
  `,
  hardwareAccelerate: css`
    transform: translateZ(0);
  `,
  cover: css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `,
  placeholderColor: (colorValue: string) => css`
    ::-webkit-input-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    :-moz-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    ::-moz-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    :-ms-input-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
  `,
  scrollableY: css`
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  `,
  scrollableX: css`
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  `,
  customScrollbar: ({ width = 8, height = 8 } = {}) => css`
    &::-webkit-scrollbar {
      height: ${height}px;
      width: ${width}px;
      background-color: transparent;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 99px;
      background: rgba(30, 30, 30, 0.3);
    }
  `,
  backgroundImage: (imageURL: string) => css`
    background-image: url("${imageURL}");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${color.backgroundLight};
  `,
  link: (colorValue = color.textLink) => css`
    cursor: pointer;
    color: ${colorValue};
    ${font.medium}
    &:hover, &:visited, &:active {
      color: ${colorValue};
    }
    &:hover {
      text-decoration: underline;
    }
  `,
  tag: (
    background = color.backgroundMedium,
    colorValue = color.textDarkest
  ) => css`
    display: inline-flex;
    align-items: center;
    height: 24px;
    padding: 0 8px;
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
    color: ${colorValue};
    background: ${background};
    ${font.bold}
    font-size:12;
    i {
      margin-left: 4px;
    }
  `,
};

export const font = {
  light: 'font-family: "Roboto-Light"; font-weight: normal;',
  regular: 'font-family: "Roboto-Regular"; font-weight: normal;',
  medium: 'font-family: "Roboto-Medium"; font-weight: normal;',
  bold: 'font-family: "Roboto-Bold"; font-weight: normal;',
};

export const shadows = {
  shadowSm: css`
    box-shadow: 0 0.0625rem 0.125rem 0 rgba(0, 0, 0, 0.1);
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
