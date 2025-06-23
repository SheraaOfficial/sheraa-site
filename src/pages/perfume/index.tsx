
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Users } from "lucide-react";

const PerfumePage: React.FC = () => {
  const features = [
    {
      title: "Artisanal Craftsmanship",
      description: "Meticulously created by master perfumers using traditional techniques"
    },
    {
      title: "Cultural Heritage",
      description: "Inspired by Sharjah's rich entrepreneurial legacy and architectural beauty"
    },
    {
      title: "Limited Edition",
      description: "Only 1,000 bottles available worldwide, each numbered and authenticated"
    },
    {
      title: "Sustainable Luxury",
      description: "Ethically sourced ingredients and eco-conscious packaging"
    }
  ];

  const notes = [
    {
      time: "Top Notes",
      scents: ["Bergamot", "Pink Pepper", "Cardamom"],
      description: "Bright and invigorating, like dawn over Sharjah's horizon"
    },
    {
      time: "Heart Notes", 
      scents: ["Rose", "Jasmine", "Oud"],
      description: "Rich and complex, embodying passion and tradition"
    },
    {
      time: "Base Notes",
      scents: ["Sandalwood", "Amber", "Musk"],
      description: "Warm and grounding, like the enduring spirit of enterprise"
    }
  ];

  return (
    <MainLayout
      seoTitle="Sharjah Essence - Limited Edition Luxury Fragrance"
      seoDescription="Experience Sharjah Essence, an exclusive luxury fragrance capturing the cultural heritage and entrepreneurial spirit of Sharjah. Limited to 1,000 bottles worldwide."
      seoKeywords="Sharjah perfume, luxury fragrance, limited edition, cultural heritage, artisanal perfume"
    >
      <div className="min-h-screen bg-luxury-cream">
        {/* Hero Section */}
        <section className="pt-24 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full bg-gradient-to-br from-luxury-beige via-transparent to-luxury-stone" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="inline-block"
                  >
                    <span className="text-sm tracking-[0.2em] uppercase text-luxury-charcoal/70 font-light">
                      Limited Edition
                    </span>
                  </motion.div>
                  
                  <h1 className="text-4xl md:text-6xl font-serif text-luxury-charcoal leading-tight">
                    <span className="block">Sharjah</span>
                    <span className="block text-luxury-gold italic font-light">Essence</span>
                  </h1>
                  
                  <p className="text-xl text-luxury-charcoal/80 font-light leading-relaxed">
                    A refined olfactory journey through Sharjah's cultural tapestry. 
                    Where ancient traditions meet contemporary innovation in perfect harmony.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Badge className="bg-luxury-stone/20 text-luxury-charcoal border-luxury-stone/30 font-light">
                      50ml Eau de Parfum
                    </Badge>
                    <Badge className="bg-luxury-gold/20 text-luxury-charcoal border-luxury-gold/30 font-light">
                      Unisex Fragrance
                    </Badge>
                    <Badge className="bg-luxury-charcoal/10 text-luxury-charcoal border-luxury-charcoal/20 font-light">
                      Only 1,000 Bottles
                    </Badge>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-luxury-charcoal hover:bg-luxury-charcoal/90 text-luxury-cream font-light tracking-wide"
                  >
                    Reserve Your Bottle - AED 800
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    asChild
                    className="border-luxury-charcoal text-luxury-charcoal hover:bg-luxury-charcoal hover:text-luxury-cream font-light tracking-wide"
                  >
                    <Link to="/perfume/gallery">
                      Explore Gallery
                    </Link>
                  </Button>
                </div>
              </motion.div>

              {/* Product Visualization */}
              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative flex items-center justify-center"
              >
                <div className="relative w-80 h-96 bg-luxury-beige/30 rounded-sm shadow-2xl flex items-center justify-center">
                  <div className="w-64 h-80 bg-gradient-to-b from-luxury-gold/20 to-luxury-charcoal/10 rounded-sm flex items-center justify-center">
                    <div className="w-32 h-48 bg-luxury-charcoal/80 rounded-sm shadow-inner" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-luxury-beige/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-luxury-charcoal">Exceptional by Design</h2>
              <div className="w-24 h-px bg-luxury-gold mx-auto" />
              <p className="text-luxury-charcoal/80 font-light max-w-2xl mx-auto">
                Every element crafted with intention, every note selected for its significance in telling the story of Sharjah's entrepreneurial spirit.
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
                  <Card className="h-full text-center hover:shadow-lg transition-shadow border-luxury-stone/20 bg-luxury-cream/80">
                    <CardContent className="p-6 space-y-4">
                      <div className="w-16 h-16 mx-auto bg-luxury-beige/50 rounded-full flex items-center justify-center border border-luxury-gold/20">
                        <div className="w-6 h-6 border border-luxury-gold rounded-full" />
                      </div>
                      <h3 className="font-serif text-lg text-luxury-charcoal">{feature.title}</h3>
                      <p className="text-luxury-charcoal/70 text-sm font-light leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Fragrance Notes Preview */}
        <section className="py-16 bg-luxury-cream">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-luxury-charcoal">Olfactory Journey</h2>
              <div className="w-24 h-px bg-luxury-gold mx-auto" />
              <p className="text-luxury-charcoal/80 font-light max-w-2xl mx-auto">
                A sophisticated composition that unfolds in layers, revealing new depths with each encounter.
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
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow border-luxury-stone/20 bg-luxury-beige/30">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-luxury-gold/20 border border-luxury-gold/30 rounded-full flex items-center justify-center">
                            <span className="text-xs tracking-wider uppercase text-luxury-charcoal font-light">
                              {note.time.split(' ')[0]}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex-1 space-y-3">
                          <h3 className="text-2xl font-serif text-luxury-charcoal">{note.time}</h3>
                          <div className="flex flex-wrap gap-2">
                            {note.scents.map((scent, idx) => (
                              <Badge 
                                key={idx} 
                                variant="outline" 
                                className="bg-luxury-cream border-luxury-stone/30 text-luxury-charcoal font-light"
                              >
                                {scent}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-luxury-charcoal/70 font-light italic">{note.description}</p>
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
        <section className="py-16 bg-luxury-charcoal text-luxury-cream">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto space-y-8"
            >
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif">
                  Reserve Your Essence
                </h2>
                <div className="w-24 h-px bg-luxury-gold mx-auto" />
                <p className="text-xl font-light text-luxury-cream/80 leading-relaxed">
                  Join an exclusive circle of individuals who appreciate the finer details of craftsmanship, 
                  heritage, and the subtle art of distinction.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-charcoal font-light tracking-wide"
                >
                  Reserve Your Bottle - AED 800
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-luxury-cream text-luxury-cream hover:bg-luxury-cream hover:text-luxury-charcoal font-light tracking-wide" 
                  asChild
                >
                  <Link to="/perfume/about" className="flex items-center gap-2">
                    Discover the Story
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-8 text-sm text-luxury-cream/60 font-light pt-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Limited Time
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  247 Remaining
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
