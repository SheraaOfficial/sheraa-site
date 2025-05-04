
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { GradientButton } from '@/components/ui/gradient-button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Calendar, Clock, BookOpen, Users, Rocket, Check, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const StartupDojoPage = () => {
  const backgroundStyle = {
    background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 1)), url('/images/startup-dojo-workshop.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.12
  };

  const testimonials = [
    {
      name: "Maryam Al Hammadi",
      role: "Founder, EcoSense",
      university: "American University of Sharjah",
      quote: "Startup Dojo gave me the structure and mentorship I needed to transform my sustainability idea into a viable business model. The hands-on approach and supportive community were invaluable.",
      image: "/placeholder.svg"
    },
    {
      name: "Ahmed Mahmoud",
      role: "Co-founder, LearnRight",
      university: "University of Sharjah",
      quote: "The program challenged us to validate our assumptions through real customer interviews. This completely changed our direction and helped us find true product-market fit.",
      image: "/placeholder.svg"
    },
    {
      name: "Priya Shah",
      role: "Founder, MedConnect",
      university: "Zayed University",
      quote: "From ideation to pitching in front of investors, Startup Dojo provided a comprehensive roadmap for launching our healthcare platform. The mentors pushed us to think bigger.",
      image: "/placeholder.svg"
    }
  ];

  const programWeeks = [
    { 
      week: "Week 1-2", 
      title: "Ideation & Problem Validation", 
      description: "Identify key problems and validate your target market through customer interviews and research methodologies."
    },
    { 
      week: "Week 3-4", 
      title: "Solution Development", 
      description: "Develop your minimum viable product (MVP) and create a solution that truly addresses your validated problem."
    },
    { 
      week: "Week 5-6", 
      title: "Business Model & Market Strategy", 
      description: "Design your revenue model, pricing strategy, and go-to-market plan with guidance from industry experts."
    },
    { 
      week: "Week 7-8", 
      title: "Pitch Development & Demo Day", 
      description: "Refine your pitch, prepare financial projections, and showcase your startup to potential investors and partners."
    }
  ];

  return (
    <MainLayout backgroundStyle={backgroundStyle}>
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-sheraa-light px-3 py-1 rounded-full text-sheraa-primary text-sm font-medium mb-4">
                Start Young Program
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-sheraa-primary mb-6">Startup Dojo</h1>
              <p className="text-xl text-gray-600 mb-6">
                Transform your ideas into viable business ventures through hands-on learning and expert mentorship.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-5 w-5" />
                  <span>8-week program</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-5 w-5" />
                  <span>Summer cohorts</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="h-5 w-5" />
                  <span>For university students</span>
                </div>
              </div>
              <p className="text-gray-600 mb-8">
                Startup Dojo is an intensive 8-week summer incubation program focused on transforming student ideas into viable 
                entrepreneurial solutions. Participants gain real-world experience in starting and running a business through 
                hands-on training, structured workshops, and personalized mentorship.
              </p>
              <div className="flex flex-wrap gap-4">
                <GradientButton asChild size="lg">
                  <Link to="/eligibility">Apply Now</Link>
                </GradientButton>
                <Button asChild variant="outline" size="lg">
                  <Link to="/programs/start-young">Back to Start Young</Link>
                </Button>
              </div>
            </div>
            <div className="bg-sheraa-light p-6 rounded-xl">
              <div className="aspect-video bg-white rounded-lg overflow-hidden">
                <iframe 
                  className="w-full h-full" 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="Startup Dojo Program Overview" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Program Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programWeeks.map((week, idx) => (
              <Card key={idx} className={`border overflow-hidden h-full ${idx === 0 ? 'bg-sheraa-light/30' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sheraa-primary text-white font-bold mr-3">
                      {idx + 1}
                    </div>
                    <h3 className="font-semibold text-lg">{week.week}</h3>
                  </div>
                  <h4 className="text-sheraa-primary font-medium mb-2">{week.title}</h4>
                  <p className="text-sm text-gray-600">{week.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who is Startup Dojo For?</h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-sheraa-light p-1 rounded-full">
                      <Check className="h-4 w-4 text-sheraa-primary" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium mb-1">University students & recent graduates</h3>
                    <p className="text-sm text-gray-600">From any university in the UAE with promising startup ideas</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-sheraa-light p-1 rounded-full">
                      <Check className="h-4 w-4 text-sheraa-primary" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium mb-1">Aspiring Emirati entrepreneurs</h3>
                    <p className="text-sm text-gray-600">Strong participation from Emirati youth (81% in 2023)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-sheraa-light p-1 rounded-full">
                      <Check className="h-4 w-4 text-sheraa-primary" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium mb-1">Diverse academic backgrounds</h3>
                    <p className="text-sm text-gray-600">Students from various disciplines can apply their unique skills</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-sheraa-light p-1 rounded-full">
                      <Check className="h-4 w-4 text-sheraa-primary" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium mb-1">Idea-stage entrepreneurs</h3>
                    <p className="text-sm text-gray-600">Those with innovative concepts needing guidance to validate and develop</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-sheraa-light p-6 rounded-lg mb-6">
                <h3 className="font-semibold mb-2">Eligibility Requirements</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                  <li>Current university student or graduated within the last 2 years</li>
                  <li>Based in the UAE with ability to attend in-person sessions</li>
                  <li>Idea or early concept stage startup</li>
                  <li>Commitment to attending all program sessions</li>
                  <li>Team of 2-4 members (recommended but not required)</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Program Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="border hover:shadow-md transition">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-3">
                      <BookOpen className="h-5 w-5 text-sheraa-primary mr-2" />
                      <h3 className="font-semibold">Expert Workshops</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Practical sessions on business model design, customer validation, marketing, and pitching led by industry professionals.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border hover:shadow-md transition">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-3">
                      <Users className="h-5 w-5 text-sheraa-primary mr-2" />
                      <h3 className="font-semibold">1:1 Mentorship</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Personalized guidance from experienced entrepreneurs and industry experts tailored to your specific venture.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border hover:shadow-md transition">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-3">
                      <Rocket className="h-5 w-5 text-sheraa-primary mr-2" />
                      <h3 className="font-semibold">Networking</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Connect with fellow entrepreneurs, investors, and ecosystem partners through organized events and meetups.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border hover:shadow-md transition">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-3">
                      <Calendar className="h-5 w-5 text-sheraa-primary mr-2" />
                      <h3 className="font-semibold">Demo Day</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Showcase your venture to investors, partners, and the community at the culminating event.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border hover:shadow-md transition sm:col-span-2">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-3">
                      <Calendar className="h-5 w-5 text-sheraa-primary mr-2" />
                      <h3 className="font-semibold">Potential Funding & Support</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Top-performing teams may receive grants, commercial licenses, and fast-track consideration for advanced Sheraa programs like Startup Dojo+ and S3 Incubator.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="border overflow-hidden h-full">
                    <CardContent className="p-0 h-full">
                      <div className="grid grid-cols-1 sm:grid-cols-3 h-full">
                        <div className="aspect-square sm:aspect-auto sm:h-full bg-gray-100">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6 sm:col-span-2 flex flex-col">
                          <blockquote className="text-gray-600 text-sm italic mb-4 flex-grow">
                            "{testimonial.quote}"
                          </blockquote>
                          <div>
                            <h4 className="font-semibold">{testimonial.name}</h4>
                            <p className="text-sm text-sheraa-primary">{testimonial.role}</p>
                            <p className="text-xs text-gray-500">{testimonial.university}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="static translate-y-0 mr-2" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </motion.div>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Application Process</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              
              <div className="relative pl-12 pb-8">
                <div className="absolute left-0 bg-sheraa-primary text-white w-8 h-8 rounded-full flex items-center justify-center">1</div>
                <h3 className="text-xl font-semibold mb-2">Submit Your Application</h3>
                <p className="text-gray-600">
                  Complete the online application form with details about your team, idea, and motivation. 
                  Be clear and concise about the problem you're solving and your proposed solution.
                </p>
              </div>
              
              <div className="relative pl-12 pb-8">
                <div className="absolute left-0 bg-sheraa-primary text-white w-8 h-8 rounded-full flex items-center justify-center">2</div>
                <h3 className="text-xl font-semibold mb-2">Initial Screening</h3>
                <p className="text-gray-600">
                  Applications are reviewed by the Sheraa team based on innovation, potential impact, 
                  team composition, and feasibility. Selected teams advance to interviews.
                </p>
              </div>
              
              <div className="relative pl-12 pb-8">
                <div className="absolute left-0 bg-sheraa-primary text-white w-8 h-8 rounded-full flex items-center justify-center">3</div>
                <h3 className="text-xl font-semibold mb-2">Interview Round</h3>
                <p className="text-gray-600">
                  Shortlisted teams are invited for interviews to discuss their ideas in depth, 
                  demonstrate their understanding of the problem, and showcase their commitment.
                </p>
              </div>
              
              <div className="relative pl-12">
                <div className="absolute left-0 bg-sheraa-primary text-white w-8 h-8 rounded-full flex items-center justify-center">4</div>
                <h3 className="text-xl font-semibold mb-2">Final Selection & Onboarding</h3>
                <p className="text-gray-600">
                  Selected teams receive acceptance offers and begin the onboarding process. 
                  Prepare for an intensive and transformative journey in the Startup Dojo program.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-sheraa-primary to-sheraa-secondary p-10 rounded-xl text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Entrepreneurial Journey?</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Join Sheraa's Startup Dojo program to transform your idea into a viable business with expert guidance and support.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <GradientButton asChild size="lg" className="bg-white text-sheraa-primary">
                <Link to="/eligibility">Apply Now</Link>
              </GradientButton>
              <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link to="/contact?inquiry=startup-dojo" className="flex items-center">
                  Contact the Program Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default StartupDojoPage;
