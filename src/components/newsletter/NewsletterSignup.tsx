
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Mail, Check, Star, Sparkles } from 'lucide-react';

interface NewsletterSignupProps {
  className?: string;
  variant?: 'default' | 'sidebar' | 'modal';
}

export const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  className = '',
  variant = 'default'
}) => {
  const [email, setEmail] = useState('');
  const [preferences, setPreferences] = useState({
    startupStories: true,
    expertInsights: true,
    programUpdates: true,
    eventAlerts: false,
    weeklyDigest: true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubscribed(true);
    setIsSubmitting(false);
    
    toast({
      title: "Successfully subscribed!",
      description: "Welcome to the Sheraa community. Check your email for confirmation.",
    });

    // Store subscription in localStorage
    const subscribers = JSON.parse(localStorage.getItem('newsletterSubscribers') || '[]');
    subscribers.push({
      email,
      preferences,
      subscribedAt: new Date().toISOString()
    });
    localStorage.setItem('newsletterSubscribers', JSON.stringify(subscribers));
  };

  const preferenceOptions = [
    { key: 'startupStories', label: 'Startup Success Stories', icon: Star },
    { key: 'expertInsights', label: 'Expert Insights & Tips', icon: Sparkles },
    { key: 'programUpdates', label: 'Program Announcements', icon: Mail },
    { key: 'eventAlerts', label: 'Event Notifications', icon: Check },
    { key: 'weeklyDigest', label: 'Weekly Ecosystem Digest', icon: Mail }
  ];

  if (isSubscribed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`${className}`}
      >
        <Card className="border-green-200 bg-green-50 dark:bg-green-900/20">
          <CardContent className="p-6 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Check className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">
              You're In!
            </h3>
            <p className="text-green-700 dark:text-green-300">
              Welcome to the Sheraa community. Check your email for confirmation.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={className}
    >
      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal text-white">
          <CardTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Join the Sheraa Community
          </CardTitle>
          <p className="text-white/90 text-sm">
            Get exclusive insights, startup stories, and ecosystem updates delivered to your inbox.
          </p>
        </CardHeader>
        
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-lg py-3"
              />
            </div>

            {variant === 'default' && (
              <div>
                <h4 className="font-medium mb-3">Email Preferences</h4>
                <div className="space-y-3">
                  {preferenceOptions.map(({ key, label, icon: Icon }) => (
                    <div key={key} className="flex items-center space-x-3">
                      <Checkbox
                        id={key}
                        checked={preferences[key as keyof typeof preferences]}
                        onCheckedChange={(checked) => 
                          setPreferences(prev => ({ ...prev, [key]: checked }))
                        }
                      />
                      <label htmlFor={key} className="flex items-center gap-2 text-sm cursor-pointer">
                        <Icon className="w-4 h-4 text-sheraa-primary" />
                        {label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-3">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-sheraa-primary hover:bg-sheraa-primary/90 py-3"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  'Subscribe Now'
                )}
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                You can unsubscribe at any time. We respect your privacy.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="outline" className="text-xs">180+ Startups</Badge>
              <Badge variant="outline" className="text-xs">Weekly Insights</Badge>
              <Badge variant="outline" className="text-xs">Expert Tips</Badge>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};
