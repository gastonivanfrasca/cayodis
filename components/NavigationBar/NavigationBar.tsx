import { ThemeSwitcher, LangSwitcher, Avatar } from "@/components";
import Link from "next/link";
import { signOut, signInWithGoogle } from "@/helpers/auth";
import { FcGoogle } from "react-icons/fc";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Genos } from "@next/font/google";
import { useTranslation } from "next-i18next";

const genos = Genos({
  subsets: ["latin"],
  variable: "--font-genos",
});

const NavigationBar = () => {
  const user = useUser();
  const supabaseClient = useSupabaseClient();
  const { t, i18n } = useTranslation("common");

  return (
    <div className="navbar bg-base-200 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
          >
            <li>
              <Link href={`/${i18n.language}/learn/home`}>{t("learn")}</Link>
            </li>
            <li>
              <Link href={`/${i18n.language}/credits`}>{t("credits")}</Link>
            </li>
            <li>
              <Link href={`/${i18n.language}/about`}>{t("about")}</Link>
            </li>
            <li>
              <ThemeSwitcher />
            </li>
            <li>
              <LangSwitcher />
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link
          href={`/${i18n.language}/`}
          className={`${genos.variable} font-mono btn btn-ghost normal-case text-2xl`}
        >
          CaYoDis
        </Link>
      </div>
      <div className="navbar-end">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <Avatar imgSrc={user ? user.user_metadata?.avatar_url : ""} />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content bg-base-200 rounded-box"
          >
            {user ? (
              <li>
                <button
                  onClick={() =>
                    signOut(supabaseClient).then(() => window.location.reload())
                  }
                >
                  🚫
                </button>
              </li>
            ) : (
              <li>
                <button onClick={() => signInWithGoogle(supabaseClient)}>
                  <FcGoogle />
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
