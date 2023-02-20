import React from "react";
import { Themes, Theme } from "@/entities/theme";

type ThemeSwitcherProps = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeSwitcher = ({ theme, setTheme }: ThemeSwitcherProps) => {
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
