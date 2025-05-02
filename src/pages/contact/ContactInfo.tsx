
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface ContactInfoItemProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

const ContactInfoItem = ({ icon: Icon, title, children }: ContactInfoItemProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
      <div className="w-14 h-14 rounded-full bg-sheraa-primary/10 flex items-center justify-center mb-4 text-sheraa-primary">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-4 text-sheraa-dark">{title}</h3>
      <div className="text-gray-600">
        {children}
      </div>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <ContactInfoItem icon={MapPin} title="Visit Us">
        <>
          <p className="mb-2"><strong>Sheraa HQ (SRTIP):</strong></p>
          <p>Sharjah Research Technology and Innovation Park, Sharjah, UAE</p>
          <a href="https://maps.app.goo.gl/NB3JhgpyecjWcaUJ6" target="_blank" rel="noopener noreferrer" className="text-sheraa-primary hover:underline mt-2 inline-block">Get Directions</a>
          
          <p className="mt-4 mb-2"><strong>AUS Hub:</strong></p>
          <p>Ground Floor, Library Building, American University of Sharjah</p>
          <a href="https://maps.app.goo.gl/RVQX4dZVqTcpXmLC8" target="_blank" rel="noopener noreferrer" className="text-sheraa-primary hover:underline mt-2 inline-block">Get Directions</a>
          
          <p className="mt-4 mb-2"><strong>UOS Hub:</strong></p>
          <p>W3 Building, University of Sharjah</p>
          <a href="https://maps.app.goo.gl/fTeHH9VXRrDMwBSC6" target="_blank" rel="noopener noreferrer" className="text-sheraa-primary hover:underline mt-2 inline-block">Get Directions</a>
        </>
      </ContactInfoItem>
      
      <ContactInfoItem icon={Phone} title="Contact Information">
        <>
          <p className="mb-2"><strong>General Inquiries:</strong></p>
          <p>Email: <a href="mailto:info@sheraa.ae" className="text-sheraa-primary hover:underline">info@sheraa.ae</a></p>
          <p className="mt-2">Phone: <a href="tel:+97165094000" className="text-sheraa-primary hover:underline">+971 6 509 4000</a></p>
          
          <p className="mt-4 mb-2"><strong>SRTIP Hub:</strong> +971 6 509 4000</p>
          <p className="mt-2 mb-2"><strong>AUS Hub:</strong> +971 6 509 4000</p>
          <p className="mt-2 mb-2"><strong>UOS Hub:</strong> +971 6 509 4010</p>
        </>
      </ContactInfoItem>
      
      <ContactInfoItem icon={Clock} title="Operating Hours">
        <>
          <p className="mb-2"><strong>Sunday - Thursday:</strong></p>
          <p>9:00 AM - 5:00 PM</p>
          
          <p className="mt-4 mb-2"><strong>Friday - Saturday:</strong></p>
          <p>Closed</p>
          
          <div className="mt-6 flex items-center gap-4">
            <a href="https://linkedin.com/company/sheraa" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-sheraa-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://instagram.com/sheraa_shj" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-sheraa-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>
            <a href="https://facebook.com/SheraaShj" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-sheraa-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>
        </>
      </ContactInfoItem>
    </div>
  );
};

export default ContactInfo;
