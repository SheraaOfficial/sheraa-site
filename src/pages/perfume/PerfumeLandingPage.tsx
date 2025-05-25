
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Sparkles, Heart, Gift, Star, ArrowRight, 
  ShoppingBag, Flower, Crown, Zap 
} from "lucide-react";

const PerfumeLandingPage: React.FC = () => {
  const collections = [
    {
      name: "Entrepreneurial Spirit",
      description: "A bold, inspiring fragrance for visionary leaders",
      notes: "Bergamot, Cedar, Amber",
      price: "AED 299",
      image: "🌟",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      name: "Innovation Essence", 
      description: "Fresh and dynamic, capturing the energy of creation",
      notes: "Citrus, Mint, Sandalwood",
      price: "AED 249", 
      image: "💡",
      color: "from-blue-500/20 to-teal-500/20"
    },
    {
      name: "Success Symphony",
      description: "Luxurious and sophisticated for celebrating achievements", 
      notes: "Rose, Oud, Vanilla",
      price: "AED 399",
      image: "🏆",
      color: "from-gold/20 to-yellow-500/20"
    }
  ];

  const features = [
    {
      icon: Crown,
      title: "Premium Quality",
      description: "Crafted with finest ingredients from around the world"
    },
    {
      icon: Sparkles,
      title: "Unique Blends", 
      description: "Exclusive fragrances inspired by entrepreneurial journey"
    },
    {
      icon: Gift,
      title: "Perfect Gifts",
      description: "Elegant packaging for special occasions and milestones"
    },
    {
      icon: Zap,
      title: "Long Lasting",
      description: "Premium formulation for all-day fragrance experience"
    }
  ];

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-pink-50 via-purple-50/30 to-blue-50/30 dark:from-pink-900/10 dark:via-purple-900/10 dark:to-blue-900/10">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-400/10 rounded-full blur-2xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 border border-pink-200 mb-6">
              <Flower className="w-5 h-5 text-pink-600" />
              <span className="text-sm font-medium text-pink-700">Luxury Fragrance Collection</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-500 to-blue-600 bg-clip-text text-transparent leading-tight">
              Sharjah Perfume Collection
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our exclusive luxury fragrance collection, inspired by the entrepreneurial spirit 
              of Sharjah. Each scent tells a story of innovation, success, and timeless elegance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Shop Collection
              </Button>
              <Button asChild variant="outline" size="lg" className="border-pink-600/30 text-pink-600 hover:bg-pink-50">
                <Link to="/perfume/about">Learn Our Story</Link>
              </Button>
            </div>
          </motion.div>

          {/* Features Section */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="group"
                >
                  <Card className="h-full border border-pink-100 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-pink-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <feature.icon className="w-8 h-8 text-pink-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Collections Section */}
          <section className="mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-center mb-12"
            >
              Our Signature Collections
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {collections.map((collection, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="group"
                >
                  <Card className="h-full border border-gray-100 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${collection.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    <CardContent className="p-8 relative z-10 text-center">
                      <div className="text-6xl mb-6">{collection.image}</div>
                      <Badge className="mb-4 bg-pink-100 text-pink-700">{collection.price}</Badge>
                      <h3 className="text-2xl font-bold mb-3">{collection.name}</h3>
                      <p className="text-gray-600 mb-4">{collection.description}</p>
                      <div className="text-sm text-gray-500 mb-6">
                        <strong>Notes:</strong> {collection.notes}
                      </div>
                      <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                        <Heart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Gift Sets Section */}
          <section className="mb-20">
            <Card className="bg-gradient-to-r from-pink-600 to-purple-600 text-white border-none overflow-hidden">
              <div className="absolute inset-0 bg-black/20" />
              <CardContent className="p-12 relative z-10 text-center">
                <Gift className="w-16 h-16 mx-auto mb-6 text-white/90" />
                <h2 className="text-3xl font-bold mb-4">Exclusive Gift Sets</h2>
                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  Perfect for celebrating milestones, achievements, or showing appreciation 
                  to your team and partners.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="bg-white text-pink-600 hover:bg-gray-50">
                    <Star className="w-4 h-4 mr-2" />
                    View Gift Sets
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link to="/perfume/pricing">See Pricing</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-3xl p-8 border border-pink-200/50">
              <h2 className="text-3xl font-bold mb-4">Experience Luxury</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Discover the perfect fragrance that captures your entrepreneurial spirit 
                and celebrates your journey to success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Shop Now
                </Button>
                <Button asChild variant="outline" size="lg" className="border-pink-600/30 text-pink-600 hover:bg-pink-50">
                  <Link to="/perfume/gallery" className="flex items-center gap-2">
                    View Gallery
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PerfumeLandingPage;
