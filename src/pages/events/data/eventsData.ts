
export interface Event {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  attendees: string;
  type: string;
  featured: boolean;
  registrationOpen: boolean;
}

export const upcomingEvents: Event[] = [
  {
    title: "Sharjah Entrepreneurship Festival 2026",
    description: "The region's largest entrepreneurship festival bringing together thousands of entrepreneurs, investors, and innovators for two days of inspiration, learning, and networking.",
    date: "January 31 - February 1, 2026",
    time: "9:00 AM - 6:00 PM",
    location: "SRTIP, Sharjah",
    attendees: "14,000+ Expected",
    type: "Festival",
    featured: true,
    registrationOpen: true
  },
  {
    title: "Startup Pitch Night",
    description: "Monthly pitch competition where early-stage startups present their ideas to a panel of investors and mentors.",
    date: "February 15, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Sheraa HQ, SRTIP",
    attendees: "100+",
    type: "Competition",
    featured: false,
    registrationOpen: true
  },
  {
    title: "Women in Entrepreneurship Workshop",
    description: "Empowering female entrepreneurs with practical skills, networking opportunities, and mentorship connections.",
    date: "February 28, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "AUS Hub",
    attendees: "50",
    type: "Workshop",
    featured: false,
    registrationOpen: false
  }
];

export const pastEvents: Event[] = [
  {
    title: "Sharjah Entrepreneurship Festival 2025",
    description: "Successfully hosted 14,000+ attendees, 300+ speakers from 45 countries, and 250+ activities across multiple zones.",
    date: "February 1-2, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "SRTIP, Sharjah",
    attendees: "14,000+",
    type: "Festival",
    featured: true,
    registrationOpen: false
  },
  {
    title: "Access Sharjah Challenge 2024 Demo Day",
    description: "Final presentations from ASC 2024 participants, showcasing innovative solutions in AgriTech and Livestock Health.",
    date: "December 10, 2024",
    time: "2:00 PM - 6:00 PM",
    location: "GITEX Global, Dubai",
    attendees: "500+",
    type: "Demo Day",
    featured: false,
    registrationOpen: false
  },
  {
    title: "S3 Incubator Cohort 5 Graduation",
    description: "Celebrating the achievements of our latest S3 Incubator cohort and their journey to market success.",
    date: "November 25, 2024",
    time: "5:00 PM - 8:00 PM",
    location: "Sheraa HQ, SRTIP",
    attendees: "200+",
    type: "Graduation",
    featured: false,
    registrationOpen: false
  }
];

export const typeColors: Record<string, string> = {
  "Festival": "bg-sheraa-sef-primary/10 text-sheraa-sef-primary border-sheraa-sef-primary/20",
  "Competition": "bg-red-100 text-red-800 border-red-200",
  "Workshop": "bg-green-100 text-green-800 border-green-200",
  "Demo Day": "bg-blue-100 text-blue-800 border-blue-200",
  "Graduation": "bg-purple-100 text-purple-800 border-purple-200",
  "Conference": "bg-orange-100 text-orange-800 border-orange-200"
};
