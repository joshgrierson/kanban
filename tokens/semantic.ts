import defaultColors from "tailwindcss/colors";

export const semanticColorTokens = {
  primary: {
    DEFAULT: defaultColors.violet[500],
    dark: defaultColors.violet[500],
  },
  secondary: {
    DEFAULT: defaultColors.gray[700],
    dark: defaultColors.gray[700],
  },
  tertiary: {
    DEFAULT: defaultColors.gray[500],
    dark: defaultColors.gray[500],
  },
  quarternary: {
    DEFAULT: defaultColors.gray[800],
    dark: defaultColors.gray[800],
  },
  onPrimary: {
    DEFAULT: defaultColors.white,
    dark: defaultColors.white,
  },
  onSecondary: {
    DEFAULT: defaultColors.white,
    dark: defaultColors.white,
  },
  "primary-hover": {
    DEFAULT: defaultColors.violet[700],
    dark: defaultColors.violet[700],
  },
  "onPrimary-hover": {
    DEFAULT: defaultColors.gray[200],
    dark: defaultColors.gray[200],
  },
};

export type SemanticColorTokens = typeof semanticColorTokens;
