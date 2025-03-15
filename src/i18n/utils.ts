import { ui, defaultLang, showDefaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang] & keyof (typeof ui)[typeof lang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function useTranslatedPath(currentLang: keyof typeof ui) {
  return function translatePath(path: string, newLang: string = currentLang) {
    // Remove current language prefix if present
    const pathWithoutLang = path.replace(/^\/[a-z]{2}/, '');
    
    // If new language is default and showDefaultLang is false, return path without prefix
    if (!showDefaultLang && newLang === defaultLang) {
      return pathWithoutLang || '/';
    }
    
    // Add new language prefix
    return `/${newLang}${pathWithoutLang}`;
  }
} // Rimuovere la parentesi graffa extra
