import React, { useEffect } from "react";
import useStorageState from "@/hooks/useStorageState";
import { useTranslation } from "next-i18next";

enum Langs {
  EN = "en",
  ES = "es",
  Empty = "",
}

const LangSwitcher = () => {
  const { i18n } = useTranslation("common");
  const [lang, setLang] = useStorageState("language", Langs.Empty);
  useEffect(() => {
    if (lang !== i18n.language || lang !== Langs.Empty) {
      i18n.changeLanguage(lang);
      document.cookie = `NEXT_LOCALE=${lang}`;
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
