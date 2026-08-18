import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "hi";

export const LANGUAGES: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "hi", label: "हिन्दी" },
];

/**
 * Translation dictionary. To add a language later, add its code to `Lang`,
 * push it to LANGUAGES and add a matching entry to each key below.
 */
type Entry = Record<Lang, string>;

export const dict = {
  "brand.name": {
    en: "Divya Santan Foundation",
    hi: "दिव्य संतान फाउंडेशन",
  },
  "brand.prakalp": { en: "Divya Santan Prakalp", hi: "दिव्य संतान प्रकल्प" },
  "brand.positioning": {
    en: "A Global Garbh Sanskar Education, Training & Awareness Platform",
    hi: "गर्भ संस्कार शिक्षा, प्रशिक्षण एवं जनजागरण का वैश्विक मंच",
  },
  "brand.vasudhaiva": { en: "वसुधैव कुटुम्बकम्", hi: "वसुधैव कुटुम्बकम्" },
  "brand.vasudhaiva.sub": {
    en: "One World, One Family",
    hi: "एक विश्व, एक परिवार",
  },

  "nav.home": { en: "Home", hi: "होम" },
  "nav.about": { en: "About", hi: "परिचय" },
  "nav.learn": { en: "Learn", hi: "सीखें" },
  "nav.courses": { en: "Courses", hi: "पाठ्यक्रम" },
  "nav.knowledge": { en: "Knowledge Centre", hi: "ज्ञान केंद्र" },
  "nav.free": { en: "Free Services", hi: "नि:शुल्क सेवाएँ" },
  "nav.ask": { en: "Ask Shree AI", hi: "श्री AI से पूछें" },
  "nav.research": { en: "Research", hi: "अनुसंधान" },
  "nav.global": { en: "Global Movement", hi: "वैश्विक अभियान" },
  "nav.join": { en: "Join Us", hi: "जुड़ें" },
  "nav.contact": { en: "Contact", hi: "संपर्क" },
  "nav.menu": { en: "Menu", hi: "मेनू" },

  "cta.joinFree": { en: "Join Free Classes", hi: "नि:शुल्क कक्षाओं से जुड़ें" },
  "cta.askShree": { en: "Ask Shree AI", hi: "श्री AI से पूछें" },
  "cta.guidance": { en: "Get Guidance", hi: "मार्गदर्शन लें" },
  "cta.learn": { en: "Learn Garbh Sanskar", hi: "गर्भ संस्कार सीखें" },
  "cta.needGuidance": {
    en: "Need Personal Guidance?",
    hi: "व्यक्तिगत मार्गदर्शन चाहिए?",
  },

  "hero.title": { en: "From Womb to World", hi: "गर्भ से विश्व तक" },
  "hero.subtitle": {
    en: "Nurturing Healthy, Cultured & Compassionate Generations",
    hi: "स्वस्थ, संस्कारित और करुणामय पीढ़ी का निर्माण",
  },
  "hero.support": {
    en: "Education • Training • Awareness • Guidance • Research",
    hi: "शिक्षा • प्रशिक्षण • जनजागरण • मार्गदर्शन • अनुसंधान",
  },
  "hero.eyebrow": {
    en: "A global education & awareness movement for Garbh Sanskar",
    hi: "गर्भ संस्कार हेतु वैश्विक शिक्षा एवं जनजागरण अभियान",
  },

  "s1.title": { en: "What is Garbh Sanskar?", hi: "गर्भ संस्कार क्या है?" },
  "s1.body": {
    en: "Garbh Sanskar is the practice of conscious nurturing — of the mother, the family and the environment — from before conception through the entire pregnancy journey. It is a learning path, not a treatment.",
    hi: "गर्भ संस्कार, गर्भधारण से पूर्व से लेकर सम्पूर्ण गर्भावस्था तक माता, परिवार और वातावरण के सजग पोषण की साधना है। यह एक शिक्षा-यात्रा है, कोई उपचार नहीं।",
  },
  "s2.title": { en: "Why It Matters", hi: "यह क्यों महत्वपूर्ण है" },
  "s2.body": {
    en: "The journey of nurturing a generation begins before birth.",
    hi: "एक पीढ़ी के निर्माण की यात्रा जन्म से पहले आरम्भ होती है।",
  },
  "s3.title": { en: "Our Five Pillars", hi: "हमारे पाँच स्तम्भ" },
  "s4.title": { en: "Learn by Journey", hi: "अपनी यात्रा से सीखें" },
  "s5.title": { en: "Knowledge Centre", hi: "ज्ञान केंद्र" },
  "s6.title": {
    en: "Knowledge Should Reach Every Family",
    hi: "ज्ञान हर परिवार तक पहुँचे",
  },
  "s8.title": { en: "Science & Research", hi: "विज्ञान एवं अनुसंधान" },
  "s9.title": { en: "Be Part of the Movement", hi: "इस अभियान का हिस्सा बनें" },
  "s10.title": { en: "From India to the World", hi: "भारत से विश्व तक" },
  "s11.title": { en: "Voices from the Movement", hi: "अभियान की आवाज़ें" },
} satisfies Record<string, Entry>;

export type TKey = keyof typeof dict;

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: TKey) => string };

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "dsf-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "hi") setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const t = useCallback((k: TKey) => dict[k][lang], [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}

/** Pick between an English and Hindi string for inline bilingual content. */
export function useBilingual() {
  const { lang } = useLanguage();
  return useCallback((en: string, hi?: string) => (lang === "hi" && hi ? hi : en), [lang]);
}
