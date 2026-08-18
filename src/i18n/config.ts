/**
 * Language registry — the single place to declare which languages the site supports.
 *
 * Adding a language:
 *   1. Append an entry to `LANGUAGES` below.
 *   2. Create `src/i18n/locales/<code>.ts` exporting a `Dictionary`.
 *   3. Register it in `src/i18n/locales/index.ts`.
 * TypeScript then reports every string the new locale is missing.
 */

export const LANGUAGES = [
  { code: "en", label: "EN", htmlLang: "en-IN", nativeName: "English" },
  { code: "hi", label: "हिन्दी", htmlLang: "hi-IN", nativeName: "हिन्दी" },
] as const;

export type Lang = (typeof LANGUAGES)[number]["code"];

export const DEFAULT_LANG: Lang = "en";

/** localStorage key holding the visitor's chosen language. */
export const LANG_STORAGE_KEY = "dsf-lang";

export function isLang(value: unknown): value is Lang {
  return LANGUAGES.some((l) => l.code === value);
}

export function languageMeta(code: Lang) {
  return LANGUAGES.find((l) => l.code === code) ?? LANGUAGES[0];
}
