import { render, screen } from "@testing-library/react";
import Home from "../pages/learn/home";
import { getServerSideProps } from "../pages/learn/home";
import { supabase } from "../__mocks__/supabase/tutorials";
import { GetServerSidePropsContext } from "next";
import { Tutorial } from "@/entities/Tutorial";

const push = jest.fn();
jest.mock("next/router", () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    push: push,
    pathname: "/",
    query: {},
  })),
}));

const context = {
  locale: "en",
};

describe("Home page", () => {
  jest.mock("@supabase/supabase-js", () => ({
    createClient: () => supabase,
  }));

  it("renders the Home page with tutorials", async () => {
    const props = await getServerSideProps(
      context as GetServerSidePropsContext
    );
    // @ts-ignore
    const tutorials = props.props.tutorials;
    render(<Home tutorials={tutorials as unknown as Tutorial[]} locale="en" />);
    expect(screen.getByText("UseEffect Basics")).not.toBe(null);
  });
});
