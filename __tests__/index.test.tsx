import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useTranslation } from "next-i18next";
import Index from "../pages/index";
import "jest-canvas-mock";
import { Layout } from "@/components";

const changeLanguage = jest.fn();
(useTranslation as jest.Mock).mockReturnValue({
  i18n: { changeLanguage },
  t: (str: string) => str,
});

jest.mock("next-i18next", () => ({
  useTranslation: jest.fn().mockImplementation(() => ({
    t: (str: string) => str,
  })),
}));

const push = jest.fn();
jest.mock("next/router", () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    push: push,
    pathname: "/",
    query: {},
  })),
}));

describe("Index", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const user = userEvent.setup();

  it("should render navigation and index", () => {
    render(
      <Layout>
        <Index />
      </Layout>
    );
    const navigationBar = screen.getByText("CaYoDis") as HTMLInputElement;
    expect(navigationBar).not.toBeNull();
    const index = screen.getByText("sign_in_with_google") as HTMLInputElement;
    expect(index).not.toBeNull();
  });

  it("should change language", () => {
    render(
      <Layout>
        <Index />
      </Layout>
    );
    const langSwitcher = screen.getByTestId(
      "lang-switcher"
    ) as HTMLInputElement;
    act(() => {
      user.click(langSwitcher);
    });
    expect(push).toHaveBeenCalled();
  });
});
