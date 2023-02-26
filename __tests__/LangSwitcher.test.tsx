import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import LangSwitcher from "@/components/LangSwitcher/LangSwitcher";
import { useTranslation } from "next-i18next";

jest.mock("next-i18next", () => ({
  useTranslation: jest.fn(),
}));

describe("LangSwitcher", () => {
  const changeLanguage = jest.fn();
  (useTranslation as jest.Mock).mockReturnValue({
    i18n: { changeLanguage },
  });

  beforeEach(() => {
    render(<LangSwitcher />);
  });

  it("should render LangSwitcher", () => {
    const langSwitcher = screen.getByRole("checkbox") as HTMLInputElement;
    expect(langSwitcher).not.toBeNull();
  });

  it("should change language", () => {
    const langSwitcher = screen.getByRole("checkbox") as HTMLInputElement;
    // read from cookie
    expect(changeLanguage).toHaveBeenCalledWith("");
    fireEvent.click(langSwitcher);
    expect(changeLanguage).toHaveBeenCalledWith("en");
    fireEvent.click(langSwitcher);
    expect(changeLanguage).toHaveBeenCalledWith("es");
  });
});
