
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import {
  Clock,
  Calendar as CalendarIcon,
  CheckCircle,
  Video,
  Coffee,
  Phone,
  Users,
  X
} from 'lucide-react';

interface BookingType {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  duration: string;
  color: string;
}

interface CalendarBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: string;
  defaultLocation?: string;
}

const CalendarBookingModal: React.FC<CalendarBookingModalProps> = ({ 
  isOpen, 
  onClose,
  defaultType = 'general',
  defaultLocation = 'virtual'
}) => {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>(defaultType);
  const [selectedLocation, setSelectedLocation] = useState<string>(defaultLocation);
  const [notes, setNotes] = useState<string>('');
  const [step, setStep] = useState<number>(1);
  
  const bookingTypes: BookingType[] = [
    {
      id: 'general',
      title: 'General Consultation',
      description: 'Discuss your entrepreneurial journey and get guidance',
      icon: Users,
      duration: '30 min',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      id: 'program',
      title: 'Program Information',
      description: 'Learn about our incubation and acceleration programs',
      icon: CalendarIcon,
      duration: '30 min',
      color: 'bg-purple-100 text-purple-800'
    },
    {
      id: 'investment',
      title: 'Investment Discussion',
      description: 'Explore funding opportunities and investor connections',
      icon: CheckCircle,
      duration: '45 min',
      color: 'bg-green-100 text-green-800'
    },
    {
      id: 'partnership',
      title: 'Partnership Exploration',
      description: 'Discuss potential collaboration and strategic partnerships',
      icon: Users,
      duration: '45 min',
      color: 'bg-orange-100 text-orange-800'
    }
  ];

  const availableTimes = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', 
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
  ];

  const meetingLocations = [
    { id: 'virtual', name: 'Virtual Meeting', icon: Video },
    { id: 'srtip', name: 'Sheraa HQ (SRTIP)', icon: Coffee },
    { id: 'aus', name: 'AUS Hub', icon: Coffee },
    { id: 'uos', name: 'UOS Hub', icon: Coffee },
    { id: 'phone', name: 'Phone Call', icon: Phone }
  ];

  const selectedBookingType = bookingTypes.find(type => type.id === selectedType);
  const selectedMeetingLocation = meetingLocations.find(location => location.id === selectedLocation);

  const handleContinue = () => {
    if (step === 1) {
      if (!selectedDate || !selectedTime) {
        toast({
          title: 'Please select both date and time',
          variant: 'destructive'
        });
        return;
      }
      setStep(2);
    } else {
      handleBookAppointment();
    }
  };

  const handleBookAppointment = () => {
    // In a real implementation, this would connect to a backend or calendar API
    console.log('Booking appointment:', {
      date: selectedDate,
      time: selectedTime,
      type: selectedType,
      location: selectedLocation,
      notes
    });

    toast({
      title: "Appointment Booked!",
      description: `Your ${selectedBookingType?.title} has been scheduled for ${selectedDate?.toDateString()} at ${selectedTime}.`
    });

    // Reset and close
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setSelectedDate(undefined);
    setSelectedTime('');
    setSelectedType(defaultType);
    setSelectedLocation(defaultLocation);
    setNotes('');
    setStep(1);
  };

  // Disable past dates
  const disabledDays = { before: new Date() };
  
  // Disable weekends
  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6;
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) {
        resetForm();
        onClose();
      }
    }}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Book a Consultation</DialogTitle>
          <DialogDescription>
            Schedule a meeting with a Sheraa team member to discuss your specific needs.
          </DialogDescription>
        </DialogHeader>

        {step === 1 ? (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <Label className="text-base font-medium mb-3 block">Select a Date</Label>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => isWeekend(date) || disabledDays.before > date}
                  className="rounded-md border"
                />
              </div>
              
              <div className="flex-1">
                <Label className="text-base font-medium mb-3 block">Select a Time</Label>
                {selectedDate ? (
                  <div className="grid grid-cols-2 gap-2">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        className={`py-2 px-3 rounded-md border text-sm ${
                          selectedTime === time
                            ? 'bg-sheraa-primary text-white'
                            : 'hover:bg-sheraa-primary/10'
                        }`}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center border rounded-md bg-gray-50 text-gray-500 p-4">
                    Please select a date first
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <Label className="text-base font-medium mb-3 block">Consultation Type</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {bookingTypes.map((type) => {
                  const IconComponent = type.icon;
                  const isSelected = selectedType === type.id;
                  
                  return (
                    <div
                      key={type.id}
                      className={`cursor-pointer rounded-lg border p-4 ${
                        isSelected 
                          ? 'border-sheraa-primary ring-2 ring-sheraa-primary/20' 
                          : 'hover:border-sheraa-primary/30'
                      }`}
                      onClick={() => setSelectedType(type.id)}
                    >
                      <div className="flex gap-3">
                        <div className={`w-10 h-10 rounded-full ${type.color} flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-medium">{type.title}</div>
                          <div className="text-xs text-gray-500">{type.description}</div>
                          <Badge variant="secondary" className="mt-2 text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            {type.duration}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-sheraa-primary/10 rounded-lg p-4 space-y-2">
              <div className="font-medium">Appointment Summary</div>
              <div className="flex items-center gap-2 text-sm">
                <CalendarIcon className="w-4 h-4 text-sheraa-primary" />
                {selectedDate?.toDateString()} at {selectedTime}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-sheraa-primary" />
                {selectedBookingType?.title} ({selectedBookingType?.duration})
              </div>
            </div>
            
            <div>
              <Label htmlFor="location">Meeting Location</Label>
              <Select
                value={selectedLocation}
                onValueChange={setSelectedLocation}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  {meetingLocations.map((location) => {
                    const IconComponent = location.icon;
                    return (
                      <SelectItem key={location.id} value={location.id}>
                        <div className="flex items-center gap-2">
                          <IconComponent className="w-4 h-4" />
                          {location.name}
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="notes">Additional Notes (Optional)</Label>
              <Textarea
                id="notes"
                placeholder="Let us know any specific topics you'd like to discuss or questions you have"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
              />
            </div>
          </div>
        )}
        
        <DialogFooter className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={() => step === 1 ? onClose() : setStep(1)}
          >
            {step === 1 ? 'Cancel' : 'Back'}
          </Button>
          <div className="space-x-2">
            {step === 2 && (
              <Button
                variant="destructive"
                size="sm"
                onClick={resetForm}
              >
                <X className="w-4 h-4 mr-2" />
                Reset
              </Button>
            )}
            <Button 
              onClick={handleContinue}
              className="bg-sheraa-primary hover:bg-sheraa-primary/90"
            >
              {step === 1 ? 'Continue' : 'Book Appointment'}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CalendarBookingModal;
