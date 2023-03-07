import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import LangSwitcher from "@/components/LangSwitcher/LangSwitcher";

jest.mock("next-i18next", () => ({
  useTranslation: jest.fn(),
}));

const push = jest.fn();
jest.mock("next/router", () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    push: push,
    pathname: "/",
    query: {},
  })),
}));

describe("LangSwitcher", () => {
  const setLang = jest.fn();
  const lang = "";

  beforeEach(() => {
    render(<LangSwitcher setLang={setLang} lang={lang} />);
  });

  it("should render LangSwitcher", () => {
    const langSwitcher = screen.getByRole("checkbox") as HTMLInputElement;
    expect(langSwitcher).not.toBeNull();
  });

  it("should change language", () => {
    const langSwitcher = screen.getByRole("checkbox") as HTMLInputElement;
    fireEvent.click(langSwitcher);
    expect(setLang).toHaveBeenCalled();
  });
});
