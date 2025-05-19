
import React, { useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Sparkles } from '@/components/ui/sparkles';
import { Button } from '@/components/ui/button';
import { Calendar, Users, MapPin, Info, ArrowRight, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

// Form schema
const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  organization: z.string().min(2, "Organization must be at least 2 characters"),
  role: z.string().min(2, "Role must be at least 2 characters"),
  phone: z.string().optional(),
  passType: z.enum(["standard", "premium", "executive", "vip"]),
  quantity: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Please enter a valid quantity",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const passes = [
  {
    id: "standard",
    name: "Standard Pass",
    price: "AED 199",
    color: "bg-blue-500",
    description: "Access to all zones, workshops, and basic networking opportunities."
  },
  {
    id: "premium",
    name: "Premium Pass",
    price: "AED 499",
    color: "bg-purple-600",
    popular: true,
    description: "VIP lounge access, exclusive networking events, priority seating."
  },
  {
    id: "executive",
    name: "Executive Pass",
    price: "AED 999",
    color: "bg-amber-500",
    description: "Private meeting rooms, meet & greet with speakers, investor matchmaking."
  },
  {
    id: "vip",
    name: "VIP Pass",
    price: "AED 1,499",
    color: "bg-emerald-600",
    description: "Backstage access, dedicated concierge, private dinner with industry leaders."
  }
];

