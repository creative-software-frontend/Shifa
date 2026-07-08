import React, { createContext, useContext, useState } from 'react';

export type Lang = 'EN' | 'BN';

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (en: string, bn: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'EN',
  toggleLang: () => {},
  t: (en) => en,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('EN');
  const toggleLang = () => setLang(prev => (prev === 'EN' ? 'BN' : 'EN'));
  const t = (en: string, bn: string) => (lang === 'EN' ? en : bn);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
