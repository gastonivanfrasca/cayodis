import React from "react";
import useStorageState from "@/hooks/useStorageState";
import { useTranslation } from "next-i18next";

enum Langs {
  EN = "en",
  ES = "es",
}

const LangSwitcher = () => {
  const { i18n } = useTranslation("common");
  const [lang, setLang] = useStorageState("lang", i18n.language);
  return (
    <label className="label cursor-pointer">
      <span className="label-text">🇬🇧</span>
      <input
        onChange={() => {
          setLang(lang === Langs.EN ? Langs.ES : Langs.EN);
          i18n.changeLanguage(lang === Langs.EN ? Langs.ES : Langs.EN);
          document.cookie = `NEXT_LOCALE=${
            lang === Langs.EN ? Langs.ES : Langs.EN
          }`;
        }}
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
