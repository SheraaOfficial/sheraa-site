
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  en: {
    // Hero Section
    'hero.badge': 'Creating the Next Wave of Entrepreneurs',
    'hero.title.line1': 'Dream to',
    'hero.title.line2': 'Transform',
    'hero.description': "Sharjah's official hub for aspiring founders and established ventures. We empower changemakers to build impactful businesses through collaboration, innovation, and a founder-first ethos.",
    'hero.cta.primary': 'Launch Your Startup',
    'hero.cta.secondary': 'Watch Our Story',
    'hero.stats.startups': 'Startups Supported',
    'hero.stats.revenue': 'Revenue Generated',
    'hero.stats.jobs': 'Jobs Created',
    
    // Navigation
    'nav.programs': 'Programs',
    'nav.community': 'Community',
    'nav.resources': 'Resources',
    'nav.events': 'Events',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.signup': 'Sign Up',
    'nav.sef': 'SEF',
    
    // Impact Metrics
    'impact.title': 'Impact That Speaks Volumes',
    'impact.subtitle': 'We measure our success by the success of our founders and the growth of Sharjah\'s innovation ecosystem.',
  },
  ar: {
    // Hero Section
    'hero.badge': 'خلق الجيل القادم من رواد الأعمال',
    'hero.title.line1': 'احلم لتصنع',
    'hero.title.line2': 'التغيير',
    'hero.description': 'المركز الرسمي للشارقة لرواد الأعمال الطموحين والمشاريع الراسخة. نمكن صناع التغيير من بناء أعمال مؤثرة من خلال التعاون والابتكار ونهج يركز على المؤسس أولاً.',
    'hero.cta.primary': 'أطلق مشروعك الناشئ',
    'hero.cta.secondary': 'شاهد قصتنا',
    'hero.stats.startups': 'مشروع ناشئ مدعوم',
    'hero.stats.revenue': 'إيرادات مُحققة',
    'hero.stats.jobs': 'وظيفة مُوجدة',
    
    // Navigation
    'nav.programs': 'البرامج',
    'nav.community': 'المجتمع',
    'nav.resources': 'الموارد',
    'nav.events': 'الفعاليات',
    'nav.about': 'من نحن',
    'nav.contact': 'تواصل معنا',
    'nav.login': 'تسجيل الدخول',
    'nav.signup': 'إنشاء حساب',
    'nav.sef': 'مهرجان ريادة الأعمال',
    
    // Impact Metrics
    'impact.title': 'تأثير يتحدث بأرقام',
    'impact.subtitle': 'نقيس نجاحنا بنجاح مؤسسينا ونمو النظام البيئي للابتكار في الشارقة.',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
