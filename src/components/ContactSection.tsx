import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactSection = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      inquiryType: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Sharjah Research Technology and Innovation Park, Sharjah, UAE",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+971 6 509 4000",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@sheraa.ae",
    },
  ];

  const inquiryTypes = [
    { value: "programs", label: "Programs & Incubation" },
    { value: "partnerships", label: "Partnerships & Collaboration" },
    { value: "events", label: "Events & Workshops" },
    { value: "media", label: "Media & Press" },
    { value: "other", label: "Other Inquiries" },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-t from-sheraa-background-soft to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-sheraa-primary to-sheraa-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Have questions about our programs or want to explore partnership opportunities? 
            Reach out to us today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="bg-white p-8 rounded-xl shadow-sheraa-soft mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-sheraa-dark">Contact Information</h3>
              
              <div className="space-y-8 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="p-3 rounded-full bg-gradient-to-r from-sheraa-primary/10 to-sheraa-secondary/10 group-hover:from-sheraa-primary/20 group-hover:to-sheraa-secondary/20 transition-all">
                      <item.icon className="w-6 h-6 text-sheraa-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4 text-sheraa-dark">Follow Us</h3>
              <div className="flex gap-4">
                {["twitter", "facebook", "linkedin", "instagram"].map((social) => (
                  <a 
                    key={social}
                    href={`#${social}`} 
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-sheraa-primary/5 to-sheraa-secondary/5 flex items-center justify-center hover:from-sheraa-primary/10 hover:to-sheraa-secondary/10 transition-all"
                  >
                    <span className="sr-only">{social}</span>
                    <i className={`fa fa-${social}`}></i>
                  </a>
                ))}
              </div>
            </div>

            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-sheraa-medium">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.2714799777614!2d55.53889631501241!3d25.287673983854937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c3cf2462dbb%3A0x950298ae1f1d2c3f!2sSharjah%20Research%20Technology%20and%20Innovation%20Park!5e0!3m2!1sen!2sae!4v1627900000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <Card className="p-8 shadow-sheraa-medium border-none bg-gradient-to-br from-white to-sheraa-light backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-8 text-sheraa-dark">Send Us a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sheraa-dark font-medium">Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              className="border-gray-200 focus-visible:ring-sheraa-primary focus-visible:border-sheraa-primary bg-white/50" 
                              {...field} 
                            />
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
                          <FormLabel className="text-sheraa-dark font-medium">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="your@email.com" 
                              className="border-gray-200 focus-visible:ring-sheraa-primary focus-visible:border-sheraa-primary bg-white/50" 
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="inquiryType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sheraa-dark font-medium">Inquiry Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-gray-200 focus:ring-sheraa-primary bg-white/50">
                              <SelectValue placeholder="Select the nature of your inquiry" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {inquiryTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sheraa-dark font-medium">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can we help you?"
                            className="min-h-[160px] border-gray-200 focus-visible:ring-sheraa-primary focus-visible:border-sheraa-primary bg-white/50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <GradientButton 
                    type="submit" 
                    size="xl"
                    className="w-full"
                  >
                    Send Message
                  </GradientButton>
                </form>
              </Form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
