
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, ExternalLink, Phone, Calendar } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { useToast } from '@/hooks/use-toast';

const bookingSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(8, { message: 'Please enter a valid phone number.' }),
  date: z.date({ required_error: 'Please select a date.' }),
  timeSlot: z.string({ required_error: 'Please select a time slot.' }),
  purpose: z.string().min(10, { message: 'Please provide more details about your visit purpose.' }),
  hubId: z.string()
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const WEEKDAY_SLOTS = [
  '09:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '01:00 PM - 02:00 PM',
  '02:00 PM - 03:00 PM',
  '03:00 PM - 04:00 PM',
  '04:00 PM - 05:00 PM'
];

const WEEKEND_SLOTS = [
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '12:00 PM - 01:00 PM'
];

const HubsSection = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedHub, setSelectedHub] = useState<string | null>(null);
  const { toast } = useToast();
  const [loggedInUser] = useLocalStorage<any | null>("loggedInUser", null);
  
  const hubs = [
    {
      id: "sheraa-hq",
      name: "Sheraa HQ (SRTIP)",
      description: "Located within the Sharjah Research Technology and Innovation Park (SRTIP), our headquarters connects startups with cutting-edge research, technology facilities, and a dynamic innovation ecosystem.",
      address: "Sharjah Research Technology and Innovation Park, Sharjah, UAE",
      phone: "+971 6 509 4000",
      directions: "https://maps.app.goo.gl/1AHDVr9SdAtyf9Qu9",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "aus-hub",
      name: "AUS Hub",
      description: "Situated on the ground floor of the Library Building at the American University of Sharjah (AUS), this hub engages students and faculty, fostering early-stage innovation.",
      address: "Ground Floor, Library Building, American University of Sharjah, University City, Sharjah, UAE",
      phone: "+971 6 509 4000",
      directions: "https://maps.app.goo.gl/9j1RwPzUGGmhpC9y5",
      mapPDF: "/lovable-uploads/aus-map.pdf",
      image: "https://images.unsplash.com/photo-1599403802665-144cfeddbb6a?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "uos-hub",
      name: "UOS Hub",
      description: "Located in the W3 Building at the University of Sharjah (UOS), this hub connects with another key academic institution, broadening our reach to young talent.",
      address: "W3 Building, University of Sharjah, University City, Sharjah, UAE",
      phone: "+971 6 509 4010",
      directions: "https://maps.app.goo.gl/7dtcpM2HwNzVH3Dx5",
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: loggedInUser ? `${loggedInUser.firstName} ${loggedInUser.lastName}` : '',
      email: loggedInUser?.email || '',
      phone: '',
      purpose: '',
    }
  });

  const handleOpenBooking = (hubId: string) => {
    setSelectedHub(hubId);
    form.setValue('hubId', hubId);
    setIsBookingOpen(true);
  };

  const onSubmit = (data: BookingFormValues) => {
    // In a real implementation, this would send the booking request to a backend
    console.log('Booking submitted:', data);
    
    const hubName = hubs.find(hub => hub.id === data.hubId)?.name || 'Unknown Hub';
    
    toast({
      title: "Booking Request Submitted",
      description: `Your booking for ${hubName} on ${format(data.date, 'EEEE, MMMM d, yyyy')} at ${data.timeSlot} has been sent for confirmation. We will contact you shortly.`,
    });
    
    setIsBookingOpen(false);
    form.reset();
  };

  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // 0 is Sunday, 6 is Saturday
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-sheraa-primary">Our Hubs</h2>
            <p className="text-lg text-gray-700">
              Sheraa operates from strategic locations within Sharjah's vibrant academic and research 
              landscape, ensuring accessibility and fostering collaboration.
            </p>
          </motion.div>

          <div className="space-y-8">
            {hubs.map((hub) => (
              <motion.div 
                key={hub.id} 
                variants={itemVariants}
                className="flex flex-col md:flex-row gap-6 items-center"
              >
                <div className="w-full md:w-1/3 h-[200px] overflow-hidden rounded-xl">
                  <img 
                    src={hub.image} 
                    alt={hub.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy" 
                  />
                </div>
                <Card className="w-full md:w-2/3 border-sheraa-primary/10">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2 text-sheraa-dark">{hub.name}</h3>
                    <p className="text-gray-600 mb-4">{hub.description}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-5 h-5 text-sheraa-primary shrink-0 mt-1" />
                        <span className="text-sm">{hub.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-5 h-5 text-sheraa-primary shrink-0" />
                        <span className="text-sm">{hub.phone}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={hub.directions} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                          Get Directions <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </Button>
                      
                      {hub.mapPDF && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={hub.mapPDF} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                            Download Map <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        </Button>
                      )}
                      
                      <Button 
                        className="bg-sheraa-primary hover:bg-sheraa-primary/90 text-white" 
                        size="sm"
                        onClick={() => handleOpenBooking(hub.id)}
                      >
                        <Calendar className="w-4 h-4 mr-2" /> Book a Visit
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Book a Visit</DialogTitle>
                <DialogDescription>
                  Choose a date and time for your visit to {selectedHub && hubs.find(hub => hub.id === selectedHub)?.name}.
                </DialogDescription>
              </DialogHeader>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@example.com" {...field} />
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
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+971..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Visit Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "EEEE, MMMM d, yyyy")
                                ) : (
                                  <span>Select a date</span>
                                )}
                                <Calendar className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <CalendarComponent
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => 
                                date < new Date() || 
                                date > new Date(new Date().setMonth(new Date().getMonth() + 3))
                              }
                              initialFocus
                              className={cn("p-3 pointer-events-auto")}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="timeSlot"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Time Slot</FormLabel>
                        <Tabs defaultValue="weekday" className="w-full">
                          <TabsList className="grid w-full grid-cols-2 mb-2">
                            <TabsTrigger value="weekday">Weekdays</TabsTrigger>
                            <TabsTrigger value="weekend">Weekends</TabsTrigger>
                          </TabsList>
                          
                          <TabsContent value="weekday" className="mt-0">
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="grid grid-cols-1 md:grid-cols-2 gap-2"
                              >
                                {WEEKDAY_SLOTS.map((slot) => (
                                  <div key={slot} className="flex items-center space-x-2">
                                    <RadioGroupItem value={slot} id={slot} />
                                    <FormLabel htmlFor={slot} className="font-normal cursor-pointer">
                                      {slot}
                                    </FormLabel>
                                  </div>
                                ))}
                              </RadioGroup>
                            </FormControl>
                          </TabsContent>
                          
                          <TabsContent value="weekend" className="mt-0">
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="grid grid-cols-1 md:grid-cols-2 gap-2"
                              >
                                {WEEKEND_SLOTS.map((slot) => (
                                  <div key={slot} className="flex items-center space-x-2">
                                    <RadioGroupItem value={slot} id={slot} />
                                    <FormLabel htmlFor={slot} className="font-normal cursor-pointer">
                                      {slot}
                                    </FormLabel>
                                  </div>
                                ))}
                              </RadioGroup>
                            </FormControl>
                          </TabsContent>
                        </Tabs>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="purpose"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Purpose of Visit</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please describe the purpose of your visit..."
                            className="min-h-[80px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <input type="hidden" {...form.register('hubId')} />

                  <DialogFooter>
                    <Button type="button" variant="outline" onClick={() => setIsBookingOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-sheraa-primary hover:bg-sheraa-primary/90 text-white">
                      Submit Booking Request
                    </Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </section>
  );
};

export default HubsSection;
