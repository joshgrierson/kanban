import type { Config } from "tailwindcss";
import { buttonBorderRadius, buttonColor, buttonFontSize, buttonSpacing } from "./tokens/button";
import { sharedColorTokens } from "./tokens";
import { cardBorderRadius, cardColor, cardFontSize, cardSpacing } from "./tokens/card";
import { navBarBorderRadius, navBarColor } from "./tokens/navbar";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...sharedColorTokens,
        button: buttonColor,
        card: cardColor,
        navbar: navBarColor,
      },
      spacing: {
        ...buttonSpacing,
        ...cardSpacing,
      },
      borderRadius: {
        ...buttonBorderRadius,
        ...cardBorderRadius,
        ...navBarBorderRadius,
      },
      fontSize: {
        ...buttonFontSize,
        ...cardFontSize,
      },
    },
  },
  plugins: [],
};
export default config;
