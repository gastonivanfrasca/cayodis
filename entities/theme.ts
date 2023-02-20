export enum Themes {
  LIGHT = "light",
  DARK = "dark",
  EMPTY = "",
}

export type ThemeMode = Themes.LIGHT | Themes.DARK | Themes.EMPTY;

export const THEME_ATTR = "data-theme";

export const THEME_STR_KEY = "prefered_theme";
