
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Comprehensive translation data
const translations = {
  en: {
    // Brand
    'brand.name': 'Sheraa',
    
    // Navigation
    'nav.home': 'Home',
    'nav.dashboard': 'Dashboard',
    'nav.about': 'About',
    'nav.about.overview': 'Our Story',
    'nav.about.overview.desc': 'Learn about our mission and vision',
    'nav.about.leadership': 'Leadership',
    'nav.about.leadership.desc': 'Meet our leadership team',
    'nav.about.board': 'Board',
    'nav.about.board.desc': 'Our distinguished board members',
    'nav.programs': 'Programs',
    'nav.programs.overview': 'Overview',
    'nav.programs.overview.desc': 'Explore all our programs',
    'nav.programs.s3': 'S3 Incubator',
    'nav.programs.s3.desc': 'Our flagship 6-month incubation program',
    'nav.programs.start-young': 'Start Young',
    'nav.programs.start-young.desc': 'Youth entrepreneurship programs',
    'nav.programs.asc': 'Access Sharjah Challenge',
    'nav.programs.asc.desc': 'Global competition for growth-stage startups',
    'nav.community': 'Community',
    'nav.community.overview': 'Overview',
    'nav.community.overview.desc': 'Join our vibrant ecosystem',
    'nav.community.membership': 'Membership',
    'nav.community.membership.desc': 'Become a Sheraa member',
    'nav.community.startups': 'Startups',
    'nav.community.startups.desc': 'Explore our portfolio companies',
    'nav.insights': 'Insights',
    'nav.insights.overview': 'Overview',
    'nav.insights.overview.desc': 'Access our insights library',
    'nav.insights.guides': 'Guides & Toolkits',
    'nav.insights.guides.desc': 'Download practical resources',
    'nav.insights.articles': 'Articles',
    'nav.insights.articles.desc': 'Read the latest insights',
    'nav.events': 'Events',
    'nav.events.overview': 'Overview',
    'nav.events.overview.desc': 'Discover our events',
    'nav.events.upcoming': 'Upcoming',
    'nav.events.upcoming.desc': 'Join our upcoming events',
    'nav.events.sef': 'SEF',
    'nav.events.sef.desc': 'Sharjah Entrepreneurship Festival',
    'nav.contact': 'Contact',
    'nav.sef': 'SEF 2026',
    'nav.login': 'Login',
    'nav.signup': 'Sign Up',
    'nav.signout': 'Sign Out',
    
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
    // Brand
    'brand.name': 'شراع',
    
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.dashboard': 'لوحة التحكم',
    'nav.about': 'من نحن',
    'nav.about.overview': 'قصتنا',
    'nav.about.overview.desc': 'تعرف على مهمتنا ورؤيتنا',
    'nav.about.leadership': 'القيادة',
    'nav.about.leadership.desc': 'تعرف على فريق القيادة',
    'nav.about.board': 'مجلس الإدارة',
    'nav.about.board.desc': 'أعضاء مجلس الإدارة المتميزون',
    'nav.programs': 'البرامج',
    'nav.programs.overview': 'نظرة عامة',
    'nav.programs.overview.desc': 'استكشف جميع برامجنا',
    'nav.programs.s3': 'حاضنة S3',
    'nav.programs.s3.desc': 'برنامج الحضانة الرئيسي لمدة 6 أشهر',
    'nav.programs.start-young': 'ابدأ صغيراً',
    'nav.programs.start-young.desc': 'برامج ريادة الأعمال للشباب',
    'nav.programs.asc': 'تحدي الوصول إلى الشارقة',
    'nav.programs.asc.desc': 'مسابقة عالمية للشركات الناشئة في مرحلة النمو',
    'nav.community': 'المجتمع',
    'nav.community.overview': 'نظرة عامة',
    'nav.community.overview.desc': 'انضم إلى نظامنا البيئي النابض بالحياة',
    'nav.community.membership': 'العضوية',
    'nav.community.membership.desc': 'أصبح عضواً في شراع',
    'nav.community.startups': 'الشركات الناشئة',
    'nav.community.startups.desc': 'استكشف شركات محفظتنا',
    'nav.insights': 'الرؤى',
    'nav.insights.overview': 'نظرة عامة',
    'nav.insights.overview.desc': 'الوصول إلى مكتبة الرؤى الخاصة بنا',
    'nav.insights.guides': 'أدلة وأدوات',
    'nav.insights.guides.desc': 'تحميل الموارد العملية',
    'nav.insights.articles': 'المقالات',
    'nav.insights.articles.desc': 'اقرأ أحدث الرؤى',
    'nav.events': 'الفعاليات',
    'nav.events.overview': 'نظرة عامة',
    'nav.events.overview.desc': 'اكتشف فعالياتنا',
    'nav.events.upcoming': 'القادمة',
    'nav.events.upcoming.desc': 'انضم إلى فعالياتنا القادمة',
    'nav.events.sef': 'مهرجان ريادة الأعمال',
    'nav.events.sef.desc': 'مهرجان الشارقة لريادة الأعمال',
    'nav.contact': 'تواصل معنا',
    'nav.sef': 'مهرجان ريادة الأعمال 2026',
    'nav.login': 'تسجيل الدخول',
    'nav.signup': 'إنشاء حساب',
    'nav.signout': 'تسجيل الخروج',
    
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
