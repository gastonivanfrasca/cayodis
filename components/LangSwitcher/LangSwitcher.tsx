import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";

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
  const { i18n } = useTranslation("common");
  useEffect(() => {
    if (lang === Langs.Empty) {
      setLang(Langs.EN);
    }

    if (lang !== i18n.language || lang !== Langs.Empty) {
      i18n.changeLanguage(lang);
    }
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
