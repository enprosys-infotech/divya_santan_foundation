/**
 * Public i18n surface.
 *
 * Usage in a component:
 *   const { t, lang } = useI18n();
 *   <h1>{t.home.hero.title}</h1>
 *
 * Usage in a TanStack Router `head()` (no hooks available there):
 *   head: () => seo(getDictionary().about.meta)
 */

export { DEFAULT_LANG, LANGUAGES, isLang, languageMeta, type Lang } from "./config";
export type { Dictionary } from "./dictionary";
export { I18nProvider, format, getDictionary, readStoredLang, useI18n } from "./provider";
export { seo } from "./seo";
