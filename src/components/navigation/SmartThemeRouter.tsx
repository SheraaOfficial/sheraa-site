
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useExperienceTheme } from '@/contexts/ExperienceThemeContext';

export const SmartThemeRouter: React.FC = () => {
  const { theme } = useExperienceTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Only auto-navigate if we're on the homepage
    if (location.pathname === '/') {
      switch (theme) {
        case 'sef':
          navigate('/events/sef-landing');
          break;
        case 'dashboard':
          navigate('/dashboard');
          break;
        case 'main':
        default:
          // Stay on homepage for main theme
          break;
      }
    }
  }, [theme, navigate, location.pathname]);

  return null;
};
