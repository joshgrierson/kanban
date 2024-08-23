import { semanticColorTokens } from "./semantic";

export const buttonColors = {
  bg: {
    DEFAULT: semanticColorTokens.primary.DEFAULT,
    dark: semanticColorTokens.primary.dark,
  },
  "bg-hover": {
    DEFAULT: semanticColorTokens["primary-hover"].DEFAULT,
    dark: semanticColorTokens["primary-hover"].dark,
  },
  "bg-invert": {
    DEFAULT: semanticColorTokens.onPrimary.DEFAULT,
    dark: semanticColorTokens.onPrimary.dark,
  },
  "bg-invert-hover": {
    DEFAULT: semanticColorTokens["onPrimary-hover"].DEFAULT,
    dark: semanticColorTokens["onPrimary-hover"].dark,
  },
  text: {
    DEFAULT: semanticColorTokens.onPrimary.DEFAULT,
    dark: semanticColorTokens.onPrimary.dark,
  },
  "text-invert": {
    DEFAULT: semanticColorTokens.primary.DEFAULT,
    dark: semanticColorTokens.primary.dark,
  },
};

export const buttonFontSize = {
  button: "1rem",
  "button-sm": "0.8rem",
};

export const buttonSpacing = {
  button: "0.7rem",
  "button-sm": "0.6rem",
};

export const buttonBorderRadius = {
  button: "2rem",
};
