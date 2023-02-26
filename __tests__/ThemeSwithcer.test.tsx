import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, jest } from "@jest/globals";
import ThemeSwitcher from "../components/ThemeSwitcher";
import { Themes } from "../entities/theme";

describe("ThemeSwitcher", () => {
  const setTheme = jest.fn();
  const theme = Themes.LIGHT;

  beforeEach(() => {
    render(<ThemeSwitcher theme={theme} setTheme={setTheme} />);
  });

  it("should render ThemeSwitcher", () => {
    const themeSwitcher = screen.getByTestId("theme-switcher");
    expect(themeSwitcher).not.toBeNull();
  });

  it("should call setTheme on click", async () => {
    await act(async () => {
      await userEvent.click(screen.getByTestId("theme-switcher"));
    });
    expect(setTheme).toBeCalledTimes(1);
  });
});
