import * as React from 'react';
import { ReactNode } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined);

// Comprehensive translation data with 100% coverage
const translations = {
  en: {
    // Brand
    'brand.name': 'Sheraa',
    'brand.tagline': 'Creating the Next Wave of Entrepreneurs',
    
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
    'programs.s3.title': 'S3 Incubator',
    'programs.s3.desc': 'Scale your tech-enabled startup with our flagship program',
    'programs.start-young.title': 'Start Young',
    'programs.start-young.desc': 'Turn ideas into action for student entrepreneurs',
    'programs.asc.title': 'Access Sharjah Challenge', 
    'programs.asc.desc': 'Solve industry challenges and win POCs globally',
    
    // Community
    'community.title': 'Powered by Community',
    'community.subtitle': 'Entrepreneurship thrives in collaboration. Join a vibrant network of founders, mentors, and investors.',
    'community.membership.title': 'Membership',
    'community.membership.desc': 'Flexible support for founders',
    'community.startups.title': 'Our Startups',
    'community.startups.desc': 'Innovation in action',
    'community.partnerships.title': 'Partnerships',
    'community.partnerships.desc': 'Drive innovation together',
    
    // Insights
    'insights.title': 'Knowledge & Tools for Your Toolkit',
    'insights.subtitle': 'Access practical guides, toolkits, expert advisory services, and insightful articles.',
    'insights.guides.title': 'Guides & Toolkits',
    'insights.guides.desc': 'Practical resources for building your business',
    'insights.advisory.title': 'Advisory Services',
    'insights.advisory.desc': 'Expert guidance when you need it most',
    'insights.articles.title': 'Articles & Insights',
    'insights.articles.desc': 'Stay ahead with the latest insights',
    'insights.reports.title': 'Impact Reports',
    'insights.reports.desc': 'Measuring our collective success',
    
    // SEF
    'sef.title': 'Sharjah Entrepreneurship Festival',
    'sef.subtitle': 'The region\'s premier entrepreneurship festival bringing together thousands of changemakers.',
    'sef.cta': 'Get Your Pass',
    'sef.attendees': 'Attendees',
    'sef.speakers': 'Global Speakers',
    'sef.activities': 'Activities',
    
    // Vision
    'vision.quote': 'To establish Sharjah as a leading global hub for entrepreneurship and innovation.',
    
    // CTA
    'cta.title': 'Ready to Transform Your Idea?',
    'cta.subtitle': 'Join the region\'s most dynamic entrepreneurship ecosystem.',
    'cta.button': 'Get Started Today',
    
    // Forms & Actions
    'form.name': 'Full Name',
    'form.email': 'Email Address',
    'form.phone': 'Phone Number',
    'form.message': 'Your Message',
    'form.send': 'Send Message',
    'form.apply': 'Apply Now',
    'form.join': 'Join Community',
    'form.download': 'Download',
    'form.learn-more': 'Learn More',
    'form.back': 'Back',
    'form.next': 'Next',
    
    // Footer
    'footer.copyright': '© 2024 Sheraa. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.contact': 'Contact Us',
    'footer.address': 'Sharjah Research Technology & Innovation Park, Sharjah, UAE',
    'footer.quick-links': 'Quick Links',
    'footer.programs': 'Programs',
  },
  ar: {
    // Brand
    'brand.name': 'شراع',
    'brand.tagline': 'خلق الجيل القادم من رواد الأعمال',
    
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
    'programs.s3.title': 'حاضنة S3',
    'programs.s3.desc': 'قم بتوسيع شركتك الناشئة التقنية مع برنامجنا الرائد',
    'programs.start-young.title': 'ابدأ صغيراً',
    'programs.start-young.desc': 'حول الأفكار إلى أفعال لرواد الأعمال الطلاب',
    'programs.asc.title': 'تحدي الوصول إلى الشارقة',
    'programs.asc.desc': 'حل تحديات الصناعة واكسب POCs عالمياً',
    
    // Community
    'community.title': 'مدعوم بالمجتمع',
    'community.subtitle': 'ريادة الأعمال تزدهر بالتعاون. انضم إلى شبكة نابضة بالحياة من المؤسسين والموجهين والمستثمرين.',
    'community.membership.title': 'العضوية',
    'community.membership.desc': 'دعم مرن للمؤسسين',
    'community.startups.title': 'شركاتنا الناشئة',
    'community.startups.desc': 'الابتكار في العمل',
    'community.partnerships.title': 'الشراكات',
    'community.partnerships.desc': 'قود الابتكار معاً',
    
    // Insights
    'insights.title': 'المعرفة والأدوات لمجموعة أدواتك',
    'insights.subtitle': 'الوصول إلى أدلة عملية وأدوات وخدمات استشارية من الخبراء ومقالات ثاقبة.',
    'insights.guides.title': 'أدلة وأدوات',
    'insights.guides.desc': 'موارد عملية لبناء عملك',
    'insights.advisory.title': 'الخدمات الاستشارية',
    'insights.advisory.desc': 'إرشاد خبير عندما تحتاجه أكثر',
    'insights.articles.title': 'المقالات والرؤى',
    'insights.articles.desc': 'ابق في المقدمة مع أحدث الرؤى',
    'insights.reports.title': 'تقارير التأثير',
    'insights.reports.desc': 'قياس نجاحنا الجماعي',
    
    // SEF
    'sef.title': 'مهرجان الشارقة لريادة الأعمال',
    'sef.subtitle': 'مهرجان ريادة الأعمال الرائد في المنطقة يجمع آلاف صناع التغيير.',
    'sef.cta': 'احصل على تذكرتك',
    'sef.attendees': 'الحضور',
    'sef.speakers': 'متحدثون عالميون',
    'sef.activities': 'الأنشطة',
    
    // Vision
    'vision.quote': 'جعل الشارقة مركزاً عالمياً رائداً لريادة الأعمال والابتكار.',
    
    // CTA
    'cta.title': 'مستعد لتحويل فكرتك؟',
    'cta.subtitle': 'انضم إلى أكثر النظم البيئية لريادة الأعمال ديناميكية في المنطقة.',
    'cta.button': 'ابدأ اليوم',
    
    // Forms & Actions
    'form.name': 'الاسم الكامل',
    'form.email': 'عنوان البريد الإلكتروني',
    'form.phone': 'رقم الهاتف',
    'form.message': 'رسالتك',
    'form.send': 'إرسال الرسالة',
    'form.apply': 'قدم الآن',
    'form.join': 'انضم للمجتمع',
    'form.download': 'تحميل',
    'form.learn-more': 'اعرف أكثر',
    'form.back': 'رجوع',
    'form.next': 'التالي',
    
    // Footer
    'footer.copyright': '© 2024 شراع. جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الاستخدام',
    'footer.contact': 'تواصل معنا',
    'footer.address': 'حديقة الشارقة للبحوث والتكنولوجيا والابتكار، الشارقة، الإمارات العربية المتحدة',
    'footer.quick-links': 'روابط سريعة',
    'footer.programs': 'البرامج',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = React.useState<Language>('en');

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
        style={{ 
          fontFamily: language === 'ar' ? '"Noto Sans Arabic", system-ui, sans-serif' : '"Inter", system-ui, sans-serif'
        }}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
