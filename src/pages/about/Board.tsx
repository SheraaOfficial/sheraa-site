
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Building, GraduationCap, Briefcase } from 'lucide-react';

const Board: React.FC = () => {
  const boardCategories = [
    {
      title: "Government Leaders",
      icon: Building,
      color: "text-blue-600 bg-blue-50",
      members: 5
    },
    {
      title: "Industry Experts", 
      icon: Briefcase,
      color: "text-green-600 bg-green-50",
      members: 6
    },
    {
      title: "Academic Leaders",
      icon: GraduationCap,
      color: "text-purple-600 bg-purple-50", 
      members: 3
    },
    {
      title: "Entrepreneurial Community",
      icon: Users,
      color: "text-orange-600 bg-orange-50",
      members: 3
    }
  ];

  return (
    <MainLayout>
      <div className="bg-white dark:bg-sheraa-dark">
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent">
                Board of Advisors
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                We benefit from the strategic guidance of a distinguished Board of Advisors, comprising 17 leaders from government, industry, academia, and the entrepreneurial community, ensuring our initiatives remain aligned with national priorities and market needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {boardCategories.map((category, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 mx-auto rounded-2xl ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <category.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                      <div className="text-3xl font-bold text-sheraa-primary mb-2">{category.members}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Board Members</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="bg-gradient-to-r from-sheraa-primary/5 to-sheraa-teal/5 border-sheraa-primary/20">
                <CardContent className="p-12">
                  <Users className="w-16 h-16 mx-auto text-sheraa-primary mb-6" />
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Strategic Leadership</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    This high-level support network solidifies Sheraa's position and influence within the regional ecosystem. The leadership structure, combining experienced guidance with dynamic operational direction, ensures strategic alignment and effective execution of Sheraa's mission.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Board;
