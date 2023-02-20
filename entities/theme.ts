/**
 * The themes that can be used in the app
 */
export enum Themes {
  LIGHT = "light",
  DARK = "dark",
  EMPTY = "",
}

/**
 * The type of theme that can be used
 */
export type ThemeMode = Themes.LIGHT | Themes.DARK | Themes.EMPTY;

/**
 * The name of the attribute where the theme is applied
 */
export const THEME_ATTR = "data-theme";

/**
 * The name of the key that the theme is stored in local storage
 */
export const THEME_STR_KEY = "prefered_theme";