const SEFRegisterPage: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedTab, setSelectedTab] = useState("individual");
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      organization: "",
      role: "",
      phone: "",
      passType: "premium",
      quantity: "1",
    },
  });

  const selectedPass = passes.find(pass => pass.id === form.watch("passType"));
  const quantity = parseInt(form.watch("quantity") || "1");
  const subtotal = selectedPass ? parseInt(selectedPass.price.replace(/[^0-9]/g, "")) * quantity : 0;
  const vat = subtotal * 0.05; // 5% VAT
  const total = subtotal + vat;
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Registration Successful!",
        description: `You've been registered for SEF'26 with ${data.quantity} ${data.passType} ${parseInt(data.quantity) > 1 ? 'passes' : 'pass'}. Check your email for confirmation details.`,
      });
      setIsSubmitting(false);
      form.reset();
    }, 1500);
  };

  return (
    <MainLayout
      backgroundStyle={{
        background: "linear-gradient(to right, rgba(110, 89, 165, 0.1), rgba(26, 31, 44, 0.1))",
      }}
    >
      <section className="container mx-auto py-16 md:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Sparkles>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sheraa-primary mb-4">
                Register for SEF'26
              </h1>
            </Sparkles>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for the region's largest entrepreneurship festival - January 31st - February 1st, 2026
            </p>
          </motion.div>
        </div>

        {/* Registration Tabs */}
        <div className="max-w-3xl mx-auto mb-8">
          <Tabs defaultValue="individual" onValueChange={setSelectedTab}>
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger value="individual">Individual Registration</TabsTrigger>
              <TabsTrigger value="group">Group Registration</TabsTrigger>
            </TabsList>
            
            <TabsContent value="individual">
              <div className="text-center mb-6">
                <h2 className="text-xl font-medium text-gray-800">Individual Registration</h2>
                <p className="text-gray-600">Register for yourself or someone else</p>
              </div>
            </TabsContent>
            
            <TabsContent value="group">
              <div className="text-center mb-6">
                <h2 className="text-xl font-medium text-gray-800">Group Registration</h2>
                <p className="text-gray-600">Register 5+ attendees and receive group discounts</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-sheraa-soft p-8 border border-gray-100"
          >
            <h2 className="text-2xl font-semibold text-sheraa-primary mb-6">Secure Your Spot</h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email address" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="organization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organization</FormLabel>
                      <FormControl>
                        <Input placeholder="Company or institution" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role / Position</FormLabel>
                      <FormControl>
                        <Input placeholder="Your role" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="py-2">
                  <h3 className="text-lg font-semibold mb-4">Select Pass Type</h3>
                  
                  <FormField
                    control={form.control}
                    name="passType"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="grid grid-cols-1 gap-3"
                          >
                            {passes.map((pass) => (
                              <div
                                key={pass.id}
                                className={cn(
                                  "flex items-center space-x-3 rounded-lg border p-4 transition-all",
                                  field.value === pass.id && "border-[#9b87f5] bg-[#9b87f5]/5"
                                )}
                              >
                                <RadioGroupItem value={pass.id} id={pass.id} className="border-gray-300" />
                                <div className="flex-1">
                                  <div className="flex justify-between">
                                    <label htmlFor={pass.id} className="font-medium cursor-pointer">
                                      {pass.name}
                                      {pass.popular && (
                                        <span className="ml-2 inline-block bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded-full">
                                          Popular
                                        </span>
                                      )}
                                    </label>
                                    <span className="font-semibold">{pass.price}</span>
                                  </div>
                                  <p className="text-sm text-gray-500 mt-1">{pass.description}</p>
                                </div>
                              </div>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Passes</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          min="1" 
                          max={selectedTab === "group" ? "20" : "4"} 
                          placeholder="1" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                      {parseInt(field.value) > 4 && selectedTab === "individual" && (
                        <p className="text-orange-600 text-sm mt-1">
                          For 5+ passes, switch to Group Registration for discounted rates
                        </p>
                      )}
                    </FormItem>
                  )}
                />
                
                {/* Order Summary */}
                <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-3">Order Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>{selectedPass?.name} x {quantity}</span>
                      <span>AED {subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>VAT (5%)</span>
                      <span>AED {vat.toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-2 mt-2 flex justify-between font-semibold">
                      <span>Total</span>
                      <span>AED {total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Processing..." : "Complete Registration"}
                </Button>
                
                <p className="text-xs text-center text-gray-500 mt-4">
                  By registering, you agree to our <Link to="/terms" className="text-sheraa-primary hover:underline">Terms of Service</Link> and <Link to="/privacy-policy" className="text-sheraa-primary hover:underline">Privacy Policy</Link>.
                </p>
              </form>
            </Form>
          </motion.div>
          
          {/* Event Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-8"
          >
            {/* About SEF */}
            <div className="bg-white rounded-3xl shadow-sheraa-soft p-8 border border-gray-100">
              <h2 className="text-2xl font-semibold text-sheraa-primary mb-6">About the Event</h2>
              
              <p className="text-gray-600 mb-6">
                The Sharjah Entrepreneurship Festival is the region's largest gathering of entrepreneurial minds. With over 14,000 attendees, 300+ global speakers, and 250+ activities, SEF'26 unites visionaries, investors, innovators, and aspiring changemakers from across the globe.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-sheraa-teal" />
                  <span className="text-gray-700">January 31st - February 1st, 2026</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-sheraa-teal" />
                  <span className="text-gray-700">Sharjah Research, Technology, and Innovation Park (SRTIP)</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-sheraa-teal" />
                  <span className="text-gray-700">Expected attendance: 14,000+</span>
                </div>
              </div>
            </div>
            
            {/* Attendance Benefits */}
            <div className="bg-gradient-purple/10 backdrop-blur-sm rounded-3xl shadow-sheraa-soft p-8 border border-purple-100">
              <h2 className="text-2xl font-semibold text-sheraa-primary mb-6">Pass Comparison</h2>
              
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-100 p-1.5 rounded-full">
                    <BadgeCheck className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">Standard Pass (AED 199)</span>
                    <p className="text-gray-600 text-sm mt-1">Access to all zones, workshops, digital program guide. Perfect for students and first-time attendees.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-purple-100 p-1.5 rounded-full">
                    <BadgeCheck className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">Premium Pass (AED 499)</span>
                    <p className="text-gray-600 text-sm mt-1">All Standard features plus VIP lounge access, exclusive networking events, and priority seating at keynotes.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-amber-100 p-1.5 rounded-full">
                    <BadgeCheck className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">Executive Pass (AED 999)</span>
                    <p className="text-gray-600 text-sm mt-1">All Premium features plus meet & greet with speakers, private meeting rooms, and investor matchmaking.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-emerald-100 p-1.5 rounded-full">
                    <BadgeCheck className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">VIP Pass (AED 1,499)</span>
                    <p className="text-gray-600 text-sm mt-1">Complete experience with dedicated concierge, backstage access, luxury gift package, and private dinner with industry leaders.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-white/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-sm">
                  <Info className="h-4 w-4 text-sheraa-primary" />
                  <span className="font-medium text-sheraa-primary">Group discounts available for 5+ passes</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Related Links */}
        <div className="mt-16 max-w-6xl mx-auto">
          <h3 className="text-xl font-semibold text-sheraa-primary mb-6">Explore More</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/events/sef/agenda" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
              <h4 className="font-medium text-lg text-sheraa-primary group-hover:text-sheraa-teal transition-colors">Event Agenda</h4>
              <p className="text-gray-600 mt-2 text-sm">Browse the full schedule of keynotes, panels, and workshops.</p>
            </Link>
            
            <Link to="/events/sef/speakers" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
              <h4 className="font-medium text-lg text-sheraa-primary group-hover:text-sheraa-teal transition-colors">Featured Speakers</h4>
              <p className="text-gray-600 mt-2 text-sm">Meet the minds shaping the future of entrepreneurship.</p>
            </Link>
            
            <Link to="/events/sef/experience" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
              <h4 className="font-medium text-lg text-sheraa-primary group-hover:text-sheraa-teal transition-colors">SEF Experience</h4>
              <p className="text-gray-600 mt-2 text-sm">Discover the unique zones and experiences at SEF'26.</p>
            </Link>
            
            <Link to="/events/sef/faq" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
              <h4 className="font-medium text-lg text-sheraa-primary group-hover:text-sheraa-teal transition-colors">FAQs</h4>
              <p className="text-gray-600 mt-2 text-sm">Find answers to commonly asked questions about the festival.</p>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default SEFRegisterPage;
