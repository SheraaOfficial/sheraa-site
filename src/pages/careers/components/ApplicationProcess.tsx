
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  FileText, Users, Calendar, CheckCircle, 
  ArrowRight, Clock, MessageSquare, Award
} from 'lucide-react';

const ApplicationProcess: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Submit Application",
      description: "Send us your resume and cover letter through our online portal",
      icon: FileText,
      duration: "5 min",
      color: "blue"
    },
    {
      step: "02", 
      title: "Initial Review",
      description: "Our team reviews your application and qualifications",
      icon: Users,
      duration: "2-3 days",
      color: "purple"
    },
    {
      step: "03",
      title: "Phone/Video Interview",
      description: "30-45 minute conversation about your experience and goals",
      icon: MessageSquare,
      duration: "45 min",
      color: "green"
    },
    {
      step: "04",
      title: "Final Interview",
      description: "Meet the team and discuss role-specific scenarios",
      icon: Calendar,
      duration: "1 hour",
      color: "orange"
    },
    {
      step: "05",
      title: "Decision & Offer",
      description: "We'll get back to you with our decision within a week",
      icon: Award,
      duration: "1 week",
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "text-blue-600 bg-blue-50 border-blue-200",
      purple: "text-purple-600 bg-purple-50 border-purple-200", 
      green: "text-green-600 bg-green-50 border-green-200",
      orange: "text-orange-600 bg-orange-50 border-orange-200",
      red: "text-red-600 bg-red-50 border-red-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-white dark:bg-sheraa-dark/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Application Process</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We've designed a transparent, efficient process to help us get to know you and for you to learn about us.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="border border-gray-200 hover:border-sheraa-primary/30 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border-2 ${getColorClasses(step.color)} group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="w-8 h-8" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="text-3xl font-bold text-gray-200 dark:text-gray-700">
                            {step.step}
                          </span>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {step.title}
                          </h3>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                          {step.description}
                        </p>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{step.duration}</span>
                        </div>
                      </div>
                      
                      {index < steps.length - 1 && (
                        <div className="hidden md:flex items-center">
                          <ArrowRight className="w-6 h-6 text-gray-300" />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Card className="bg-sheraa-primary/5 border-sheraa-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <CheckCircle className="w-12 h-12 text-sheraa-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">What to Expect</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We believe in transparency. You'll receive updates at every stage, and we're always available 
                to answer questions about the process or next steps.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
