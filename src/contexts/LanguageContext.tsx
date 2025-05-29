
import React, { createContext, useContext, useState, ReactNode } from 'react';

console.log('LanguageContext module loaded');
console.log('React in LanguageContext:', !!React);

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
    'impact.startups': 'Startups Supported',
    'impact.revenue': 'Revenue Generated',
    'impact.funding': 'Capital Raised',
    'impact.jobs': 'Jobs Created',
    'impact.women': 'Women-Led Startups',
    'impact.youth': 'Youth Upskilled',
    'impact.partners': 'Ecosystem Partners',
    'impact.survival': 'Startup Survival Rate',
    
    // Programs
    'programs.title': 'Your Journey Starts Here',
    'programs.subtitle': 'From validating your initial idea to scaling globally, Sheraa offers a suite of programs designed to meet you where you are.',
    
    // Community
    'community.title': 'Powered by Community',
    'community.subtitle': 'Entrepreneurship thrives in collaboration. Join a vibrant network of founders, mentors, and investors.',
    
    // SEF
    'sef.title': 'Sharjah Entrepreneurship Festival',
    'sef.subtitle': 'The region\'s premier entrepreneurship festival bringing together thousands of changemakers.',
    
    // Vision
    'vision.quote': 'To establish Sharjah as a leading global hub for entrepreneurship and innovation.',
    
    // CTA
    'cta.title': 'Ready to Transform Your Idea?',
    'cta.subtitle': 'Join the region\'s most dynamic entrepreneurship ecosystem.',
    'cta.button': 'Get Started Today',
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
    'impact.startups': 'مشروع ناشئ مدعوم',
    'impact.revenue': 'إيرادات مُحققة',
    'impact.funding': 'رأس مال مُجمع',
    'impact.jobs': 'وظيفة مُوجدة',
    'impact.women': 'مشاريع بقيادة نسائية',
    'impact.youth': 'شاب مُدرب',
    'impact.partners': 'شريك في النظام البيئي',
    'impact.survival': 'معدل بقاء المشاريع',
    
    // Programs
    'programs.title': 'رحلتك تبدأ من هنا',
    'programs.subtitle': 'من التحقق من فكرتك الأولية إلى التوسع عالمياً، تقدم شراع مجموعة من البرامج المصممة لتلبية احتياجاتك.',
    
    // Community
    'community.title': 'مدعوم بالمجتمع',
    'community.subtitle': 'ريادة الأعمال تزدهر بالتعاون. انضم إلى شبكة نابضة بالحياة من المؤسسين والموجهين والمستثمرين.',
    
    // SEF
    'sef.title': 'مهرجان الشارقة لريادة الأعمال',
    'sef.subtitle': 'مهرجان ريادة الأعمال الرائد في المنطقة يجمع آلاف صناع التغيير.',
    
    // Vision
    'vision.quote': 'جعل الشارقة مركزاً عالمياً رائداً لريادة الأعمال والابتكار.',
    
    // CTA
    'cta.title': 'مستعد لتحويل فكرتك؟',
    'cta.subtitle': 'انضم إلى أكثر النظم البيئية لريادة الأعمال ديناميكية في المنطقة.',
    'cta.button': 'ابدأ اليوم',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  console.log('LanguageProvider rendering');
  console.log('React hooks available in LanguageProvider:', !!React.useState);
  
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const contextValue: LanguageContextType = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      <div 
        className={language === 'ar' ? 'rtl' : 'ltr'} 
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
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
