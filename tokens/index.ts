import { semanticColorTokens } from "./semantic";
import * as buttonTokens from "./button";
import * as navbarTokens from "./navbar";
import * as cardTokens from "./card";
import * as themeSwitcherTokens from "./themeSwitcher";
import * as headingTokens from "./heading";
import { ThemeConfig } from "tailwindcss/types/config";

const matchableTokenTypes = ["Colors", "FontSize", "Spacing", "BorderRadius"] as const;

const bootstrap: Record<string, any> = {
  button: buttonTokens,
  navbar: navbarTokens,
  card: cardTokens,
  themeSwitcher: themeSwitcherTokens,
  heading: headingTokens,
};

export function getTokens() {
  const config = {
    colors: {
      ...semanticColorTokens,
    },
  } as Record<keyof ThemeConfig, any>;

  for (const key in bootstrap) {
    for (const token in bootstrap[key]) {
      const values = bootstrap[key][token];
      const tokenType = matchableTokenTypes.find((type) => token.endsWith(type));

      if (tokenType) {
        const downcaseFirstLetter =
          `${tokenType.slice(0, 1).toLowerCase()}${tokenType.slice(1)}` as keyof ThemeConfig;
        switch (tokenType) {
          case "Colors":
            if (!config[downcaseFirstLetter]) {
              config[downcaseFirstLetter] = {};
            }
            config[downcaseFirstLetter][key] = values;
            break;
          case "FontSize":
          case "BorderRadius":
          case "Spacing":
            config[downcaseFirstLetter] = {
              ...config[downcaseFirstLetter],
              ...values,
            };
            break;
        }
      }
    }
  }

  return config;
}
