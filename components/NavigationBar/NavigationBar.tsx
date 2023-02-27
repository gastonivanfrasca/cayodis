import { ThemeSwitcher, LangSwitcher, Avatar } from "@/components";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, signInWithGoogle } from "@/helpers/auth";
import { FcGoogle } from "react-icons/fc";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Genos } from "@next/font/google";
import { useTranslation } from "next-i18next";
import useStorageState from "@/hooks/useStorageState";
import { Langs } from "../LangSwitcher/LangSwitcher";

const genos = Genos({
  subsets: ["latin"],
  variable: "--font-genos",
});

const NavigationBar = () => {
  const user = useUser();
  const router = useRouter();
  const [lang, setLang] = useStorageState("language", Langs.Empty);
  const supabaseClient = useSupabaseClient();
  const { t } = useTranslation("common");

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
            {user && (
              <li>
                <Link href={"/learn/home"} locale={lang}>
                  {t("learn")}
                </Link>
              </li>
            )}
            <li>
              <Link href={"/credits"} locale={lang}>
                {t("credits")}
              </Link>
            </li>
            <li>
              <Link href={"/about"} locale={lang}>
                {t("about")}
              </Link>
            </li>
            <li>
              <ThemeSwitcher />
            </li>
            <li>
              <LangSwitcher lang={lang} setLang={setLang} />
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link
          href={user ? "/learn/home" : "/"}
          className={`${genos.variable} font-mono btn btn-ghost normal-case text-2xl`}
          locale={lang}
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
                    signOut(supabaseClient).then(() =>
                      router.push("/", undefined, { locale: lang })
                    )
                  }
                >
                  🚫
                </button>
              </li>
            ) : (
              <li>
                <button
                  onClick={() =>
                    signInWithGoogle(supabaseClient).then(() =>
                      router.push("/learn/home", undefined, { locale: lang })
                    )
                  }
                >
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
