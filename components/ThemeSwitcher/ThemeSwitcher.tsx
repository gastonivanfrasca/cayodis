import React from "react";
import { Themes, THEME_STR_KEY, THEME_ATTR } from "./entities";
import useStorageState from "@/hooks/useStorageState";
import { useEffect } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useStorageState(THEME_STR_KEY, Themes.EMPTY);

  useEffect(() => {
    if (theme === Themes.EMPTY) {
      setTheme(
        window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
          ? Themes.DARK
          : Themes.LIGHT
      );
    }

    document.documentElement.setAttribute(THEME_ATTR, theme);
  }, [theme]);

  return (
    <label className="label cursor-pointer">
      <span className="label-text">🌕</span>
      <input
        onChange={() =>
          setTheme(theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT)
        }
        type="checkbox"
        className="toggle"
        data-testid="theme-switcher"
        checked={theme === Themes.DARK}
      />
      <span className="label-text">🌑</span>
    </label>
  );
};

export default ThemeSwitcher;
