
# Sheraa - Sharjah Entrepreneurship Center Website

Welcome to the official website of Sheraa, Sharjah's premier entrepreneurship hub and startup accelerator. This modern, responsive website showcases our programs, community, and impact while providing an intuitive user experience.

## 🚀 Features

### Core Functionality
- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark/Light Mode**: Complete theme switching capability
- **Multi-language Support**: English and Arabic language support
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Performance Optimized**: Fast loading with modern optimization techniques

### Key Sections
- **Hero Section**: Dynamic, engaging homepage with animated metrics
- **Programs**: Comprehensive overview of all Sheraa programs (S3, Start Young, ASC, SME Support)
- **Community**: Startup showcase, membership, and partnership opportunities
- **Events**: SEF (Sharjah Entrepreneurship Festival) and other events
- **Resources**: Guides, toolkits, advisory services, and articles
- **About**: Leadership, board, and organizational information

## 🛠️ Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui components
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **State Management**: React Query (TanStack Query)
- **Icons**: Lucide React
- **SEO**: React Helmet Async

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── hero/           # Hero section components
│   ├── homepage/       # Homepage-specific components
│   ├── navigation/     # Navigation components
│   ├── layouts/        # Layout components
│   ├── SEO/           # SEO-related components
│   └── ui/            # Base UI components (shadcn/ui)
├── pages/              # Page components
│   ├── about/         # About pages
│   ├── programs/      # Program pages
│   ├── community/     # Community pages
│   ├── events/        # Event pages
│   └── resources/     # Resource pages
├── contexts/          # React contexts
├── providers/         # App providers
├── routes/           # Route definitions
├── lib/              # Utility functions
├── hooks/            # Custom React hooks
└── styles/           # Additional styles
```

## 🎨 Design System

### Brand Colors
- **Primary**: `#003366` (Sheraa Primary)
- **Secondary**: `#0080CC` (Sheraa Secondary)
- **SEF Primary**: `#B946DB` (SEF Purple)
- **SEF Secondary**: `#E946BD` (SEF Pink)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700, 800, 900

### Key Features
- Consistent spacing using Tailwind's scale
- Responsive typography with fluid scaling
- Accessibility-first design principles
- Dark mode support throughout

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## 🔧 Laravel Integration

This React application is designed to be easily integrated with a Laravel backend platform. The build output can be served from Laravel's public directory.

### Integration Steps
1. Build the React application: `npm run build`
2. Copy the `dist` folder contents to Laravel's `public` directory
3. Configure Laravel routes to serve the React app
4. Update API endpoints to match Laravel backend URLs

### API Integration Points
- Contact forms
- Membership applications
- Event registrations
- Newsletter subscriptions
- Resource downloads

## 📱 Mobile Optimization

- Touch-friendly interface design
- Optimized images and assets
- Progressive enhancement
- Fast loading on mobile networks
- Gesture-based navigation

## ♿ Accessibility Features

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Reduced motion preferences

## 🔍 SEO Features

- Comprehensive meta tags
- Open Graph support
- Twitter Card integration
- Structured data (JSON-LD)
- Sitemap generation ready
- Canonical URLs

## 🌐 Internationalization

- Arabic (RTL) language support
- English (LTR) language support
- Dynamic content loading
- Cultural adaptations

## 📊 Performance Optimizations

- Code splitting with React.lazy
- Image optimization
- CSS optimization
- Bundle size optimization
- Caching strategies
- Lazy loading

## 🛡️ Security Considerations

- XSS protection
- CSRF protection ready
- Secure headers configuration
- Content Security Policy ready
- Safe external link handling

## 📈 Analytics Ready

- Google Analytics integration points
- Event tracking setup
- Conversion tracking ready
- User journey tracking

## 🔄 Deployment

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Build Analysis
```bash
npm run build --analyze
```

## 🧪 Testing

- Component testing setup
- E2E testing configuration
- Performance testing tools
- Accessibility testing

## 📄 License

This project is proprietary to Sheraa - Sharjah Entrepreneurship Center.

## 🤝 Contributing

For internal development team:
1. Follow the established coding standards
2. Test thoroughly before committing
3. Update documentation as needed
4. Follow the Git workflow established

## 📞 Support

For technical support or questions:
- Internal Development Team
- Email: tech@sheraa.ae
- Documentation: See `/docs` folder

## 🎯 Future Enhancements

- Advanced analytics dashboard
- Real-time chat integration
- Progressive Web App features
- Advanced search functionality
- AI-powered recommendations
- Enhanced personalization

---

**Built with ❤️ by the Sheraa Development Team**

*Empowering the next generation of entrepreneurs through technology and innovation.*
