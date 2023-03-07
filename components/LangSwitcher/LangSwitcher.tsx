import React, { useEffect } from "react";
import { useRouter } from "next/router";

export enum Langs {
  EN = "en",
  ES = "es",
  Empty = "",
}

type LangSwitcherProps = {
  lang: string;
  setLang: (lang: Langs) => void;
};

const LangSwitcher = ({ lang, setLang }: LangSwitcherProps) => {
  const router = useRouter();
  useEffect(() => {
    const path = router.asPath;
    router.push(path, path, { locale: lang });
  }, [lang]);
  return (
    <label className="label cursor-pointer">
      <span className="label-text">🇬🇧</span>
      <input
        onChange={() => setLang(lang === Langs.EN ? Langs.ES : Langs.EN)}
        type="checkbox"
        className="toggle"
        data-testid="lang-switcher"
        checked={lang === Langs.ES}
      />
      <span className="label-text">🇪🇸</span>
    </label>
  );
};

export default LangSwitcher;
