
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Star, Heart, Gift, Sparkles, ShoppingBag, Camera, 
  Award, MapPin, Clock, Users, ArrowRight, Crown,
  Flower, Gem, Sun, Moon
} from "lucide-react";

const PerfumePage: React.FC = () => {
  const features = [
    {
      icon: <Crown className="w-6 h-6" />,
      title: "Signature Scent",
      description: "Exclusively crafted to represent Sharjah's entrepreneurial spirit"
    },
    {
      icon: <Gem className="w-6 h-6" />,
      title: "Limited Edition",
      description: "Only 1,000 bottles available worldwide"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Premium Quality",
      description: "Finest ingredients sourced from around the world"
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Perfect Gift",
      description: "Commemorate achievements and milestones"
    }
  ];

  const notes = [
    {
      time: "Top Notes",
      icon: <Sun className="w-5 h-5" />,
      scents: ["Bergamot", "Pink Pepper", "Cardamom"],
      description: "Energizing and bold, like the spark of a new idea"
    },
    {
      time: "Heart Notes", 
      icon: <Heart className="w-5 h-5" />,
      scents: ["Rose", "Jasmine", "Oud"],
      description: "The passionate heart of entrepreneurship"
    },
    {
      time: "Base Notes",
      icon: <Moon className="w-5 h-5" />,
      scents: ["Sandalwood", "Amber", "Musk"],
      description: "Lasting foundation, like a successful venture"
    }
  ];

  return (
    <MainLayout
      seoTitle="Sheraa Signature Perfume - Limited Edition Entrepreneurial Fragrance"
      seoDescription="Discover Sheraa's exclusive signature perfume - a limited edition fragrance capturing the essence of Sharjah's entrepreneurial spirit. Only 1,000 bottles available."
      seoKeywords="Sheraa perfume, Sharjah fragrance, entrepreneurial scent, limited edition perfume, signature fragrance"
    >
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-black">
        {/* Hero Section */}
        <section className="pt-24 pb-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-64 h-64 bg-rose-200/30 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 dark:bg-rose-900/30 border border-rose-200 dark:border-rose-700 mb-6">
                  <Sparkles className="w-5 h-5 text-rose-600" />
                  <span className="text-sm font-bold text-rose-600 dark:text-rose-400">LIMITED EDITION</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-rose-600 via-amber-600 to-rose-600 bg-clip-text text-transparent">
                    Sheraa Signature
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">Perfume</span>
                </h1>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Capture the essence of entrepreneurial success with our exclusive signature fragrance. 
                  A unique blend that embodies the innovation, passion, and determination of Sharjah's startup ecosystem.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <Badge className="bg-rose-100 text-rose-800 border-rose-200">
                    Only 1,000 Bottles
                  </Badge>
                  <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                    50ml Eau de Parfum
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-800 border-purple-200">
                    Unisex Fragrance
                  </Badge>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700">
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Order Now - $299
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/perfume/gallery" className="flex items-center gap-2">
                      <Camera className="w-5 h-5" />
                      View Gallery
                    </Link>
                  </Button>
                </div>
              </motion.div>

              {/* Product Image */}
              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative mx-auto w-80 h-96 bg-gradient-to-br from-rose-100 to-amber-100 rounded-3xl shadow-2xl flex items-center justify-center">
                  <div className="absolute inset-4 bg-white rounded-2xl shadow-inner flex items-center justify-center">
                    <div className="text-6xl">🌹</div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center shadow-lg">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-4 left-4 text-2xl"
                >
                  ✨
                </motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  className="absolute bottom-4 right-4 text-2xl"
                >
                  🌟
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Sheraa Signature?</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                More than just a fragrance - it's a statement of ambition, success, and the entrepreneurial journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow group">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-rose-100 to-amber-100 dark:from-rose-900/30 dark:to-amber-900/30 rounded-full flex items-center justify-center mb-4 text-rose-600 group-hover:scale-110 transition-transform">
                        {feature.icon}
                      </div>
                      <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Fragrance Notes */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Fragrance Profile</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A complex composition that evolves throughout the day, just like the entrepreneurial journey.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-8">
              {notes.map((note, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-amber-500 rounded-full flex items-center justify-center text-white shadow-lg">
                            {note.icon}
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2">{note.time}</h3>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {note.scents.map((scent, idx) => (
                              <Badge key={idx} variant="outline" className="bg-rose-50 border-rose-200 text-rose-700">
                                {scent}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 italic">{note.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-rose-600 via-amber-600 to-rose-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Star className="w-16 h-16 mx-auto mb-6 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Own a Piece of Entrepreneurial History
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Join the exclusive club of entrepreneurs who wear success. Limited to 1,000 bottles worldwide.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-rose-600 hover:bg-gray-100">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Order Your Bottle - $299
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link to="/perfume/about" className="flex items-center gap-2">
                    <ArrowRight className="w-5 h-5" />
                    Learn the Story
                  </Link>
                </Button>
              </div>
              
              <div className="mt-8 flex items-center justify-center gap-4 text-sm opacity-80">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Limited Time Offer
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Only 247 Left
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Worldwide Shipping
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default PerfumePage;
