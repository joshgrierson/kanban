import { semanticColorTokens } from "./semantic";

export const navBarColors = {
  "item-active-bg": {
    DEFAULT: semanticColorTokens.primary.DEFAULT,
    dark: semanticColorTokens.primary.dark,
  },
  "item-hover-bg": {
    DEFAULT: semanticColorTokens["primary-hover"].DEFAULT,
    dark: semanticColorTokens["primary-hover"].dark,
  },
  "item-text": {
    DEFAULT: semanticColorTokens.tertiary.DEFAULT,
    dark: semanticColorTokens.tertiary.dark,
  },
  "item-text-hover": {
    DEFAULT: semanticColorTokens.onPrimary.DEFAULT,
    dark: semanticColorTokens.onPrimary.dark,
  },
  "item-text-active": {
    DEFAULT: semanticColorTokens.onPrimary.DEFAULT,
    dark: semanticColorTokens.onPrimary.dark,
  },
  "item-text-invert": {
    DEFAULT: semanticColorTokens.primary.DEFAULT,
    dark: semanticColorTokens.primary.dark,
  },
};

export const navBarBorderRadius = {
  "navbar-item": "2rem",
};

export const navBarFontSize = {
  navbar: "0.9rem",
};
