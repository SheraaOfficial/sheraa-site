
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { GradientButton } from '@/components/ui/gradient-button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, CheckCircle, Calendar, Clock, Users, Award } from 'lucide-react';

const StartupDojoPlus = () => {
  const benefits = [
    "Focused mentorship and guidance from industry experts",
    "Funding opportunities for top-performing teams",
    "Fast-track application consideration for Sheraa's S3 Incubator",
    "Showcase opportunities at 'Seal the Deal' pitch event",
    "Strengthened readiness for next-stage incubation or acceleration"
  ];

  const timeline = [
    { title: "Applications Open", date: "May 1, 2025" },
    { title: "Selection Process", date: "June 1-15, 2025" },
    { title: "Program Kickoff", date: "July 1, 2025" },
    { title: "Intensive Sprint", date: "July 1-31, 2025" },
    { title: "Final Pitch Event", date: "August 5, 2025" }
  ];

  const pastParticipants = [
    { 
      name: "EcoGrow",
      description: "Vertical farming solution for urban environments",
      achievement: "Secured AED 500,000 in seed funding"
    },
    { 
      name: "LearnArabic",
      description: "Interactive language learning platform for Arabic",
      achievement: "Partnership with 5 educational institutions"
    },
    { 
      name: "MedConnect",
      description: "Healthcare appointment and follow-up system",
      achievement: "Selected for S3 Incubator program"
    }
  ];

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

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full inline-block mb-4 font-medium text-sm">
              Start Young
            </div>
            <h1 className="text-4xl font-bold text-sheraa-primary mb-4">Startup Dojo+</h1>
            <p className="text-lg text-gray-600 mb-6">
              An intensive accelerator program for top-performing student teams, offering bespoke attention to help validate and build 
              business concepts further. Designed for high-potential student/alumni startups, often selected from Startup Dojo or 
              other feeder programs, Startup Dojo+ provides the springboard to take your innovative idea to the next level.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center gap-3">
                <Calendar className="h-5 w-5 text-blue-500" />
                <div>
                  <div className="text-sm text-gray-500">Duration</div>
                  <div className="font-medium">4 Weeks</div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center gap-3">
                <Clock className="h-5 w-5 text-blue-500" />
                <div>
                  <div className="text-sm text-gray-500">Format</div>
                  <div className="font-medium">Intensive Acceleration</div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center gap-3">
                <Users className="h-5 w-5 text-blue-500" />
                <div>
                  <div className="text-sm text-gray-500">Target Audience</div>
                  <div className="font-medium">Student Entrepreneurs</div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center gap-3">
                <Award className="h-5 w-5 text-blue-500" />
                <div>
                  <div className="text-sm text-gray-500">Focus</div>
                  <div className="font-medium">Market Validation</div>
                </div>
              </div>
            </div>
            
            <GradientButton asChild size="lg" className="mb-4 w-full sm:w-auto">
              <Link to="/eligibility">Apply to Startup Dojo+</Link>
            </GradientButton>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Startup Dojo+ Participants"
                className="w-full h-full object-cover mix-blend-overlay opacity-70"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                <div className="text-2xl md:text-3xl font-bold mb-4 text-center">Accelerate Your Student Venture</div>
                <div className="text-center text-white/70 mb-4">Join the next cohort of top student entrepreneurs</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* About the Program */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">About Startup Dojo+</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="text-gray-600 mb-4">
                Startup Dojo+ is an intensive accelerator program tailored for outstanding student and alumni teams that have 
                demonstrated significant potential through Startup Dojo or similar early-stage initiatives. This exclusive program 
                takes the most promising concepts and provides concentrated support to refine business models, validate market 
                fit, and prepare for successful launch or further acceleration.
              </p>
              <p className="text-gray-600 mb-4">
                Participants represent diverse nationalities and sectors, from AgriTech and EdTech to AI and HealthTech, united 
                by their innovative approaches to solving real-world challenges. The program structure emphasizes hands-on learning, 
                rapid iteration, and direct connection with industry experts and potential customers.
              </p>
              <p className="text-gray-600">
                By the end of the four-week intensive period, teams will have significantly advanced their business model, refined 
                their product design, developed stronger financial projections, and crafted a compelling investor pitch. Top teams 
                will be positioned for potential funding opportunities and fast-track consideration for Sheraa's flagship S3 Incubator.
              </p>
            </div>
            <div>
              <Card className="border-none bg-blue-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Key Focus Areas</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      <span>Business model refinement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      <span>Market validation techniques</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      <span>Product design optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      <span>Financial planning & projections</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      <span>Pitch development & delivery</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      <span>Customer acquisition strategies</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>

        {/* Program Benefits */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Program Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6">What You'll Gain</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-white/20 rounded-full p-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Program Timeline</h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 relative">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 font-bold">
                        {index + 1}
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="absolute top-8 bottom-0 left-4 w-0.5 -ml-px bg-blue-100"></div>
                      )}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">{item.title}</h4>
                      <p className="text-gray-500">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Success Stories */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastParticipants.map((participant, index) => (
              <Card key={index} className="border hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{participant.name}</h3>
                  <p className="text-gray-600 mb-4">{participant.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">{participant.achievement}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Eligibility & Application */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Eligibility & Application</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Who Should Apply</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Standout teams from Sheraa's Startup Dojo or similar early-stage programs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>University students or recent graduates (within 2 years) with validated business concepts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Teams with innovative solutions addressing clear market needs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Ventures with potential for scalability and significant impact</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Teams committed to full participation in the intensive 4-week program</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Application Process</h3>
                  <ol className="space-y-4 list-decimal pl-5">
                    <li className="text-gray-600">
                      <span className="font-medium text-gray-800">Submit Online Application:</span> Complete the application form with details about your team, concept, and progress to date.
                    </li>
                    <li className="text-gray-600">
                      <span className="font-medium text-gray-800">Idea Review:</span> Sheraa team evaluates applications based on innovation, feasibility, and team capability.
                    </li>
                    <li className="text-gray-600">
                      <span className="font-medium text-gray-800">Interview:</span> Shortlisted teams participate in a virtual or in-person interview.
                    </li>
                    <li className="text-gray-600">
                      <span className="font-medium text-gray-800">Final Selection:</span> Top teams are invited to join the program.
                    </li>
                  </ol>
                  <div className="mt-6 text-center">
                    <Button asChild>
                      <Link to="/eligibility">Check Your Eligibility</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 md:p-12 rounded-2xl"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Student Venture?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Turn your innovative idea into a market-ready business with dedicated support from Sheraa's Startup Dojo+ program. 
            Applications for the next cohort are now open.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton asChild size="lg">
              <Link to="/eligibility">Apply Now</Link>
            </GradientButton>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact?inquiry=startup-dojo-plus">Contact for More Information</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default StartupDojoPlus;
