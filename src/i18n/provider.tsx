import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { DEFAULT_LANG, LANG_STORAGE_KEY, isLang, languageMeta, type Lang } from "./config";
import type { Dictionary } from "./dictionary";
import { DICTIONARIES } from "./locales";

/** Reads the persisted choice. Safe to call outside React (e.g. from route `head()`). */
export function readStoredLang(): Lang {
  if (typeof window === "undefined") return DEFAULT_LANG;
  const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
  return isLang(saved) ? saved : DEFAULT_LANG;
}

/**
 * Dictionary for the currently persisted language, for contexts that cannot use hooks —
 * TanStack Router `head()` functions in particular.
 */
export function getDictionary(lang: Lang = readStoredLang()): Dictionary {
  return DICTIONARIES[lang];
}

/** Substitutes `{placeholder}` tokens in a translated string. */
export function format(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}

interface I18nContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** The active dictionary. Access copy as `t.home.hero.title`. */
  t: Dictionary;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    setLangState(readStoredLang());
  }, []);

  useEffect(() => {
    document.documentElement.lang = languageMeta(lang).htmlLang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(LANG_STORAGE_KEY, next);
  }, []);

  const value = useMemo<I18nContextValue>(
    () => ({ lang, setLang, t: DICTIONARIES[lang] }),
    [lang, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
}
