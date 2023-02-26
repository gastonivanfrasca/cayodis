import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { expect } from "@jest/globals";
import ThemeSwitcher from "../components/ThemeSwitcher";

describe("ThemeSwitcher", () => {
  beforeEach(() => {
    render(<ThemeSwitcher />);
  });

  it("should render ThemeSwitcher", () => {
    const themeSwitcher = screen.getByRole("checkbox") as HTMLInputElement;
    expect(themeSwitcher).not.toBeNull();
  });

  it("should change theme", () => {
    const themeSwitcher = screen.getByRole("checkbox") as HTMLInputElement;
    fireEvent.click(themeSwitcher);
    expect(themeSwitcher.checked).toBe(true);
    fireEvent.click(themeSwitcher);
    expect(themeSwitcher.checked).toBe(false);
  });
});
