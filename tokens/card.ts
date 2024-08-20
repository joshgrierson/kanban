import { semanticColorTokens } from "./semantic";

export const cardColor = {
  bg: {
    DEFAULT: semanticColorTokens.secondary.DEFAULT,
    dark: semanticColorTokens.secondary.dark,
  },
  title: {
    DEFAULT: semanticColorTokens.onSecondary.DEFAULT,
    dark: semanticColorTokens.onSecondary.dark,
  },
  text: {
    DEFAULT: semanticColorTokens.tertiary.DEFAULT,
    dark: semanticColorTokens.tertiary.dark,
  },
};

export const cardFontSize = {
  "card-title": "1.1rem",
  "card-text": "0.8rem",
};

export const cardSpacing = {
  card: "1rem",
};

export const cardBorderRadius = {
  card: "0.8rem",
};
