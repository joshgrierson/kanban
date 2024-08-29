import defaultColors from "tailwindcss/colors";
import { semanticColorTokens } from "./semantic";

export const modalColors = {
  "overlay-bg": defaultColors.black,
  bg: {
    DEFAULT: semanticColorTokens.secondary.DEFAULT,
    dark: semanticColorTokens.secondary.dark,
  },
  "close-btn-bg": {
    DEFAULT: semanticColorTokens.tertiary.DEFAULT,
    dark: semanticColorTokens.tertiary.dark,
  },
};

export const modalBorderRadius = {
  modal: "0.5rem",
};

export const modalSpacing = {
  modal: "1.5rem",
};

export const modalFontSize = {};
