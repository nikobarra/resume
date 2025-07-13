import { useLanguage } from "../contexts/LanguageContext";
import { es } from "../translations/es";
import { en } from "../translations/en";
import cvDataEs from "../cvjson.json";
import cvDataEn from "../cvjson_en.json";
import { CVDataEs, CVDataEn } from "../types/cv";

export const useTranslations = () => {
    const { language } = useLanguage();

    const translations = language === "es" ? es : en;
    const cvData: CVDataEs | CVDataEn = language === "es" ? cvDataEs : cvDataEn;

    return { t: translations, cvData };
};
