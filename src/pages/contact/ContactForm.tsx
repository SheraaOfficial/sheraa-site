
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GradientButton } from '@/components/ui/gradient-button';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  userType: z.string().min(1, 'Please select who you are'),
  inquiryType: z.string().min(1, 'Please select what your inquiry is about'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  agreeToPrivacy: z.boolean().refine(val => val === true, {
    message: 'You must agree to the privacy policy',
  }),
});

const ContactForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      userType: '',
      inquiryType: '',
      message: '',
      agreeToPrivacy: false,
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log('Form submitted:', data);
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
  };

  const userTypes = [
    { value: 'student', label: 'Student / Aspiring Entrepreneur' },
    { value: 'startup', label: 'Startup Founder' },
    { value: 'business', label: 'Established Business Owner' },
    { value: 'investor', label: 'Investor' },
    { value: 'corporate', label: 'Corporate / Government Entity' },
    { value: 'academic', label: 'Academic Institution' },
    { value: 'other', label: 'Other' },
  ];

  const inquiryTypes = [
    { value: 'programs', label: 'Programs & Eligibility' },
    { value: 'membership', label: 'Membership Information' },
    { value: 'partnership', label: 'Partnership Opportunities' },
    { value: 'events', label: 'Events & Festival' },
    { value: 'media', label: 'Media Inquiry' },
    { value: 'general', label: 'General Information' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <div className="bg-sheraa-light rounded-xl p-8 md:p-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-sheraa-dark mb-4">Send Us a Message</h2>
        <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">Full Name *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your name" 
                      className="border-gray-200 focus-visible:ring-sheraa-primary focus-visible:border-sheraa-primary" 
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
                  <FormLabel className="text-sm font-medium text-gray-700">Email Address *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="your.email@example.com" 
                      className="border-gray-200 focus-visible:ring-sheraa-primary focus-visible:border-sheraa-primary" 
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
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">Phone Number</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="+971 XX XXX XXXX" 
                    className="border-gray-200 focus-visible:ring-sheraa-primary focus-visible:border-sheraa-primary" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="userType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">I am a... *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-gray-200 focus:ring-sheraa-primary">
                        <SelectValue placeholder="Select who you are" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {userTypes.map((type) => (
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
              name="inquiryType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">My inquiry is about... *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-gray-200 focus:ring-sheraa-primary">
                        <SelectValue placeholder="Select what your inquiry is about" />
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
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">Your Message *</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Please provide details about your inquiry..." 
                    className="min-h-[120px] border-gray-200 focus-visible:ring-sheraa-primary focus-visible:border-sheraa-primary" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="agreeToPrivacy"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 space-y-0">
                <FormControl>
                  <input 
                    type="checkbox" 
                    className="rounded border-gray-300 text-sheraa-primary focus:ring-sheraa-primary h-4 w-4"
                    checked={field.value}
                    onChange={field.onChange}
                    id="agreeToPrivacy"
                  />
                </FormControl>
                <FormLabel htmlFor="agreeToPrivacy" className="text-sm text-gray-600 cursor-pointer">
                  I agree to the <a href="/privacy-policy" className="text-sheraa-primary hover:underline">Privacy Policy</a>
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="text-center">
            <GradientButton type="submit" size="lg" className="px-12">
              Submit Message
            </GradientButton>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
