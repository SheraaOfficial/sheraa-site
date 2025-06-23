
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const Footer = () => {
  const { t, language } = useLanguage();

  const siteMap = {
    about: {
      title: language === 'ar' ? 'حول شراع' : 'About Sheraa',
      links: [
        { name: language === 'ar' ? 'من نحن' : 'About Us', path: '/about' },
        { name: language === 'ar' ? 'القيادة' : 'Leadership', path: '/about/leadership' },
        { name: language === 'ar' ? 'مجلس الإدارة' : 'Board of Directors', path: '/about/board' },
        { name: language === 'ar' ? 'تقرير الأثر' : 'Impact Report', path: '/impact-report' },
      ]
    },
    programs: {
      title: language === 'ar' ? 'البرامج' : 'Programs',
      links: [
        { name: 'S3 Incubator', path: '/programs/s3-incubator' },
        { name: 'Start Young', path: '/programs/start-young' },
        { name: 'Startup Dojo', path: '/programs/startup-dojo' },
        { name: 'Access Sharjah Challenge', path: '/programs/access-sharjah-challenge' },
        { name: 'Deal Dock', path: '/programs/deal-dock' },
        { name: 'SME Support', path: '/programs/sme-support' },
      ]
    },
    community: {
      title: language === 'ar' ? 'المجتمع' : 'Community',
      links: [
        { name: language === 'ar' ? 'انضم إلينا' : 'Join Community', path: '/community' },
        { name: language === 'ar' ? 'العضوية' : 'Membership', path: '/community/membership' },
        { name: language === 'ar' ? 'الشراكات' : 'Partnerships', path: '/community/partnerships' },
        { name: language === 'ar' ? 'الشركات الناشئة' : 'Startups', path: '/community/startups' },
      ]
    },
    events: {
      title: language === 'ar' ? 'الفعاليات' : 'Events',
      links: [
        { name: language === 'ar' ? 'جميع الفعاليات' : 'All Events', path: '/events' },
        { name: 'SEF Festival', path: '/events/sef' },
        { name: language === 'ar' ? 'الفعاليات القادمة' : 'Upcoming Events', path: '/events/upcoming' },
        { name: language === 'ar' ? 'الفعاليات السابقة' : 'Past Events', path: '/events/past' },
      ]
    },
    insights: {
      title: language === 'ar' ? 'الرؤى' : 'Insights',
      links: [
        { name: language === 'ar' ? 'الأدلة والأدوات' : 'Guides & Toolkits', path: '/insights/guides' },
        { name: language === 'ar' ? 'الخدمات الاستشارية' : 'Advisory Services', path: '/insights/advisory' },
        { name: language === 'ar' ? 'المقالات' : 'Articles & Insights', path: '/insights/articles' },
        { name: language === 'ar' ? 'التقارير' : 'Impact Reports', path: '/insights/impact-reports' },
      ]
    },
    media: {
      title: language === 'ar' ? 'الإعلام' : 'Media',
      links: [
        { name: language === 'ar' ? 'المدونة' : 'Blog', path: '/blog' },
        { name: language === 'ar' ? 'البودكاست' : 'Podcast', path: '/podcast' },
        { name: language === 'ar' ? 'التقارير' : 'Reports', path: '/reports' },
        { name: language === 'ar' ? 'خلاصة المجتمع' : 'Community Feed', path: '/feed' },
      ]
    }
  };

  const supportLinks = [
    { name: language === 'ar' ? 'تواصل معنا' : 'Contact Us', path: '/contact' },
    { name: language === 'ar' ? 'الوظائف' : 'Careers', path: '/careers' },
    { name: language === 'ar' ? 'فحص الأهلية' : 'Eligibility Checker', path: '/eligibility' },
    { name: language === 'ar' ? 'الأسئلة الشائعة' : 'FAQ', path: '/events/sef/faq' },
  ];

  return (
    <footer 
      className={cn(
        "bg-gray-900 dark:bg-black text-white py-16",
        language === 'ar' && "font-arabic"
      )}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand and Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                {t('brand.name')}
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {language === 'ar' 
                ? 'المركز الرسمي للشارقة لرواد الأعمال الطموحين والمشاريع الراسخة. نمكن صناع التغيير من بناء أعمال مؤثرة.'
                : "Sharjah's official hub for aspiring founders and established ventures. We empower changemakers to build impactful businesses."
              }
            </p>
            <div className={cn(
              "flex space-x-4",
              language === 'ar' && "space-x-reverse"
            )}>
              <a href="https://linkedin.com/company/sheraa" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/sheraa" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/sheraa" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/sheraa" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </h3>
            <div className="space-y-4">
              <div className={cn(
                "flex items-start gap-3",
                language === 'ar' && "flex-row-reverse"
              )}>
                <MapPin className="w-5 h-5 text-sheraa-primary mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p className="font-medium">
                    {language === 'ar' ? 'مقر شراع الرئيسي' : 'Sheraa HQ'}
                  </p>
                  <p className="text-sm">
                    {language === 'ar' 
                      ? 'حديقة الشارقة للبحوث والتكنولوجيا والابتكار، الشارقة، الإمارات العربية المتحدة'
                      : 'Sharjah Research Technology & Innovation Park, Sharjah, UAE'
                    }
                  </p>
                </div>
              </div>
              <div className={cn(
                "flex items-center gap-3",
                language === 'ar' && "flex-row-reverse"
              )}>
                <Phone className="w-5 h-5 text-sheraa-primary flex-shrink-0" />
                <a href="tel:+97165094000" className="text-gray-300 hover:text-white transition-colors">
                  +971 6 509 4000
                </a>
              </div>
              <div className={cn(
                "flex items-center gap-3",
                language === 'ar' && "flex-row-reverse"
              )}>
                <Mail className="w-5 h-5 text-sheraa-primary flex-shrink-0" />
                <a href="mailto:info@sheraa.ae" className="text-gray-300 hover:text-white transition-colors">
                  info@sheraa.ae
                </a>
              </div>
            </div>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {language === 'ar' ? 'الدعم' : 'Support'}
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Special Collections */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {language === 'ar' ? 'مجموعات خاصة' : 'Special Collections'}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/perfume" className="text-gray-300 hover:text-white transition-colors duration-200">
                  {language === 'ar' ? 'عطر الشارقة' : 'Sharjah Perfume'}
                </Link>
              </li>
              <li>
                <Link to="/themes/preview" className="text-gray-300 hover:text-white transition-colors duration-200">
                  {language === 'ar' ? 'معاينة التصاميم' : 'Theme Preview'}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Comprehensive Site Map */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="text-xl font-bold mb-6 text-center">
            {language === 'ar' ? 'خريطة الموقع' : 'Site Map'}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {Object.entries(siteMap).map(([key, section]) => (
              <div key={key}>
                <h4 className="font-semibold text-sheraa-primary mb-3">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.path} 
                        className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className={cn(
            "flex flex-col md:flex-row justify-between items-center gap-4",
            language === 'ar' && "md:flex-row-reverse"
          )}>
            <p className="text-gray-400 text-sm">
              {language === 'ar' 
                ? '© 2024 شراع. جميع الحقوق محفوظة.'
                : '© 2024 Sheraa. All rights reserved.'
              }
            </p>
            <div className={cn(
              "flex gap-6 text-sm",
              language === 'ar' && "space-x-reverse"
            )}>
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </Link>
              <Link to="/terms-of-use" className="text-gray-400 hover:text-white transition-colors">
                {language === 'ar' ? 'شروط الاستخدام' : 'Terms of Use'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
