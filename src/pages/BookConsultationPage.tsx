
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Calendar, Clock, Users, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BookConsultationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    stage: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Consultation Booked!",
        description: "We'll contact you within 24 hours to schedule your session.",
      });
      setLoading(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        stage: '',
        message: ''
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <Button asChild variant="outline" className="mb-8">
          <Link to="/programs" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Programs
          </Link>
        </Button>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
              Book a Free Consultation
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get personalized guidance from our program advisors. We'll help you find the perfect program 
              for your startup journey and answer all your questions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Consultation Benefits */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">What You'll Get</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sheraa-primary/10 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-sheraa-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Personalized Program Matching</h3>
                      <p className="text-gray-600 dark:text-gray-300">Our advisors will assess your startup stage and goals to recommend the best program fit.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sheraa-primary/10 rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-sheraa-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Application Strategy</h3>
                      <p className="text-gray-600 dark:text-gray-300">Get insider tips on how to strengthen your application and increase your chances of acceptance.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sheraa-primary/10 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-sheraa-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Timeline Planning</h3>
                      <p className="text-gray-600 dark:text-gray-300">Understand program timelines and plan your startup journey effectively.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sheraa-primary/10 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-sheraa-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Q&A Session</h3>
                      <p className="text-gray-600 dark:text-gray-300">Ask any questions about our programs, funding, mentorship, and the Sharjah ecosystem.</p>
                    </div>
                  </div>

                  <div className="bg-sheraa-primary/5 p-6 rounded-xl mt-6">
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Free 30-Minute Session</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      No cost, no commitment. Just valuable insights to help you make the right decision for your startup.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">Book Your Session</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+971 50 123 4567"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                          Company/Startup Name
                        </label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your startup name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                        Current Stage *
                      </label>
                      <select
                        name="stage"
                        value={formData.stage}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      >
                        <option value="">Select your current stage</option>
                        <option value="idea">Idea Stage</option>
                        <option value="mvp">MVP/Prototype</option>
                        <option value="early-revenue">Early Revenue</option>
                        <option value="scaling">Scaling</option>
                        <option value="sme">Established SME</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                        Tell us about your goals
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="What are you hoping to achieve? What questions do you have?"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-sheraa-primary to-sheraa-teal hover:from-sheraa-primary/90 hover:to-sheraa-teal/90"
                      disabled={loading}
                    >
                      {loading ? 'Booking...' : 'Book Free Consultation'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BookConsultationPage;
