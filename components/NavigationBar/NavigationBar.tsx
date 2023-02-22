import { useEffect } from "react";
import { Theme, Themes, THEME_ATTR, THEME_STR_KEY } from "@/entities/theme";
import useStorageState from "@/hooks/useStorageState";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import Avatar from "../Avatar/Avatar";
import Link from "next/link";
import { signOut, signInWithGoogle } from "@/helpers/auth";
import { FcGoogle } from "react-icons/fc";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

const NavigationBar = () => {
  const [theme, setTheme] = useStorageState(THEME_STR_KEY, Themes.EMPTY);
  const user = useUser();
  const supabaseClient = useSupabaseClient();

  useEffect(() => {
    document.documentElement.setAttribute(THEME_ATTR, theme);
  }, [theme]);

  return (
    <div className="navbar bg-base-100 shadow-md">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/credits">Credits</Link>
            </li>
            <li>
              <ThemeSwitcher theme={theme as Theme} setTheme={setTheme} />
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          ChMyKn
        </Link>
      </div>
      <div className="navbar-end">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <Avatar imgSrc={user ? user.user_metadata?.avatar_url : ""} />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content bg-base-100 rounded-box"
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
