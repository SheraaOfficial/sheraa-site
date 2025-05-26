
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface EmailCaptureSectionProps {
  appliedDiscount: boolean;
  onDiscountApplied: () => void;
}

const EmailCaptureSection: React.FC<EmailCaptureSectionProps> = ({ appliedDiscount, onDiscountApplied }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate HubSpot integration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Set SEF discount flag
      onDiscountApplied();
      localStorage.setItem('sef_discount_claimed', 'true');
      
      toast({
        title: "Success! 💌",
        description: "Your 10% SEF discount code has been sent to your email!",
      });
      
      setEmail('');
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section 
      className="py-20 bg-gradient-to-br from-[#165A5A] to-[#1A6B6B]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Gift className="w-16 h-16 text-[#C8A165] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Exclusive SEF Discount
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            As a member of the Sharjah Entrepreneurship Festival community, 
            enjoy 10% off your Sharjah Perfume purchase
          </p>

          {!appliedDiscount ? (
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email for discount code"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#C8A165] hover:bg-[#B8956A] text-white px-8"
              >
                {isSubmitting ? 'Sending...' : 'Get Code'}
              </Button>
            </form>
          ) : (
            <div className="bg-[#C8A165]/20 border-2 border-[#C8A165] rounded-lg p-6 max-w-md mx-auto">
              <p className="text-white text-lg font-semibold">
                🎉 SEF10 Discount Applied!
                <br />
                <span className="text-[#C8A165]">Save AED 80 on your purchase</span>
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EmailCaptureSection;
